import { Suspense } from "react";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SanctuaryIntro } from "@/components/sanctuary/SanctuaryIntro";
import { SanctuaryLibrary } from "@/components/sanctuary/SanctuaryLibrary";
import type { PostListEntry } from "@/components/sanctuary/PostList";
import { getAllSanctuaryPosts } from "@/content/sanctuary/loader";

export const metadata: Metadata = {
  title: "Sanctuary First",
  description:
    "Witness writing — an open, ongoing library of arrival, threshold, and practice. Filtered by experience, theme, tradition, and arc.",
  openGraph: {
    images: [
      {
        url: "/images/places/the-lantern-library.jpg",
        alt:
          "The Lantern Library — a green-and-white mosaic lantern arched over a carved white stone pedestal, with a stack of books beside it and daisies and pink cosmos in the surrounding garden.",
      },
    ],
  },
  twitter: {
    images: ["/images/places/the-lantern-library.jpg"],
  },
};

export default function SanctuaryPage() {
  const posts: PostListEntry[] = getAllSanctuaryPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    date: p.date,
    arc: p.arc,
    experience: p.experience,
    theme: p.theme,
    tradition: p.tradition,
    readingMinutes: p.readingMinutes,
    awaitingMigration: p.awaitingMigration,
  }));

  return (
    <div className="bg-parchment text-ink">
      <SiteHeader />

      <SanctuaryIntro />

      {/*
        SanctuaryLibrary uses useSearchParams; per Next 15 client
        components reading search params must sit inside <Suspense>.
      */}
      <Suspense fallback={<LibraryFallback count={posts.length} />}>
        <SanctuaryLibrary posts={posts} />
      </Suspense>

      {posts.length === 0 ? (
        <div className="container py-20 text-center">
          <p className="font-display text-2xl italic text-green">
            The library is being prepared.
          </p>
          <p className="mt-3 font-serif text-ink-soft">
            Markdown posts go in <code>/content/sanctuary/</code>. See{" "}
            <code>_README.md</code> there for the frontmatter schema.
          </p>
        </div>
      ) : null}

      <SiteFooter />
    </div>
  );
}

function LibraryFallback({ count }: { count: number }) {
  return (
    <div className="container py-12 text-center font-serif text-sm text-ink-soft">
      Preparing the library… ({count} {count === 1 ? "post" : "posts"})
    </div>
  );
}