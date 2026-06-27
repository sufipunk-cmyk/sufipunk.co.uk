import Image from "next/image";
import Link from "next/link";
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
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-amber-text">
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
              <sup className="ml-1 align-super font-serif text-[0.7em] not-italic text-amber-text">
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
          <p className="mt-2 font-serif text-xs uppercase tracking-[0.3em] text-amber-text">
            This is my special interest project.
          </p>

          <div className="prose-zawiya sanctuary-prose mt-8">
            <p>
              I am a Muslim PDA parent, AuDHD writer, and Artistic
              Director.
            </p>
            {/* M22 — single low-friction line pointing to the
                "Before it had a name" track record on Spiritual
                Underground, per homepage-and-about-micro-edits.md.
                The reference doc gives the absolute production URL
                (https://www.sufipunk.co.uk/underground); rendered here
                as an internal next/link to /underground — same
                destination, but proper same-site client navigation
                consistent with the rest of the site. */}
            <p>
              The fuller story behind that title — what it looked like
              before it had this name — lives in{" "}
              <Link
                href="/underground"
                className="text-green underline decoration-amber/60 underline-offset-4 hover:text-amber"
              >
                Spiritual Underground →
              </Link>
              .
            </p>
            <p>
              I live at the intersection of low-demand parenting,
              neurodivergence, faith, and art.
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
              I built this zawiya so safety could come first. This is
              not about forcing mosques or institutions to accommodate
              us. It is about accepting — gently — that some spaces were
              never built with us in mind.
            </p>
            <p>
              This is sanctuary for those who were never meant to comply.
            </p>
            {/* M15 — added immediately after the "never meant to
                comply" line, per author brief. No surrounding edits. */}
            <p>
              This is what makes this zawiya different from any other:
              it accepts anyone who wants to remember God, including
              those who could not find belonging in their own religion.
              You can find validation here — and you can return to your
              faith with clarity, where ritual no longer defines your
              relationship with God.
            </p>
          </div>

          {/* Pull-quote — the active record of devotion */}
          <figure className="prose-zawiya mx-auto mt-12 max-w-2xl text-center">
            <blockquote className="font-display text-[1.25rem] italic leading-snug text-green sm:text-[1.4rem]">
              “Writing here is simply the active record of my devotion.”
            </blockquote>
          </figure>
        </div>

        {/* Four-item strip — M15 replacement.
            The previous four-item strip ("Low-demand parenting /
            Neurodivergence and refusal / Faith without coercion /
            Culture, art, and sovereignty") was a verbatim lift from
            the print booklet's "About Me" card.
            The author has now replaced the strip entirely with four
            bare words and explicitly instructed: no explanation
            added anywhere on the site. They are meant to stand
            undefined, in the same way the closing line below
            ("Devotion. Refusal. Sanctuary. Return.") already does.
            The M13 paragraph that previously explained the fourth
            current is removed for the same reason. */}
        <div className="mt-16">
          <ul
            className="grid gap-px bg-hairline/60 sm:grid-cols-4"
            aria-label="Four words held alongside this work, undefined."
          >
            {[
              "Epistemic injustice",
              "Monotropic attention",
              "Bridge",
              "Translation",
            ].map((label) => (
              <li
                key={label}
                className="bg-parchment px-5 py-6 text-center font-display text-[0.95rem] italic leading-snug text-green sm:px-4 sm:py-8 sm:text-[1rem]"
              >
                {label}
              </li>
            ))}
          </ul>
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
            <span aria-hidden className="mr-1 text-amber-text">★</span>
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