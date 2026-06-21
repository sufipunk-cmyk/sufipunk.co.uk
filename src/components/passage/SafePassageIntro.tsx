import { FlowerDivider, ZawiyaBadge } from "@/components/site/Ornaments";

/**
 * Safe Passage intro — the strand whose home on the overview map is
 * The Gathering Place.
 *
 * Voice / sourcing notes
 *
 *  - The page text below is the Version A text confirmed in the
 *    master brief on 18 June 2026 (SufiPunk_Master_Brief.md, "SAFE
 *    PASSAGE" section), reproduced verbatim with one author override
 *    documented in specs/safe-passage/document.md:
 *
 *      Override: remove "a family member" from the Welcome Note
 *      welcome list. Reasoning (from the author): Safe Passage is
 *      aimed at professionals and institutions, not families;
 *      including "a family member" disrupts the flow and miscasts
 *      the audience.
 *
 *  - Version B (the more institutional pitch) is held in reserve per
 *    the brief and is not built here.
 *
 *  - The brief specifies a simple contact link to
 *    sufipunk@icloud.com, which is included below as a single
 *    quiet line.
 *
 *  - M16: the third paragraph of "Before you enter" (the older
 *    "this strand is younger than the others" framing, including
 *    the SEND first-use expansion added in M13) was replaced with
 *    a settled three-paragraph offer in the author's voice. The
 *    SEND acronym no longer appears in the body, so the M13 first-
 *    use expansion is no longer needed. A new closing block was
 *    added at the end of the page, before the flower divider,
 *    inviting support through patronage and the book.
 *
 *    Implementation note (M16): the M16 brief instructs that the
 *    closing line sit "after the existing patronage/Ko-fi
 *    material". This page does not currently carry any patronage /
 *    Ko-fi block of its own — the Fountain (Ko-fi) lives on the
 *    homepage. The closing block is therefore placed at the
 *    natural close of the page, with the words "patronage" and
 *    "the book's progress" hyperlinked to the homepage Fountain
 *    and Book sections respectively (`/#patronage`, `/#the-book`).
 *    Flagged in the M16 handoff for the author to correct if a
 *    different shape was intended.
 *
 *  - The closing flower divider names the place this strand lives
 *    at on the overview map: The Gathering Place.
 */

const CONTACT_EMAIL = "sufipunk@icloud.com";
const HOMEPAGE_PATRONAGE = "/#patronage";
const HOMEPAGE_BOOK = "/#the-book";

export function SafePassageIntro() {
  return (
    <section
      className="relative bg-parchment py-16 sm:py-20"
      aria-labelledby="passage-intro"
    >
      <div className="container max-w-3xl">
        <div className="text-center">
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-amber">
            In the world but not of it
          </p>
          <h1
            id="passage-intro"
            className="mt-3 font-display text-4xl text-green sm:text-6xl"
          >
            Safe Passage
          </h1>
        </div>

        {/* Before you enter — verbatim from the master brief, Version A. */}
        <div className="mt-14">
          {/* M16 — bold-badge stamp above the threshold heading. */}
          <ZawiyaBadge className="mb-6" />
          <h2 className="font-display text-2xl italic text-green sm:text-3xl">
            Before you enter
          </h2>
          <div className="prose-zawiya sanctuary-prose mt-6">
            <p>
              Safe Passage is where this work turns outward — toward the
              people supporting a neurodivergent person, not just the
              person themselves.
            </p>
            <p>
              It comes from a decade of designing accessible,
              belonging-centred spaces in community arts, now applied to
              a different kind of system: the schools, services, and
              faith communities that families have to pass through, often
              without being met with safety or understanding.
            </p>
            {/* M16 — replaces the older "this strand is younger" para. */}
            <p>
              There’s something in here for you too. You’re trying to
              find something — to name something that’s been hard to
              name. That’s what I can hold space for.
            </p>
            <p>
              The same monotropic depth that lets me find God inside a
              single curious thread is the depth I bring to a problem
              you haven’t solved yet. I think strategically. I think
              outside the box. I plan ahead — plus a decade of creative
              practice, finding ways through when the conventional path
              doesn’t work.
            </p>
            <p>
              This is consultancy, training, and strategic support for
              professionals, schools, services, and faith communities
              navigating systems that weren’t built for the people
              inside them.
            </p>
          </div>
        </div>

        {/* Welcome Note — verbatim from the brief, with the author override
            applied: "a family member" removed from the welcome list. */}
        <div className="mt-16">
          <h2 className="font-display text-2xl italic text-green sm:text-3xl">
            Welcome Note
          </h2>
          <div className="prose-zawiya sanctuary-prose mt-6">
            <p className="font-display italic text-green-soft">
              We are in the world, but not of it.
            </p>
            <p>
              If you are a professional, a faith leader, or part of a
              wider community trying to walk alongside someone — you are
              welcome here too. This is not only a space for those living
              the experience directly. It is also for the people trying
              to do right by them, inside systems that don’t always make
              that easy.
            </p>
            <p>
              We move with presence, not pressure. We engage, but we do
              not move out of the seat of self.
            </p>
            <p>
              What this becomes — training, consultancy, resources for
              institutions — will grow as the work grows. For now: if you
              are trying to support someone well, you are not alone in
              trying, and there is something here for you already, even
              in this early form.
            </p>
          </div>
        </div>

        {/* Simple contact link, per brief. */}
        <div className="mt-14">
          <div className="prose-zawiya sanctuary-prose">
            <p>
              To get in touch:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                  "Safe Passage",
                )}`}
                className="text-green underline decoration-amber/60 underline-offset-4 hover:text-amber"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>

        {/* M16 — closing line. The brief asked for this to sit
            "after the existing patronage/Ko-fi material"; this page
            does not currently host its own patronage block, so the
            line is placed as the page's natural close, with
            "patronage" and "the book's progress" linked to the
            homepage Fountain and Book sections. Flagged. */}
        <div className="mt-12 border-t border-hairline/60 pt-8">
          <p className="font-serif text-[1rem] leading-relaxed text-ink-soft">
            This part of the work is still developing. If you want to
            help it grow — into training, into resources, into something
            more people can lean on — you can support it now through{" "}
            <a
              href={HOMEPAGE_PATRONAGE}
              className="text-green underline decoration-amber/60 underline-offset-4 hover:text-amber"
            >
              patronage
            </a>
            , or by{" "}
            <a
              href={HOMEPAGE_BOOK}
              className="text-green underline decoration-amber/60 underline-offset-4 hover:text-amber"
            >
              following the book’s progress
            </a>
            .
          </p>
        </div>
      </div>

      <FlowerDivider label="From the Gathering Place" />
    </section>
  );
}