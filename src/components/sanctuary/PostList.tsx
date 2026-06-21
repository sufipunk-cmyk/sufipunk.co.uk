"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { labelFor } from "@/content/sanctuary/taxonomies";

/**
 * The shape of a post entry as it crosses the server → client boundary.
 * (We deliberately avoid passing the full markdown body to the client.)
 */
export type PostListEntry = {
  slug: string;
  title: string;
  excerpt?: string;
  date: string;
  arc: string;
  experience: string[];
  theme: string[];
  tradition: string[];
  readingMinutes: number;
  awaitingMigration?: boolean;
};

function parseList(v: string | null): string[] {
  return v ? v.split(",").filter(Boolean) : [];
}

// M18: visible date intentionally removed from post cards. The Arrival /
// Threshold / Practice arc kicker carries the sequence-telling role for
// the reader; the underlying `date` frontmatter is still present and still
// drives sort order, sitemap lastModified, and Article JSON-LD
// datePublished — none of that is visible UI.

export function PostList({ posts }: { posts: PostListEntry[] }) {
  const params = useSearchParams();

  const filters = useMemo(
    () => ({
      experience: parseList(params.get("experience")),
      theme: parseList(params.get("theme")),
      tradition: parseList(params.get("tradition")),
      arc: parseList(params.get("arc")),
    }),
    [params]
  );

  const visible = useMemo(() => {
    return posts.filter((p) => {
      if (
        filters.experience.length &&
        !filters.experience.some((id) => p.experience.includes(id))
      )
        return false;
      if (
        filters.theme.length &&
        !filters.theme.some((id) => p.theme.includes(id))
      )
        return false;
      if (
        filters.tradition.length &&
        !filters.tradition.some((id) => p.tradition.includes(id))
      )
        return false;
      if (filters.arc.length && !filters.arc.includes(p.arc)) return false;
      return true;
    });
  }, [posts, filters]);

  if (visible.length === 0) {
    return (
      <div className="container py-16 text-center">
        <p className="font-display text-2xl italic text-green">
          Nothing matches that combination — yet.
        </p>
        <p className="mt-3 font-serif text-ink-soft">
          The collection is open and ongoing. Try fewer filters, or
          <Link
            href="/sanctuary"
            className="ml-1 underline decoration-amber/60 underline-offset-4 hover:text-amber"
          >
            clear them
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <ul className="container divide-y divide-hairline/60 border-y border-hairline/60">
      {visible.map((p) => (
        <li key={p.slug}>
          <Link
            href={`/sanctuary/${p.slug}`}
            className="group block py-8 transition-colors hover:bg-parchment-deep/30 sm:py-10"
          >
            <article className="grid gap-3 sm:grid-cols-12 sm:items-baseline sm:gap-8">
              <div className="sm:col-span-3">
                <p className="font-serif text-xs uppercase tracking-[0.3em] text-amber">
                  {labelFor("arc", p.arc) ?? p.arc}
                </p>
                <p className="mt-1 font-serif text-xs text-ink-soft">
                  {p.readingMinutes} min read
                </p>
              </div>
              <div className="sm:col-span-9">
                <h3 className="font-display text-2xl text-green transition-colors group-hover:text-amber sm:text-3xl">
                  {p.title}
                  {p.awaitingMigration ? (
                    <span
                      title="Canonical text being migrated"
                      className="ml-3 inline-flex translate-y-[-2px] items-center gap-1 rounded-full border border-amber/60 bg-amber/10 px-2 py-0.5 align-middle font-serif text-[0.65rem] uppercase tracking-[0.18em] text-amber"
                    >
                      ❁ awaiting migration
                    </span>
                  ) : null}
                </h3>
                {p.excerpt ? (
                  <p className="mt-3 font-serif text-[1.02rem] leading-relaxed text-ink">
                    {p.excerpt}
                  </p>
                ) : null}
                {(p.theme.length > 0 || p.experience.length > 0) && (
                  <p className="mt-3 font-serif text-xs uppercase tracking-[0.18em] text-ink-soft">
                    {[
                      ...p.experience.slice(0, 2).map((id) => labelFor("experience", id)),
                      ...p.theme.slice(0, 2).map((id) => labelFor("theme", id)),
                    ]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                )}
              </div>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
}