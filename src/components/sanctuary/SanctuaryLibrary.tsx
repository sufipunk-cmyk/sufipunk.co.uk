import { Suspense } from "react";
import { FilterBar } from "./FilterBar";
import { PostList, type PostListEntry } from "./PostList";

/**
 * Server Component shell around the Sanctuary First library.
 *
 * M22 — Refactored from a client wrapper (which paired a client FilterBar
 * with a client PostList, both reading `useSearchParams`) into a pure
 * server component that renders:
 *
 *   1. <FilterBar />  — client, inside Suspense (because it reads
 *      useSearchParams). The fallback below mimics the bar's outer chrome
 *      so the layout doesn't jump when JS arrives.
 *   2. <PostList />   — server, NOT inside Suspense. The full list of
 *      posts renders directly into the HTML at build time so the page is
 *      crawlable and always shows content even if client JS never loads.
 *
 * This is the fix described in BUG-sanctuary-posts-not-loading.md, point
 * 4: "consider whether it should be server-rendered instead". The previous
 * implementation left the post list trapped inside a never-resolving
 * client Suspense boundary on Netlify, producing the long-running
 * "Preparing the library… (12 posts)" hang.
 */
export function SanctuaryLibrary({ posts }: { posts: PostListEntry[] }) {
  if (posts.length === 0) {
    return (
      <div className="container py-20 text-center">
        <p className="font-display text-2xl italic text-green">
          The library is being prepared.
        </p>
        <p className="mt-3 font-serif text-ink-soft">
          Markdown posts go in <code>/content/sanctuary/</code>. See{" "}
          <code>_README.md</code> there for the frontmatter schema.
        </p>
      </div>
    );
  }

  return (
    <>
      <Suspense fallback={<FilterBarFallback total={posts.length} />}>
        <FilterBar totalPosts={posts.length} />
      </Suspense>
      <PostList posts={posts} />
    </>
  );
}

/**
 * Minimal fallback for the FilterBar. Renders only the outer chrome and
 * the total post count — never the word "Preparing", so the M22 bug
 * symptom cannot recur in this form. The actual filter chips appear once
 * the client component hydrates.
 */
function FilterBarFallback({ total }: { total: number }) {
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
            {total === 1 ? "1 post" : `${total} posts`}
          </p>
        </div>
      </div>
    </section>
  );
}