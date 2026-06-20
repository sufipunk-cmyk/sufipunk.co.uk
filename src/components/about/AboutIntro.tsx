import Image from "next/image";
import { FlowerDivider } from "@/components/site/Ornaments";

/**
 * About page — Sufi Punk in the correct voice.
 *
 * Sourcing notes
 *
 *  - The opening kicker / hero line is the brief's confirmed
 *    soul-line: "A soul that prepares the ground. The holding. The
 *    place you are cherished." (SufiPunk_Master_Brief.md, "ABOUT
 *    — /about", first bullet.)
 *
 *  - The orienting bio line is the brief's confirmed short bio,
 *    quoted verbatim. The brief explicitly notes that
 *    "systems-generated trauma" is drawn from published research
 *    (Clements & Aiello, University of Leeds / Cerebra) and should
 *    read as a reference, not as a coinage; that footnote is honoured
 *    here as a small attribution line beneath the quote.
 *
 *  - The personal-voice body is the "About Me" card text supplied
 *    on 19 June 2026 from the Sanctuary First print booklet,
 *    reproduced verbatim. The four-item strip and the closing
 *    "Devotion. Refusal. Sanctuary. Return." line are also
 *    reproduced verbatim from that source.
 *
 *  - The pull-quote "Writing here is simply the active record of
 *    my devotion." is supplied by the author for use somewhere on
 *    the page; placed near the close of the personal-voice body so
 *    it reads as a quiet seal on the section, just before the
 *    four-item strip.
 *
 *  - The mosaic-doorway photograph is the booklet's "About Me" card
 *    image. The author's own caption — "A handmade mosaic doorway
 *    — a small physical expression of the sanctuary this work is
 *    building." — is preserved as the figcaption.
 *
 *  - The page does not carry a place-named flower divider. This
 *    content does not live at one of the four named places on the
 *    overview map; it is the author standing slightly behind the
 *    whole garden. A plain ❁ divider closes the section instead,
 *    and the return link below leads back to the home page rather
 *    than to a specific place.
 */

const KOFI = "https://ko-fi.com/sufipunk";
const SUBSTACK = "https://sufipunksanctuaryfirst.substack.com/subscribe";

export function AboutIntro() {
  return (
    <section
      className="relative bg-parchment py-16 sm:py-20"
      aria-labelledby="about-intro"
    >
      <div className="container max-w-3xl">
        {/* Header */}
        <div className="text-center">
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-amber">
            About
          </p>
          <h1
            id="about-intro"
            className="mt-3 font-display text-4xl text-green sm:text-6xl"
          >
            A soul that prepares the ground.
          </h1>
          <p className="mt-4 font-display text-xl italic text-green-soft sm:text-2xl">
            The holding. The place you are cherished.
          </p>
        </div>

        {/* Orienting bio — the short line, set apart */}
        <div className="mt-14">
          <figure className="prose-zawiya sanctuary-prose">
            <blockquote className="border-l-2 border-amber/60 pl-5 font-display text-[1.1rem] italic leading-snug text-green sm:text-[1.2rem]">
              “Written by a parent navigating PDA, faith, and what
              researchers have named systems-generated trauma.
              <sup className="ml-1 align-super font-serif text-[0.7em] not-italic text-amber">
                <a
                  href="#footnote-systems-generated-trauma"
                  aria-label="See footnote on systems-generated trauma"
                  className="no-underline hover:text-green"
                >
                  ★
                </a>
              </sup>{" "}
              Sufi Punk is the name this practice goes by — not a pen
              name hiding a person, but a lineage statement about how
              the work is done.”
            </blockquote>
          </figure>
        </div>

        {/* About Me — the personal-voice body, verbatim from the booklet */}
        <div className="mt-16">
          <h2 className="font-display text-2xl italic text-green sm:text-3xl">
            About Me
          </h2>
          <p className="mt-2 font-serif text-xs uppercase tracking-[0.3em] text-amber">
            This is my special interest project.
          </p>

          <div className="prose-zawiya sanctuary-prose mt-8">
            <p>
              I am a Muslim PDA parent, AuDHD writer, and Artistic
              Director.
            </p>
            <p>
              I live at the intersection of low-demand parenting,
              neurodivergence and refusal, faith without coercion, and
              culture, art, and sovereignty.
            </p>
            <p>This work grew out of necessity — and rebellion.</p>
            <p>When systems could not hold my child.</p>
            <p>When faith spaces could not hold my pain.</p>
            <p>When obedience was framed as God.</p>
            <p>
              For my autistic brain, the intersections of Islam, somatic
              safety, and radical divine love are a profound and
              sustaining special interest. The kind that goes all the way
              down. That reorganises how you see everything. That never
              gets boring and never stops giving.
            </p>
            <p>You are welcome to wander in my heart as I hold you.</p>
          </div>

          {/* Mosaic doorway photograph with the booklet's caption */}
          <figure className="mx-auto mt-12 max-w-md">
            <div className="overflow-hidden border border-hairline bg-parchment shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]">
              <Image
                src="/images/about/mosaic-doorway.jpg"
                alt="A handmade mosaic doorway in jewelled tiles, set on a parchment-cream surface alongside a vase of pink tulips and white wildflowers, a small love-stone, an open book, and a tray of loose mosaic pieces."
                width={1400}
                height={1867}
                sizes="(min-width: 768px) 28rem, 80vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-4 text-center font-display italic text-[1rem] leading-snug text-green-soft">
              A handmade mosaic doorway — a small physical expression of
              the sanctuary this work is building.
            </figcaption>
          </figure>

          {/* Continued personal-voice body */}
          <div className="prose-zawiya sanctuary-prose mt-12">
            <p>
              I built Sanctuary First so safety could come first. This is
              not about forcing mosques or institutions to accommodate
              us. It is about accepting — gently — that some spaces were
              never built with us in mind.
            </p>
            <p>
              This is sanctuary for those who were never meant to comply.
            </p>
          </div>

          {/* Pull-quote — the active record of devotion */}
          <figure className="prose-zawiya mx-auto mt-12 max-w-2xl text-center">
            <blockquote className="font-display text-[1.25rem] italic leading-snug text-green sm:text-[1.4rem]">
              “Writing here is simply the active record of my devotion.”
            </blockquote>
          </figure>
        </div>

        {/* Four-item strip — verbatim from the booklet card */}
        <div className="mt-16">
          <ul
            className="grid gap-px bg-hairline/60 sm:grid-cols-4"
            aria-label="The four currents this work lives at the intersection of"
          >
            {[
              "Low-demand parenting",
              "Neurodivergence and refusal",
              "Faith without coercion",
              "Culture, art, and sovereignty",
            ].map((label) => (
              <li
                key={label}
                className="bg-parchment px-5 py-6 text-center font-display text-[0.95rem] italic leading-snug text-green sm:px-4 sm:py-8 sm:text-[1rem]"
              >
                {label}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-6 max-w-xl text-center font-serif text-sm leading-relaxed text-ink-soft">
            That fourth current — <em>culture, art, and sovereignty</em> —
            is not abstract. I have spent a decade as an Artistic Director,
            and the discipline of building accessible creative space sits
            inside everything written here.
          </p>
        </div>

        {/* Closing — verbatim from the booklet card */}
        <div className="mt-14 text-center">
          <p className="font-display text-[1.25rem] italic leading-snug text-green sm:text-[1.4rem]">
            Devotion. Refusal. Sanctuary. Return.
          </p>
          <p className="mt-3 font-serif text-[1rem] text-ink-soft">
            This is how I make meaning. This is how I stay connected.
          </p>
        </div>

        {/* Footnote — moved here from beneath the orienting bio quote
            in M13. Reworded per author note: "though I apply it more
            broadly than their original context." */}
        <aside
          id="footnote-systems-generated-trauma"
          className="mt-16 border-t border-hairline/60 pt-5"
          aria-label="Footnote on systems-generated trauma"
        >
          <p className="font-serif text-xs leading-relaxed text-ink-soft">
            <span aria-hidden className="mr-1 text-amber">★</span>
            <em>Systems-generated trauma</em> is drawn from research by
            Clements &amp; Aiello (University of Leeds / Cerebra),
            referenced here in their language, though I apply it more
            broadly than their original context.
          </p>
        </aside>

        {/* Quiet outward links — Ko-fi + Substack, per brief */}
        <div className="mt-14">
          <div className="prose-zawiya sanctuary-prose text-center">
            <p>
              If something here meets you, you are welcome to{" "}
              <a
                href={SUBSTACK}
                target="_blank"
                rel="noreferrer"
                className="text-green underline decoration-amber/60 underline-offset-4 hover:text-amber"
              >
                Sanctuary First on Substack
              </a>{" "}
              or{" "}
              <a
                href={KOFI}
                target="_blank"
                rel="noreferrer"
                className="text-green underline decoration-amber/60 underline-offset-4 hover:text-amber"
              >
                support the work on Ko-fi
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <FlowerDivider />
    </section>
  );
}