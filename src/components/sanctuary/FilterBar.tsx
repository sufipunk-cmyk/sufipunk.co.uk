"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
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
 */
export function FilterBar({ resultsCount }: { resultsCount: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();

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
    [activeByGroup, router, searchParams]
  );

  const totalActive = Object.values(activeByGroup).reduce(
    (acc, arr) => acc + arr.length,
    0
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
            {resultsCount === 1
              ? "1 post"
              : `${resultsCount} posts`}
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
              <legend className="font-serif text-xs uppercase tracking-[0.25em] text-amber">
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
                        className={
                          "inline-flex items-center rounded-full border px-3 py-1 font-serif text-[0.82rem] leading-5 transition " +
                          (active
                            ? "border-green bg-green text-parchment hover:bg-green-soft"
                            : "border-hairline bg-parchment text-ink-soft hover:border-green/60 hover:text-green")
                        }
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