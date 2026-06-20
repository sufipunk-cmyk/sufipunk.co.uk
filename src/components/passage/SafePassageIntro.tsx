import { FlowerDivider } from "@/components/site/Ornaments";

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
 *    sufipunkmusic@gmail.com, which is included below as a single
 *    quiet line.
 *
 *  - The closing flower divider names the place this strand lives
 *    at on the overview map: The Gathering Place.
 */

const CONTACT_EMAIL = "sufipunkmusic@gmail.com";

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
            <p>
              This strand is younger than the others. What’s offered here
              is still forming. But the lived experience underneath it —
              parenting through SEND (Special Educational Needs and
              Disabilities) tribunals, navigating statutory systems,
              holding a child through institutions not built for him — is
              not theoretical, and it is not waiting to be finished
              before it’s real.
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
      </div>

      <FlowerDivider label="From the Gathering Place" />
    </section>
  );
}