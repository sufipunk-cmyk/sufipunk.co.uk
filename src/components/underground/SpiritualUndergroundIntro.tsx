import { FlowerDivider } from "@/components/site/Ornaments";

/**
 * Spiritual Underground intro — the strand whose home on the
 * overview map is The Devotional Corner.
 *
 * Voice / sourcing notes
 *
 *  - The two confirmed concepts are reproduced from the master brief
 *    (SufiPunk_Master_Brief.md, "SPIRITUAL UNDERGROUND" section).
 *
 *  - The Low-Demand Faith definition is given in Naz's own voice in
 *    the master brief, in quotation marks. It is reproduced here
 *    verbatim and presented as a quotation, attributed to her.
 *
 *  - The Spiritual Parallel Play definition is given in the master
 *    brief as a third-person summary, not in quotation marks. It is
 *    reproduced here verbatim per the brief's instruction "Use them
 *    exactly as given," but rendered as plain page copy rather than
 *    a quotation, because the wording is the brief's summary rather
 *    than Naz's first-person words. (The Inspiring the Sufi brief
 *    carries a longer first-person version of this same definition
 *    if a switch is preferred later.)
 *
 *  - "Inspiring the Sufi" is named as the demonstrated example, with
 *    the exact link text the brief specifies: "This is where it
 *    started. Come and see."
 *
 *  - The expressions-of-interest invitation is described in the
 *    brief but no exact wording is given. The wording used here is
 *    the spec's authorised bridging copy ("exact wording for
 *    expressions-of-interest block can be composed around the
 *    confirmed definitions during implementation"), kept short and
 *    in the same voice as the rest of the site.
 *
 *  - The closing flower divider names the place this strand lives
 *    at on the overview map: The Devotional Corner.
 */

const SUBSTACK = "https://sufipunksanctuaryfirst.substack.com/subscribe";
const ITS_URL = "https://inspiringthesufi.com";
const CONTACT_EMAIL = "sufipunkmusic@gmail.com";

export function SpiritualUndergroundIntro() {
  return (
    <section
      className="relative bg-parchment py-16 sm:py-20"
      aria-labelledby="underground-intro"
    >
      <div className="container max-w-3xl">
        <div className="text-center">
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-amber">
            Parallel Play
          </p>
          <h1
            id="underground-intro"
            className="mt-3 font-display text-4xl text-green sm:text-6xl"
          >
            Spiritual Underground
          </h1>
        </div>

        {/* Before you enter — threshold framing in the site's voice. */}
        <div className="mt-14">
          <h2 className="font-display text-2xl italic text-green sm:text-3xl">
            Before you enter
          </h2>
          <div className="prose-zawiya sanctuary-prose mt-6">
            <p>
              The Spiritual Underground is the cultural and creative strand
              of this work — the place for people whose faith, attention,
              and practice live a little outside the standard rooms.
            </p>
            <p>
              It is built around two ideas that arrived slowly and
              deliberately, in conversation, over years of trying to find
              language for a way of being with God that didn’t require
              performance, certainty, or fluency in inherited forms.
            </p>
            <p className="font-display italic text-green-soft">
              You do not join this. You recognise yourself in it.
            </p>
          </div>
        </div>

        {/* Low-demand faith — quoted, Naz's exact words. */}
        <div className="mt-16">
          <h2 className="font-display text-2xl italic text-green sm:text-3xl">
            Low-demand faith
          </h2>
          <figure className="prose-zawiya sanctuary-prose mt-6">
            <blockquote className="border-l-2 border-amber/60 pl-5 font-display text-[1.15rem] italic leading-snug text-green sm:text-[1.25rem]">
              “Low-demand faith is the recognition that faith can be
              practised outside ritual, standardised religious practices,
              and cultural norms. It is the understanding that our
              relationship with the Divine is often alive in the ordinary
              moments of our lives, not only within formal acts of
              worship.”
            </blockquote>
            <figcaption className="mt-3 font-serif text-sm not-italic text-ink-soft">
              — Sufi Punk
            </figcaption>
          </figure>
        </div>

        {/* Spiritual Parallel Play — definition as given in the master brief. */}
        <div className="mt-14">
          <h2 className="font-display text-2xl italic text-green sm:text-3xl">
            Spiritual Parallel Play
          </h2>
          <div className="prose-zawiya sanctuary-prose mt-6">
            <p>
              Spiritual Parallel Play is a practice that grew out of a
              decade of community arts work, applied to the practitioner’s
              own relationship with God — contemplation of the Divine
              outside ritual and ceremony, following intuition, longing,
              and direct guidance rather than inherited forms alone.
            </p>
          </div>
        </div>

        {/* Inspiring the Sufi — the demonstrated example. */}
        <div className="mt-16">
          <h2 className="font-display text-2xl italic text-green sm:text-3xl">
            The demonstrated example
          </h2>
          <div className="prose-zawiya sanctuary-prose mt-6">
            <p>
              <em>Inspiring the Sufi: A Neurodivergent Practice in
              Parallel Play</em> is the named, public example of this work
              — fifty Names of Allah, each paired with a song from
              somewhere in the world, each held alongside a written
              reflection. One practice, fully documented, freely available
              to wander.
            </p>
            <p>
              <a
                href={ITS_URL}
                target="_blank"
                rel="noreferrer"
                className="font-display text-[1.05rem] italic text-green underline decoration-amber/60 underline-offset-4 hover:text-amber"
              >
                This is where it started. Come and see.
              </a>
            </p>
          </div>
        </div>

        {/* Invitation — expressions of interest, kept restrained. */}
        <div className="mt-16">
          <h2 className="font-display text-2xl italic text-green sm:text-3xl">
            An invitation
          </h2>
          <div className="prose-zawiya sanctuary-prose mt-6">
            <p>
              If you work in faith, the arts, or culture — and any of this
              meets something you are already trying to make room for — I
              am open to expressions of interest. Programming, residencies,
              collaborations, conversation. No pitch deck, no form. A
              short, plain note is enough.
            </p>
            <p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                  "Spiritual Underground — expression of interest",
                )}`}
                className="text-green underline decoration-amber/60 underline-offset-4 hover:text-amber"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p>
              For quieter contact — reflections, occasional letters, news
              about the book —{" "}
              <a
                href={SUBSTACK}
                target="_blank"
                rel="noreferrer"
                className="text-green underline decoration-amber/60 underline-offset-4 hover:text-amber"
              >
                join the list on Substack
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <FlowerDivider label="From the Devotional Corner" />
    </section>
  );
}