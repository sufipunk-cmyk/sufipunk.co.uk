import { FlowerDivider } from "@/components/site/Ornaments";

/**
 * Sanctuary First intro — the "Before you enter" + "Welcome Note" texts
 * migrated from Sanctuary_Session4_Final.docx. Both pieces sit at the
 * top of the page, before the post index begins.
 *
 * Editorial notes:
 *
 *  - The original Welcome Note references posts by number (Posts 1–7,
 *    Post 8, Posts 9–12). Per the author's standing rule that the
 *    collection should feel open and non-finite, those references
 *    are translated into the arc names already used in the filters:
 *    Arrival → Threshold → Practice.
 *
 *  - The closing line that introduces the index is phrased as a
 *    movement through arcs rather than a count of them, again per
 *    the no-numbering rule.
 *
 *  - The flower divider that closes this intro names the room this
 *    section lives inside on the map: The Lantern Library. This
 *    makes the relationship between the map's named room and the
 *    Sanctuary First post index explicit, rather than letting the
 *    bare label "The library" duplicate the room's name.
 */
export function SanctuaryIntro() {
  return (
    <section
      className="relative bg-parchment py-16 sm:py-20"
      aria-labelledby="sanctuary-intro"
    >
      <div className="container max-w-3xl">
        <div className="text-center">
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-amber">
            Witness Writing
          </p>
          <h1
            id="sanctuary-intro"
            className="mt-3 font-display text-4xl text-green sm:text-6xl"
          >
            Sanctuary First
          </h1>
        </div>

        {/* Before you enter */}
        <div className="mt-14">
          <h2 className="font-display text-2xl italic text-green sm:text-3xl">
            Before you enter
          </h2>
          <div className="prose-zawiya sanctuary-prose mt-6">
            <p>
              My name — <em>Sufi Punk</em> — is not a brand. It is a lineage
              statement.
            </p>
            <p>
              <em>Sufi:</em> for the inward path. <em>Punk:</em> for the
              refusal.
            </p>
            <p>
              Together they locate me in the Malamatiyyah stream — the Sufi
              path of those who chose the inward over the visible, who found
              God in the places religion forgot to look, and who understood
              that the soul’s business with the Divine is no one else’s to
              measure.
            </p>
            <p>
              I use the word Allah. A word so vast it holds everything and
              belongs to no one. If you have arrived here unfamiliar with the
              tradition, that word may carry baggage the world has placed
              upon it. I kindly ask you to set that down. I have made my home
              in this word. You are welcome to make yours.
            </p>
            <p className="text-center text-amber">
              <em>Bismillah ir-rahman ir-rahim.</em>
            </p>
          </div>
        </div>

        {/* Welcome Note */}
        <div className="mt-16">
          <h2 className="font-display text-2xl italic text-green sm:text-3xl">
            Welcome Note
          </h2>
          <div className="prose-zawiya sanctuary-prose mt-6">
            <p>Welcome.</p>
            <p>
              This is a zawiya. A place a soul built to escape the world and
              make sense of it — where the heart can expand and dust off the
              labels, the identities, the boxes the world puts on it.
            </p>
            <p>
              Leave your ego at the door. Whoever you think you are, you are
              not that in here. Not your diagnosis, your credentials, your
              doubts, your armour. Just a soul. That is enough. That is
              everything.
            </p>
            <p>And when you leave — you will choose what to put back on.</p>
            <p>
              This place was built by someone who needed it to exist. Who
              spent years carrying things the world had no language for —
              faith that ran deep but couldn’t always find its door, a
              nervous system that experienced the world differently, a love
              so large it sometimes had nowhere to go. Who went somewhere
              very dark and came back not with answers, but with a different
              orientation. Who built this place so that others might find
              their way to the same quiet.
            </p>
            <p>
              You don’t need the right words, the right beliefs, the right
              way of being in your body or your faith. You only need to be a
              soul that is looking for somewhere to sit.
            </p>
            <p>
              The collection moves through arcs. <em>Arrival</em> will
              bring you here. <em>Threshold</em> is the door you cross. And{" "}
              <em>Practice</em> is the work of coming back — and recognising
              what the world did to the soul.
            </p>
            <p>This place was made for you. It always was.</p>
            <p>
              And whatever wisdom your own lineage carries — bring it with
              you. It belongs here too.
            </p>
          </div>
        </div>
      </div>

      <FlowerDivider label="Inside the Lantern Library" />
    </section>
  );
}