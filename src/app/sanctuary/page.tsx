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

// M22 — Posts are read here in the Server Component so the full library
// is included in the static HTML at build time. SanctuaryLibrary renders
// the FilterBar inside a Suspense boundary (needed for useSearchParams)
// and the PostList outside it, so a hydration failure on the bar can
// never hide the posts again (see BUG-sanctuary-posts-not-loading.md).
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

      <SanctuaryLibrary posts={posts} />

      <SiteFooter />
    </div>
  );
}