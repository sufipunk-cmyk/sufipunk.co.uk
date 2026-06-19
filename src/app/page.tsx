import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { AssetPlaceholder } from "@/components/site/AssetPlaceholder";
import { SanctuaryMap } from "@/components/site/SanctuaryMap";
import { InsideTheZawiya } from "@/components/site/InsideTheZawiya";
import {
  FlowerDivider,
  ArchOutline,
  MosaicRow,
} from "@/components/site/Ornaments";

const SUBSTACK_SUBSCRIBE =
  "https://sufipunksanctuaryfirst.substack.com/subscribe";
const KOFI = "https://ko-fi.com/sufipunk";

/**
 * Homepage — the digital zawiya itself.
 *
 * Section order, in the voice of the brief:
 *   1. The Welcome — atmospheric, no nav clutter.
 *   2. The Book — Low-Demand Faith, featured prominently.
 *   3. The Map — the conceptual key. Carries the historical
 *      grounding for the word "zawiya" and names the rooms before
 *      "Inside the Zawiya" presents the strands as their residents.
 *   4. Inside the Zawiya — the strands as the activities living
 *      inside the rooms shown in the map.
 *   5. The Patronage Ask — the Fountain.
 *   6. Quiet Letters — the email signup.
 */
export default function HomePage() {
  return (
    <div className="bg-parchment text-ink">
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
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-amber">
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
              Come as you are. Move as you can. Return without apology.
            </p>
            <p className="text-ink-soft">
              The roots are Islamic. The language is human. The door is open.
            </p>
          </div>

          <FlowerDivider />
        </div>
      </section>

      {/* 2. THE BOOK — featured prominently. */}
      <section className="bg-parchment py-20 sm:py-28" id="the-book">
        <div className="container grid gap-12 md:grid-cols-12 md:items-center md:gap-16">
          <div className="md:col-span-5">
            <div className="mx-auto max-w-[320px] md:mx-0">
              <AssetPlaceholder
                filename="low_demand_faith_cover.png"
                label="Low-Demand Faith"
                aspect="2 / 3"
                ornament={<MosaicRow count={7} />}
              />
              <p className="mt-3 text-center font-serif text-xs italic text-ink-soft md:text-left">
                Cover image — placeholder until <code>low_demand_faith_cover.png</code> is added.
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="font-serif text-xs uppercase tracking-[0.35em] text-amber">
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

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={SUBSTACK_SUBSCRIBE}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-green bg-green px-6 py-3 font-serif text-sm uppercase tracking-[0.18em] text-parchment transition hover:bg-green-soft"
              >
                Join the list for updates
                <span aria-hidden>→</span>
              </a>
              <span className="font-serif text-sm text-ink-soft">
                Updates arrive via{" "}
                <a
                  href="https://sufipunksanctuaryfirst.substack.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green underline decoration-amber/60 underline-offset-4 hover:text-amber"
                >
                  Sanctuary First
                </a>{" "}
                on Substack.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE MAP — the conceptual key. Comes before "Inside the Zawiya"
          so the historical grounding for the word lands first. */}
      <SanctuaryMap />

      {/* 4. INSIDE THE ZAWIYA — strands as residents of the rooms above. */}
      <InsideTheZawiya />

      {/* 5. THE PATRONAGE ASK — Supporting Sanctuary, the Fountain. */}
      <section
        id="patronage"
        className="relative overflow-hidden bg-green py-20 text-parchment sm:py-28"
      >
        <ArchOutline className="pointer-events-none absolute -left-24 top-10 h-[420px] w-[260px] text-amber/20" />
        <ArchOutline className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[260px] text-amber/20" />

        <div className="container relative z-10 max-w-3xl text-center">
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-amber-soft">
            The Fountain
          </p>
          <h2 className="mt-3 font-display text-3xl text-parchment sm:text-5xl">
            Supporting Sanctuary
          </h2>

          <p className="mx-auto mt-6 max-w-xl font-display text-2xl italic leading-snug text-amber-soft sm:text-3xl">
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

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={KOFI}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-amber px-7 py-3 font-serif text-sm uppercase tracking-[0.18em] text-green transition hover:bg-amber-soft"
            >
              Become a patron · $10 / month
              <span aria-hidden>→</span>
            </a>
            <a
              href={KOFI}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-amber/70 px-6 py-3 font-serif text-sm uppercase tracking-[0.18em] text-amber-soft transition hover:bg-amber/10"
            >
              Buy Me a Coffee
            </a>
          </div>
        </div>
      </section>

      {/* 6. THE EMAIL SIGNUP — quiet, no pressure. */}
      <section className="bg-parchment py-20 sm:py-28" id="join">
        <div className="container max-w-2xl text-center">
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-amber">
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
            Subscribe via Substack
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