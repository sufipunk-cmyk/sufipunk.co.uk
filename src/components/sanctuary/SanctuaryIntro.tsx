import { FlowerDivider } from "@/components/site/Ornaments";

/**
 * Sanctuary First intro — hardcoded at the top of the page per brief.
 * Two short paragraphs in Naz's voice, then a quiet divider before the
 * post index begins.
 *
 * Brief copy markers (kept as written in the master brief):
 *   - "Before you enter: My name — Sufi Punk — is not a brand. It is a
 *     lineage statement..."
 *   - "Welcome. This is a zawiya. A place a soul built to escape the
 *     world and make sense of it..."
 */
export function SanctuaryIntro() {
  return (
    <section className="relative bg-parchment py-16 sm:py-20" aria-labelledby="sanctuary-intro">
      <div className="container max-w-3xl text-center">
        <p className="font-serif text-xs uppercase tracking-[0.4em] text-amber">
          Witness Writing
        </p>
        <h1
          id="sanctuary-intro"
          className="mt-3 font-display text-4xl text-green sm:text-6xl"
        >
          Sanctuary First
        </h1>

        <div className="prose-zawiya mt-10 space-y-6 text-left">
          <p>
            <em>Before you enter:</em> My name — <em>Sufi Punk</em> — is not
            a brand. It is a lineage statement. It carries the line of
            seekers who could not stay inside performance, and the line of
            tenderness that kept calling them back. The name is older than
            the website. The website is younger than the practice.
          </p>
          <p>
            Welcome. This is a zawiya. A place a soul built to escape the
            world and make sense of it — quietly, without certainty, without
            performance. The writing here is witness. None of it is meant
            to teach. All of it is meant to be read at your own pace, in
            your own state, with your own body intact.
          </p>
          <p className="text-ink-soft">
            The collection is open and ongoing. There is no number to it.
            Move through it by the experience that meets you, the theme
            that calls you, the tradition you carry, or the arc you are in.
          </p>
        </div>
      </div>

      <FlowerDivider label="The library" />
    </section>
  );
}