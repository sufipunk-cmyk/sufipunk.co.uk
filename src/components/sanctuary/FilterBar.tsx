"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FILTER_GROUPS, type FilterGroup } from "@/content/sanctuary/taxonomies";

/**
 * Filter bar for the Sanctuary First index.
 *
 * State lives in the URL query string. Selecting a filter pushes
 * `?experience=…&theme=…` etc. so each filter combination has its own
 * shareable URL and the browser back button restores prior state.
 *
 * Multiple selections within a group are OR'd. Selections across groups
 * are AND'd. ("Burnout AND Islamic-and-Sufi" = posts tagged both.)
 *
 * M22 — Filtering now happens as a DOM overlay on the server-rendered
 * post list (see PostList.tsx). The full set of posts always exists in the
 * HTML; this component toggles each <li>'s `hidden` attribute based on the
 * active filters. Two consequences:
 *
 *  1. If client JS fails for any reason, every post still renders.
 *     This fixes the M22 "Preparing the library… (12 posts)" production
 *     hang, in which the entire list lived inside a client component that
 *     was never hydrating.
 *
 *  2. The library is now fully crawlable / indexable — the post titles,
 *     excerpts and per-post links sit in the static HTML.
 *
 * The "N posts" count is now derived from how many list items remain
 * visible after filtering, computed in the same useEffect as the DOM
 * toggle so the count and the visible items can never drift apart.
 */

function parseList(v: string | null): string[] {
  return v ? v.split(",").filter(Boolean) : [];
}

export function FilterBar({ totalPosts }: { totalPosts: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Until the first effect runs (or if JS fails), the bar reports the
  // total — which matches what's actually visible in the unfiltered HTML.
  const [visibleCount, setVisibleCount] = useState(totalPosts);

  const activeByGroup = useMemo(() => {
    const map: Record<FilterGroup["key"], string[]> = {
      experience: [],
      theme: [],
      tradition: [],
      arc: [],
    };
    for (const g of FILTER_GROUPS) {
      const v = searchParams.get(g.key);
      map[g.key] = v ? v.split(",").filter(Boolean) : [];
    }
    return map;
  }, [searchParams]);

  // Apply DOM filtering. Runs on mount and on every searchParams change.
  // This is the only place the server-rendered list is mutated.
  useEffect(() => {
    const list = document.getElementById("sanctuary-post-list");
    if (!list) return;

    const items = Array.from(
      list.querySelectorAll<HTMLLIElement>("li[data-post-slug]"),
    );

    const f = {
      experience: activeByGroup.experience,
      theme: activeByGroup.theme,
      tradition: activeByGroup.tradition,
      arc: activeByGroup.arc,
    };

    let visible = 0;
    for (const li of items) {
      const arc = li.dataset.arc ?? "";
      const exp = (li.dataset.experience ?? "").split(" ").filter(Boolean);
      const theme = (li.dataset.theme ?? "").split(" ").filter(Boolean);
      const tradition = (li.dataset.tradition ?? "").split(" ").filter(Boolean);

      let show = true;
      if (f.arc.length && !f.arc.includes(arc)) show = false;
      if (
        show &&
        f.experience.length &&
        !f.experience.some((id) => exp.includes(id))
      )
        show = false;
      if (
        show &&
        f.theme.length &&
        !f.theme.some((id) => theme.includes(id))
      )
        show = false;
      if (
        show &&
        f.tradition.length &&
        !f.tradition.some((id) => tradition.includes(id))
      )
        show = false;

      li.hidden = !show;
      if (show) visible++;
    }

    setVisibleCount(visible);

    // Empty-state toggle. When nothing matches, hide the <ul> and reveal
    // the empty-state block beneath it. When at least one post matches,
    // restore the list and hide the empty state.
    const empty = document.getElementById("sanctuary-empty-state");
    if (empty) empty.hidden = visible !== 0;
    (list as HTMLElement).hidden = visible === 0;
  }, [activeByGroup]);

  const toggle = useCallback(
    (group: FilterGroup["key"], id: string) => {
      const current = new Set(activeByGroup[group]);
      if (current.has(id)) current.delete(id);
      else current.add(id);

      const next = new URLSearchParams(searchParams.toString());
      if (current.size === 0) next.delete(group);
      else next.set(group, Array.from(current).join(","));

      const qs = next.toString();
      router.replace(qs ? `/sanctuary?${qs}` : "/sanctuary", { scroll: false });
    },
    [activeByGroup, router, searchParams],
  );

  const totalActive = Object.values(activeByGroup).reduce(
    (acc, arr) => acc + arr.length,
    0,
  );

  return (
    <section
      aria-label="Filter the library"
      className="border-y border-hairline/60 bg-parchment-deep/30"
    >
      <div className="container py-8 sm:py-10">
        <div className="flex flex-col items-baseline justify-between gap-3 sm:flex-row">
          <h2 className="font-display text-xl text-green sm:text-2xl">
            Wander by what meets you
          </h2>
          <p className="font-serif text-sm text-ink-soft">
            {visibleCount === 1 ? "1 post" : `${visibleCount} posts`}
            {totalActive > 0 ? (
              <>
                {" · "}
                <Link
                  href="/sanctuary"
                  scroll={false}
                  className="underline decoration-amber/60 underline-offset-4 hover:text-amber"
                >
                  clear filters
                </Link>
              </>
            ) : null}
          </p>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FILTER_GROUPS.map((group) => (
            <fieldset key={group.key} className="border-0 p-0">
              <legend className="font-serif text-xs uppercase tracking-[0.25em] text-amber-text">
                {group.label}
              </legend>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.options.map((opt) => {
                  const active = activeByGroup[group.key].includes(opt.id);
                  return (
                    <li key={opt.id}>
                      <button
                        type="button"
                        onClick={() => toggle(group.key, opt.id)}
                        aria-pressed={active}
                        className={`inline-flex items-center rounded-full border px-3 py-1 font-serif text-[0.82rem] leading-5 transition ${
                          active
                            ? "border-green bg-green text-parchment hover:bg-green-soft"
                            : "border-hairline bg-parchment text-ink-soft hover:border-green/60 hover:text-green"
                        }`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </fieldset>
          ))}
        </div>
      </div>
    </section>
  );
}