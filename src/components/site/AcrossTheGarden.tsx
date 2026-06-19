import Link from "next/link";
import { strands, type Strand } from "@/content/site/zawiya";

/**
 * Across the Garden.
 *
 * The strands as the activities that happen at the named places
 * shown in the map above. Places and strands stay in sync via the
 * shared data module at `src/content/site/zawiya.ts`. Nothing here
 * is hard-coded around a count; the section will quietly grow if a
 * new strand is added.
 *
 * Kicker: "WHAT HAPPENS HERE" — the section names the activities
 * (the strands) that take place at the named places shown on the
 * map above, so the kicker frames the section as activity rather
 * than count.
 */
export function AcrossTheGarden() {
  return (
    <section
      id="across-the-garden"
      className="border-t border-b border-hairline/60 bg-parchment-deep/40 py-20 sm:py-28"
    >
      <div className="container">
        <header className="text-center">
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-amber">
            What Happens Here
          </p>
          <h2 className="mt-3 font-display text-3xl text-green sm:text-5xl">
            Across the Garden
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-serif text-[1.02rem] text-ink-soft">
            Different voices along the path. Each strand has its own
            place in the map above; move between them as your capacity
            allows. None is more important than the others.
          </p>
        </header>

        <div className="mt-14 divide-y divide-hairline/60 border-y border-hairline/60">
          {strands.map((strand) => (
            <StrandRow key={strand.slug} strand={strand} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * One strand row.
 * Brief: equal sections — not cards, not a grid.
 */
function StrandRow({ strand }: { strand: Strand }) {
  return (
    <Link
      href={strand.href}
      className="group block py-10 transition-colors hover:bg-parchment/60"
    >
      <div className="grid items-baseline gap-4 sm:grid-cols-12 sm:gap-8">
        <div className="sm:col-span-4">
          <p className="font-serif text-xs uppercase tracking-[0.35em] text-amber">
            {strand.kicker}
          </p>
          <h3 className="mt-2 font-display text-2xl text-green sm:text-4xl">
            {strand.name}
          </h3>
          <p className="mt-2 font-serif text-xs italic text-ink-soft">
            Found at {strand.placeName}
          </p>
        </div>
        <div className="sm:col-span-7">
          <p className="font-serif text-[1.02rem] leading-relaxed text-ink">
            {strand.description}
          </p>
        </div>
        <div className="sm:col-span-1 sm:text-right">
          <span
            aria-hidden
            className="font-display text-2xl text-amber transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}