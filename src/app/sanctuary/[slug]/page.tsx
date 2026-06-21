import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FlowerDivider } from "@/components/site/Ornaments";
import {
  getAllSanctuaryPosts,
  getNeighbours,
  getSanctuaryPost,
} from "@/content/sanctuary/loader";
import { labelFor } from "@/content/sanctuary/taxonomies";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllSanctuaryPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getSanctuaryPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt ?? `${post.title} — a Sanctuary First post.`,
  };
}

// M18: visible date intentionally removed from the post header. The arc
// kicker (Arrival / Threshold / Practice) is the sequence-telling element
// for readers; the underlying `date` frontmatter is still present and
// continues to drive sort order, sitemap lastModified, and the Article
// JSON-LD `datePublished` below — none of that is visible UI.

export default async function SanctuaryPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getSanctuaryPost(slug);
  if (!post) notFound();

  const { previous, next } = getNeighbours(slug);

  // Build a small, readable list of taxonomy chips for the header.
  const chips: { group: "experience" | "theme" | "tradition"; id: string }[] = [
    ...post.experience.map((id) => ({ group: "experience" as const, id })),
    ...post.theme.map((id) => ({ group: "theme" as const, id })),
    ...post.tradition.map((id) => ({ group: "tradition" as const, id })),
  ];

  // Article JSON-LD (M13). Headline + author + datePublished, per
  // schema.org/Article. Picked up by Google as a recognised article
  // when the post is indexed.
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    author: {
      "@type": "Person",
      name: "Sufi Punk",
    },
    datePublished: post.date,
    description: post.excerpt ?? undefined,
    mainEntityOfPage: `https://sufipunk.co.uk/sanctuary/${post.slug}`,
    publisher: {
      "@type": "Organization",
      name: "Sufi Punk",
    },
  };

  return (
    <div className="bg-parchment text-ink">
      <script
        type="application/ld+json"
        // The structured-data object is built from trusted local
        // content; safe to inline.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <SiteHeader />

      <main>
        {/* Post header */}
        <header className="container max-w-2xl py-16 text-center sm:py-20">
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-amber">
            {labelFor("arc", post.arc) ?? post.arc}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-green sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 font-serif text-sm text-ink-soft">
            {post.readingMinutes} min read
          </p>

          {post.awaitingMigration ? (
            <div className="mx-auto mt-8 max-w-xl rounded-sm border border-amber/50 bg-amber/10 px-4 py-3 text-left">
              <p className="font-serif text-xs uppercase tracking-[0.18em] text-amber">
                ❁ Awaiting migration
              </p>
              <p className="mt-1.5 font-serif text-sm leading-relaxed text-ink-soft">
                The canonical text for this post is being migrated from
                sanctuary-blog.vercel.app. The content below is a
                placeholder describing what will live here, so the layout
                and navigation can be reviewed before the real copy lands.
              </p>
            </div>
          ) : null}
        </header>

        {/* Post body — narrow reading column */}
        <article
          className="container prose-zawiya sanctuary-prose max-w-2xl pb-12"
          // The markdown is parsed at build time from a trusted local file.
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        {/* Taxonomy chips, rendered as filter shortcuts */}
        {chips.length > 0 ? (
          <div className="container max-w-2xl pb-16">
            <p className="font-serif text-xs uppercase tracking-[0.25em] text-amber">
              Tagged
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {chips.map(({ group, id }) => (
                <li key={`${group}:${id}`}>
                  <Link
                    href={`/sanctuary?${group}=${id}`}
                    className="inline-flex items-center rounded-full border border-hairline bg-parchment px-3 py-1 font-serif text-[0.82rem] text-ink-soft transition hover:border-green/60 hover:text-green"
                  >
                    {labelFor(group, id) ?? id}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <FlowerDivider />

        {/* Prev / next navigation */}
        <nav
          aria-label="Sanctuary navigation"
          className="container max-w-3xl py-12"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <PrevNextLink
              direction="previous"
              post={previous}
              fallback="You're at the older end of the library."
            />
            <PrevNextLink
              direction="next"
              post={next}
              fallback="You're at the newest entry."
            />
          </div>

          <div className="mt-10 text-center font-serif text-sm">
            <Link
              href="/sanctuary"
              className="text-green underline decoration-amber/60 underline-offset-4 hover:text-amber"
            >
              ← Return to The Lantern Library
            </Link>
          </div>
        </nav>
      </main>

      <SiteFooter />
    </div>
  );
}

function PrevNextLink({
  direction,
  post,
  fallback,
}: {
  direction: "previous" | "next";
  post:
    | {
        slug: string;
        title: string;
        arc: string;
      }
    | undefined;
  fallback: string;
}) {
  const isPrev = direction === "previous";
  const align = isPrev ? "text-left" : "text-right";

  if (!post) {
    return (
      <div
        className={`flex flex-col rounded-sm border border-dashed border-hairline px-5 py-5 ${align}`}
      >
        <span className="font-serif text-xs uppercase tracking-[0.25em] text-ink-soft">
          {isPrev ? "Older" : "Newer"}
        </span>
        <span className="mt-1 font-serif text-sm italic text-ink-soft">
          {fallback}
        </span>
      </div>
    );
  }

  return (
    <Link
      href={`/sanctuary/${post.slug}`}
      className={`group block rounded-sm border border-hairline bg-parchment px-5 py-5 transition hover:border-green/60 ${align}`}
    >
      <span className="font-serif text-xs uppercase tracking-[0.25em] text-amber">
        {isPrev ? "← Older" : "Newer →"}
      </span>
      <span className="mt-1 block font-display text-lg leading-snug text-green transition-colors group-hover:text-amber sm:text-xl">
        {post.title}
      </span>
      <span className="mt-1 block font-serif text-xs uppercase tracking-[0.18em] text-ink-soft">
        {labelFor("arc", post.arc) ?? post.arc}
      </span>
    </Link>
  );
}