import { FlowerDivider, ZawiyaBadge } from "@/components/site/Ornaments";

/**
 * Safe Passage intro — the strand whose home on the overview map is
 * The Gathering Place.
 *
 * M22 — Full page copy replaced from
 * safe-passage-FINAL-agent-ready.md (source of truth for the text).
 *
 *  - "Before you enter" is rewritten to the FINAL copy: the "out of
 *    this world / night stars" framing, the "both sides of this door"
 *    paragraph, the three italic questions, and the closing
 *    "honoured first as a human being" line.
 *
 *  - "Welcome Note" is rewritten to the FINAL copy: now addressed to
 *    those who walk alongside someone ("you belong here too"), with
 *    the stewardship / initial-consultation line.
 *
 *  - The contact line uses the FINAL email link, with the subject
 *    "Safe Passage" exactly as the FINAL file encodes it.
 *
 *  - The closing block is the FINAL copy about training other
 *    practitioners. As in earlier milestones, the words "patronage"
 *    and "the book's progress" are linked to the homepage Fountain
 *    (`/#patronage`) and Book (`/#the-book`) sections, since this
 *    page hosts no patronage block of its own. (No exact link target
 *    is specified in the FINAL file; this preserves the existing site
 *    convention.)
 *
 *  - No image changes on this page (none present, none added).
 *
 *  - The closing flower divider names the place this strand lives at
 *    on the overview map: The Gathering Place.
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

        {/* Before you enter — FINAL copy. */}
        <div className="mt-14">
          {/* M16 — bold-badge stamp above the threshold heading. */}
          <ZawiyaBadge className="mb-6" />
          <h2 className="font-display text-2xl italic text-green sm:text-3xl">
            Before you enter
          </h2>
          <div className="prose-zawiya sanctuary-prose mt-6">
            <p>Safe Passage is where this work turns outward.</p>
            <p>
              If you have found your way here, you are someone out of this
              world — above ego, above worldly status. You are here because you
              can see how much work there still is to do: stewardship of the
              earth, stewardship of the people living on it.
            </p>
            <p>
              You are the night stars — the ones who shine brightest exactly
              when the systems you belong to stop working, or start causing
              harm. You see it. You feel it. And you want to know what you can
              do.
            </p>
            <p className="font-display italic text-green-soft">
              You can help create safe passage.
            </p>
            <p>
              It grows from a decade of designing accessible, belonging-centred
              spaces in community arts, now turned toward a harder kind of
              room: the schools, services, and faith communities that families
              have to pass through, often without being met with safety or
              understanding.
            </p>
            <p>
              The people who arrive in these rooms are human beings trying to
              find safe passage through systems that often ask them to wait for
              judgement before they are recognised, understood, or supported.
            </p>
            <p>
              I have stood on both sides of this door — creating spaces where
              overlooked people could finally participate, and now navigating
              these same systems as a neurodivergent person and parent,
              learning where they hold, and where they harm.
            </p>
            <p className="font-display italic text-green-soft">
              Where does autonomy quietly disappear?
            </p>
            <p className="font-display italic text-green-soft">
              Where does a whole human life become reduced to a form, a
              diagnosis, a score, or a box to fit?
            </p>
            <p className="font-display italic text-green-soft">
              What changes when we honour the human being before the system’s
              judgement?
            </p>
            <p>
              These questions live in real rooms: classrooms, waiting rooms,
              mosques, churches, community centres, assessments, meetings — the
              everyday places where someone’s sense of belonging can quietly
              change.
            </p>
            <p>
              Safe Passage is what becomes possible when someone is honoured
              first as a human being while moving through the systems meant to
              support them.
            </p>
          </div>
        </div>

        {/* Welcome Note — FINAL copy. */}
        <div className="mt-16">
          <h2 className="font-display text-2xl italic text-green sm:text-3xl">
            Welcome Note
          </h2>
          <div className="prose-zawiya sanctuary-prose mt-6">
            <p className="font-display italic text-green-soft">
              We are in the world, but not of it.
            </p>
            <p>
              If you have walked alongside someone through any of these rooms,
              you already know what it costs. You belong here too.
            </p>
            <p>
              We move with presence. We engage while staying seated in
              ourselves.
            </p>
            <p>
              Supporting someone well is its own kind of stewardship. Time
              given here carries the same weight as everywhere else in this
              work — an initial consultation begins the crossing, booked
              directly.
            </p>
          </div>
        </div>

        {/* Contact link — FINAL copy, subject "Safe Passage". */}
        <div className="mt-14">
          <div className="prose-zawiya sanctuary-prose">
            <p>
              <strong className="font-serif font-semibold not-italic">
                To get in touch:{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                    "Safe Passage",
                  )}`}
                  className="font-normal text-green underline decoration-amber/60 underline-offset-4 hover:text-amber"
                >
                  {CONTACT_EMAIL}
                </a>
              </strong>
            </p>
          </div>
        </div>

        {/* Closing block — FINAL copy about training other practitioners.
            "patronage" and "the book's progress" linked to the homepage
            Fountain and Book sections (existing site convention). */}
        <div className="mt-12 border-t border-hairline/60 pt-8">
          <p className="font-serif text-[1rem] leading-relaxed text-ink-soft">
            This strand is growing toward something beyond one consultancy at a
            time: training other practitioners to carry this approach into more
            rooms than I could ever reach alone. You can help shape where it
            goes — through{" "}
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