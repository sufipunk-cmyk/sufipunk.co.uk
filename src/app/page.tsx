import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SanctuaryMap } from "@/components/site/SanctuaryMap";
import { AcrossTheGarden } from "@/components/site/AcrossTheGarden";
import {
  FlowerDivider,
  ArchOutline,
} from "@/components/site/Ornaments";

const SUBSTACK_SUBSCRIBE =
  "https://sufipunksanctuaryfirst.substack.com/subscribe";
const KOFI = "https://ko-fi.com/sufipunk";

/**
 * Per-page Open Graph image (M13).
 *
 * The site-wide OG fallback in `layout.tsx` carries no image. The
 * homepage uses the overview map as its specific OG image so a
 * link-preview shows the zawiya itself — the conceptual key — rather
 * than an empty default.
 */
export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: [
      {
        url: "/images/places/sanctuary-map.jpg",
        width: 2200,
        height: 1467,
        alt:
          "Illustrated overview map of the digital zawiya — a stone path winding through flowers and mountains, with the named places labelled along the way.",
      },
    ],
  },
  twitter: {
    images: ["/images/places/sanctuary-map.jpg"],
  },
};

/**
 * Homepage — the digital zawiya itself.
 *
 * Section order (M14 — places + strands merged into one section)
 *
 *   1. The Welcome — atmospheric, no nav clutter.
 *   2. Sufi Punk / three spaces — short clarifying line. (M13 draft,
 *      flagged for author review.)
 *   3. The Map — historical grounding for the word "zawiya" and the
 *      illustrated overview map. The previous "Places along the
 *      path" grid that lived at the bottom of this section moved
 *      into Across the Garden in M14, since the two sections were
 *      describing the same four places independently.
 *   4. Across the Garden — the merged places-and-strands section.
 *      Golden Door as the wide hero (no strand attached); the three
 *      resident places sit shoulder-to-shoulder underneath, each
 *      stating its strand once with a single direct "Enter …" link.
 *   5. The Book — Low-Demand Faith, near the outward-facing Safe
 *      Passage area rather than the top. (M13 experiment.) The
 *      Substack CTA here now reads "Follow the book's progress →"
 *      so it does not collide with the Quiet Letters CTA below.
 *   6. The Patronage Ask — the Fountain.
 *   7. Quiet Letters — the email signup. CTA stays
 *      "Sanctuary First on Substack →" because that is the
 *      subscribe action.
 */
// Site-level JSON-LD (Phase 1, Section E). A WebSite + Person graph on the
// homepage gives crawlers the canonical site name, URL, language, and the
// author behind the work (with sameAs links to the publication's external
// homes). Per-post Article JSON-LD and the /book Book JSON-LD live on their
// own pages; this is the root-level structured data.
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://sufipunk.co.uk/#website",
      name: "Sufi Punk — A Digital Zawiya",
      url: "https://sufipunk.co.uk",
      description:
        "A low-demand sanctuary for neurodivergent seekers, exhausted believers, and anyone living close to the edges of capacity.",
      inLanguage: "en-GB",
      publisher: { "@id": "https://sufipunk.co.uk/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://sufipunk.co.uk/#person",
      name: "Sufi Punk",
      url: "https://sufipunk.co.uk",
      description:
        "The creative identity behind Sufi Punk — Sanctuary First, Spiritual Underground, and Safe Passage.",
      sameAs: [
        "https://sufipunksanctuaryfirst.substack.com",
        "https://ko-fi.com/sufipunk",
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <div className="bg-parchment text-ink">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD must be injected as a raw <script> body; the object is built from trusted local content and serialised with JSON.stringify, so there is no user input to escape.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
      />
      <SiteHeader />

      {/* 1. THE WELCOME — full-width, atmospheric. No nav clutter. */}
      <section className="bg-parchment-grain relative overflow-hidden">
        {/* faint pointed-arch silhouettes flanking the welcome */}
        <ArchOutline
          className="pointer-events-none absolute -left-12 top-10 h-[480px] w-[280px] text-green/10 sm:-left-16 md:left-4 md:h-[560px]"
        />
        <ArchOutline
          className="pointer-events-none absolute -right-12 top-10 h-[480px] w-[280px] text-green/10 sm:-right-16 md:right-4 md:h-[560px]"
        />

        <div className="container relative z-10 flex flex-col items-center px-4 py-20 text-center sm:py-28">
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-amber-text">
            Sufi Punk&apos;s Digital Zawiya
          </p>

          <h1 className="mt-4 font-display text-4xl leading-[1.05] text-green sm:text-6xl md:text-7xl">
            A place to rest,
            <br />
            <em className="not-italic text-green-soft">remember what is sacred,</em>
            <br />
            and reclaim the art of being.
          </h1>

          <div className="mt-10 max-w-2xl space-y-5 font-serif text-[1.05rem] leading-relaxed text-ink sm:text-lg">
            <p>
              A low-demand sanctuary for neurodivergent seekers, overwhelmed
              caregivers, exhausted believers, and anyone living close to the
              edges of capacity — and for the professionals, organisations,
              and faith leaders walking alongside them.
            </p>
            <p className="font-display text-xl italic text-green sm:text-2xl">
              Come as you are. Move as you can. Disappear when needed.
              Return without apology.
            </p>
            <p className="text-ink-soft">
              The roots are Islamic. The language is human. The gate is open.
            </p>
          </div>

          <FlowerDivider />
        </div>
      </section>

      {/* 2. SUFI PUNK / THREE SPACES — short clarifying line, sits
          between the welcome and the map. Quiet, not a CTA. */}
      <section className="bg-parchment py-10 sm:py-14" aria-label="Sufi Punk and the three spaces">
        <div className="container max-w-2xl text-center">
          <p className="font-serif text-xs uppercase tracking-[0.35em] text-amber-text">
            Sufi Punk
          </p>
          <p className="mt-3 font-display text-[1.25rem] italic leading-snug text-green sm:text-[1.4rem]">
            Sufi Punk is the creative identity behind this work.
            <br className="hidden sm:block" />
            <span className="not-italic text-green-soft">
              {" "}Three spaces hold it —{" "}
            </span>
            <span>Sanctuary First, Spiritual Underground, Safe Passage.</span>
          </p>
        </div>
      </section>

      {/* 3. THE MAP — the conceptual key. Comes before "Across the
          Garden" so the historical grounding for the word lands
          first, and so the named places exist before strands are
          introduced as their residents. */}
      <SanctuaryMap />

      {/* 4. ACROSS THE GARDEN — strands as the activities that happen
          at the places shown in the map above. */}
      <AcrossTheGarden />

      {/* 5. THE BOOK — featured prominently, but sitting near the
          outward-facing Safe Passage area rather than at the top of
          the page. M13 experiment: this position is being evaluated
          once live. */}
      <section className="bg-parchment py-20 sm:py-28" id="the-book">
        <div className="container grid gap-12 md:grid-cols-12 md:items-center md:gap-16">
          <div className="md:col-span-5">
            <div className="mx-auto max-w-[320px] md:mx-0">
              <div className="overflow-hidden border border-hairline bg-parchment shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]">
                <Image
                  src="/images/book/low-demand-faith-cover.jpg"
                  alt="Cover of the book Low-Demand Faith — Autonomy, Neurodivergence, and the Sacred, by Sufi Punk. A cream parchment field with layered green mountain silhouettes and a small ochre sun."
                  width={1400}
                  height={1979}
                  sizes="(min-width: 768px) 320px, 80vw"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="font-serif text-xs uppercase tracking-[0.35em] text-amber-text">
              Coming Soon · A Book
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-green sm:text-5xl">
              Low-Demand Faith
              <span className="block text-2xl text-green-soft sm:text-3xl">
                Autonomy, Neurodivergence, and the Sacred
              </span>
            </h2>

            <div className="mt-6 max-w-xl space-y-4 font-serif text-[1.02rem] leading-relaxed">
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
            </div>

            {/* M14 — the Book CTA and the Quiet Letters CTA both
                used to read "Sanctuary First on Substack →", which
                collided on the same page. The Book CTA now names the
                book-specific action ("Follow the book's progress")
                and the Quiet Letters CTA keeps the subscribe wording.
                Wording flagged for the author's review. */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              {/* Phase 1 (Section E) — the primary action from the homepage
                  teaser is now "Read about the book", pointing at the
                  dedicated /book page (the canonical, fuller description).
                  The Substack follow remains, named distinctly so the two
                  do not collide. */}
              <Link
                href="/book"
                className="inline-flex items-center gap-2 border border-green bg-green px-6 py-3 font-serif text-sm uppercase tracking-[0.18em] text-parchment transition hover:bg-green-soft"
              >
                Read about the book
                <span aria-hidden>→</span>
              </Link>
              <a
                href={SUBSTACK_SUBSCRIBE}
                target="_blank"
                rel="noreferrer"
                className="font-serif text-sm text-green underline decoration-amber/60 underline-offset-4 transition hover:text-amber"
              >
                Follow its progress on Substack
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE PATRONAGE ASK — Supporting Sanctuary, the Fountain. */}
      <section
        id="patronage"
        className="relative overflow-hidden bg-green py-20 text-parchment sm:py-28"
      >
        <ArchOutline className="pointer-events-none absolute -left-24 top-10 h-[420px] w-[260px] text-amber/20" />
        <ArchOutline className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[260px] text-amber/20" />

        <div className="container relative z-10 max-w-3xl text-center">
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-parchment">
            The Fountain
          </p>
          <h2 className="mt-3 font-display text-3xl text-parchment sm:text-5xl">
            Supporting Sanctuary
          </h2>

          <p className="mx-auto mt-6 max-w-xl font-display text-2xl italic leading-snug text-parchment sm:text-3xl">
            Supporting this work is an act of love, invitation, and sacred
            trust.
          </p>

          <div className="prose-zawiya mx-auto mt-8 text-parchment/90">
            <p>
              Patronage helps fund rest, capacity, and the invisible labour
              that keeps sanctuary open. Dawah as care, not persuasion. Your
              support helps resource parents navigating faith alongside PDA,
              and develops low-demand religious language.
            </p>
          </div>

          {/* M-A11y (Phase 1, Section B) — this block previously held two
              CTAs ("Become a patron · $10/month" and "Buy Me a Coffee")
              that pointed to the same Ko-fi URL, which WAVE flagged as
              redundant adjacent links. Collapsed to the single primary
              patron button; Ko-fi's own page already offers the one-off
              "coffee" option, so no destination is lost. */}
          <div className="mt-10 flex items-center justify-center">
            <a
              href={KOFI}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-amber px-7 py-3 font-serif text-sm uppercase tracking-[0.18em] text-ink transition hover:bg-amber-soft"
            >
              Become a patron · $10 / month
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. THE EMAIL SIGNUP — quiet, no pressure. */}
      <section className="bg-parchment py-20 sm:py-28" id="join">
        <div className="container max-w-2xl text-center">
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-amber-text">
            Quiet Letters
          </p>
          <h2 className="mt-3 font-display text-3xl text-green sm:text-4xl">
            Join the Zawiya
          </h2>

          <p className="mx-auto mt-5 max-w-xl font-serif text-[1.05rem] text-ink-soft">
            Subscribe for updates on <em>Low-Demand Faith</em>, reflections on
            neurodivergent faith, and access to new Safe Passage resources.
          </p>

          <a
            href={SUBSTACK_SUBSCRIBE}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 border border-green bg-green px-7 py-3 font-serif text-sm uppercase tracking-[0.18em] text-parchment transition hover:bg-green-soft"
          >
            Sanctuary First on Substack
            <span aria-hidden>→</span>
          </a>

          <p className="mt-4 font-serif text-xs italic text-ink-soft">
            No tracking pixels. No automated sequences. Just letters when there&apos;s
            something to say.
          </p>

          <FlowerDivider />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}