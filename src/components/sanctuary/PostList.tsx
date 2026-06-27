import Link from "next/link";
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

// M22 bug fix — Sanctuary library "Preparing the library… (N posts)" stuck
// in production for weeks. Root cause: this list and the FilterBar were both
// `"use client"` components reading `useSearchParams`, wrapped in a Suspense
// boundary in the page. During static build on Netlify the Suspense fallback
// was rendered into the HTML and the client hydration that should have
// swapped in the real list never resolved for visitors — so all twelve
// posts were JavaScript-dependent and invisible to anyone who never made it
// past hydration (including search engines).
//
// Fix: PostList is now a Server Component. All twelve posts render directly
// into the HTML at build time, with `data-*` attributes on each <li>
// describing the post's arc / experience / theme / tradition. The empty
// state is also pre-rendered into the HTML (hidden by default). The
// FilterBar reads `useSearchParams` on the client and toggles the `hidden`
// attribute on the list items + the empty-state block. If JS fails, all
// twelve posts still show in their natural sort order, and the page is
// fully crawlable.
//
// M18 still applies: visible date intentionally removed from post cards.
// The Arrival / Threshold / Practice arc kicker carries the sequence-telling
// role for the reader; the underlying `date` frontmatter is still present
// and still drives sort order, sitemap lastModified, and Article JSON-LD
// datePublished — none of that is visible UI.
//
// (Phase 1, Section E briefly surfaced a visible <time> on each card; that
// was reverted at the author's request — the M18 decision stands.)

export function PostList({ posts }: { posts: PostListEntry[] }) {
  return (
    <>
      <ul
        id="sanctuary-post-list"
        data-total={posts.length}
        className="container divide-y divide-hairline/60 border-y border-hairline/60"
      >
        {posts.map((p) => (
          <li
            key={p.slug}
            data-post-slug={p.slug}
            data-arc={p.arc}
            data-experience={p.experience.join(" ")}
            data-theme={p.theme.join(" ")}
            data-tradition={p.tradition.join(" ")}
          >
            <Link
              href={`/sanctuary/${p.slug}`}
              className="group block py-8 transition-colors hover:bg-parchment-deep/30 sm:py-10"
            >
              <article className="grid gap-3 sm:grid-cols-12 sm:items-baseline sm:gap-8">
                <div className="sm:col-span-3">
                  <p className="font-serif text-xs uppercase tracking-[0.3em] text-amber-text">
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
                        className="ml-3 inline-flex translate-y-[-2px] items-center gap-1 rounded-full border border-amber/60 bg-amber/10 px-2 py-0.5 align-middle font-serif text-[0.65rem] uppercase tracking-[0.18em] text-amber-text"
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

      {/* Empty-state block. Pre-rendered hidden; FilterBar reveals it on the
          client when active filters narrow the visible set to zero. Lives
          inside the HTML so the markup matches between server and client
          and no hydration mismatch can occur. */}
      <div
        id="sanctuary-empty-state"
        hidden
        className="container py-16 text-center"
      >
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
    </>
  );
}