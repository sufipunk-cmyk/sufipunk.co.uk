import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FlowerDivider } from "@/components/site/Ornaments";

const SUBSTACK_SUBSCRIBE =
  "https://sufipunksanctuaryfirst.substack.com/subscribe";

/**
 * /book — a dedicated home for the forthcoming book, Low-Demand Faith
 * (Phase 1, Section E).
 *
 * The homepage carries a shorter "The Book" teaser section near Safe
 * Passage; this page is the canonical, fuller description it links to,
 * so the book has a real URL to share, a per-page canonical, and Book
 * structured data. Copy is the author-approved homepage copy, expanded
 * only with framing that already lives on the site (no new claims, no
 * invented publication date or price — it is "coming soon").
 */
export const metadata: Metadata = {
  title: "Low-Demand Faith — The Book",
  description:
    "Low-Demand Faith: Autonomy, Neurodivergence, and the Sacred — a forthcoming book by Sufi Punk. Faith as relationship, safety, and consent, drawn from lived experience rather than doctrine.",
  alternates: {
    canonical: "/book",
  },
  openGraph: {
    title: "Low-Demand Faith — The Book",
    description:
      "Autonomy, Neurodivergence, and the Sacred — a forthcoming book by Sufi Punk.",
    url: "https://sufipunk.co.uk/book",
    type: "book",
    images: [
      {
        url: "/images/book/low-demand-faith-cover.jpg",
        width: 1400,
        height: 1979,
        alt:
          "Cover of the book Low-Demand Faith — Autonomy, Neurodivergence, and the Sacred, by Sufi Punk. A cream parchment field with layered green mountain silhouettes and a small ochre sun.",
      },
    ],
  },
  twitter: {
    images: ["/images/book/low-demand-faith-cover.jpg"],
  },
};

// Book JSON-LD (Section E). schema.org/Book — a recognised forthcoming
// title with author + publisher + work-in-progress status. No ISBN or
// datePublished is asserted, because the book is not yet released and we
// will not invent either.
const bookJsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Low-Demand Faith",
  alternateName: "Low-Demand Faith: Autonomy, Neurodivergence, and the Sacred",
  author: {
    "@type": "Person",
    name: "Sufi Punk",
  },
  inLanguage: "en-GB",
  bookFormat: "https://schema.org/EBook",
  publisher: {
    "@type": "Organization",
    name: "Sufi Punk",
  },
  about: [
    "Neurodivergence and faith",
    "Low-demand spirituality",
    "Autonomy and consent in religious life",
  ],
  url: "https://sufipunk.co.uk/book",
  image: "https://sufipunk.co.uk/images/book/low-demand-faith-cover.jpg",
  description:
    "Low-Demand Faith arises from a growing crisis of belonging within religious and spiritual spaces, particularly for neurodivergent people, trauma survivors, and others whose nervous systems do not tolerate coercion. It holds faith as relationship, safety, and consent.",
};

export default function BookPage() {
  return (
    <div className="bg-parchment text-ink">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD must be injected as a raw <script> body; the object is built from trusted local content and serialised with JSON.stringify, so there is no user input to escape.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
      />
      <SiteHeader />

      <main>
        <section className="container max-w-5xl py-16 sm:py-24">
          <div className="grid gap-12 md:grid-cols-12 md:items-start md:gap-16">
            {/* Cover */}
            <div className="md:col-span-5">
              <div className="mx-auto max-w-[340px] md:mx-0 md:sticky md:top-10">
                <div className="overflow-hidden border border-hairline bg-parchment shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]">
                  <Image
                    src="/images/book/low-demand-faith-cover.jpg"
                    alt="Cover of the book Low-Demand Faith — Autonomy, Neurodivergence, and the Sacred, by Sufi Punk. A cream parchment field with layered green mountain silhouettes and a small ochre sun."
                    width={1400}
                    height={1979}
                    sizes="(min-width: 768px) 340px, 80vw"
                    priority
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="md:col-span-7">
              <p className="font-serif text-xs uppercase tracking-[0.35em] text-amber-text">
                Coming Soon · A Book
              </p>
              <h1 className="mt-3 font-display text-4xl leading-tight text-green sm:text-5xl">
                Low-Demand Faith
                <span className="mt-1 block font-display text-2xl text-green-soft sm:text-3xl">
                  Autonomy, Neurodivergence, and the Sacred
                </span>
              </h1>

              <div className="prose-zawiya mt-7 max-w-xl space-y-4 font-serif text-[1.05rem] leading-relaxed">
                <p>
                  <em>Low-Demand Faith</em> arises from a growing crisis of
                  belonging within religious and spiritual spaces, particularly
                  for neurodivergent people, trauma survivors, and others whose
                  nervous systems do not tolerate coercion. At a time when faith
                  is often framed through performance, certainty, and
                  compliance, this book holds a different orientation:{" "}
                  <em>faith as relationship, safety, and consent</em>.
                </p>
                <p>
                  Drawing on lived experience rather than doctrine, it names how
                  harm is frequently spiritualised, and how many people leave
                  faith quietly. Not because they reject God, but because their
                  bodies cannot survive the way belief is delivered.
                </p>
                <p>
                  It takes shape in a period of deep social division, when
                  religious difference is increasingly politicised, and Muslim
                  identities in particular are subject to suspicion, fear, and
                  misrepresentation. <em>Low-Demand Faith</em> holds this
                  intersection with care, honesty, and restraint.
                </p>
                <p className="font-display text-xl italic text-green">
                  Not a method to perform. A way of staying that the body can
                  survive.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href={SUBSTACK_SUBSCRIBE}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-green bg-green px-6 py-3 font-serif text-sm uppercase tracking-[0.18em] text-parchment transition hover:bg-green-soft"
                >
                  Follow the book&apos;s progress
                  <span aria-hidden>→</span>
                </a>
                <span className="font-serif text-sm text-ink-soft">
                  Updates arrive via Sanctuary First on Substack.
                </span>
              </div>
            </div>
          </div>
        </section>

        <FlowerDivider />

        <div className="container py-12 text-center">
          <p className="font-serif text-sm">
            <Link
              href="/"
              className="text-green underline decoration-amber/60 underline-offset-4 hover:text-amber"
            >
              ← Return to the home page
            </Link>
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}