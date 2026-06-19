import Link from "next/link";
import { AssetPlaceholder } from "./AssetPlaceholder";
import { ArchOutline, MosaicRow } from "./Ornaments";
import { places, strands, type Place } from "@/content/site/zawiya";

/**
 * The Sanctuary Map.
 *
 * Per the Sanctuary First print booklet, the zawiya is a mountain
 * garden — not a building. The map carries the historical grounding
 * for the word "zawiya", then names the places along the path.
 *
 * Each place that has a resident strand links to that strand. The
 * gate has no single resident — it belongs to anyone who arrives.
 */
export function SanctuaryMap() {
  return (
    <section className="bg-parchment py-20 sm:py-28" id="the-map">
      <div className="container">
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-amber">
            The Map
          </p>
          <h2 className="mt-3 font-display text-3xl text-green sm:text-5xl">
            A small place, set apart.
          </h2>

          <div className="prose-zawiya mx-auto mt-6 text-[1.02rem] text-ink-soft">
            <p>
              Historically, a <em>zawiya</em> was a humble Sufi lodge — a
              retreat space where travellers could step away from the
              demands of the world, remember God, and catch their breath.
            </p>
            <p>
              This site is one of those lodges made digital. Not a building
              — a garden. A stone path through flowers and mountains.
              Lanterns lit at the gate. Named places along the path: a
              lookout, a wisteria terrace, a stone bridge. Some places are
              home to a strand of the work. The gate belongs to anyone who
              arrives.
            </p>
            <p className="text-center font-display italic text-green">
              Not a linear path. A living field.
            </p>
          </div>
        </header>

        {/* The illustrated map asset itself. */}
        <div className="mt-14">
          <AssetPlaceholder
            filename="sanctuary_map.png"
            label="The Sanctuary Map"
            aspect="4 / 3"
            className="mx-auto max-w-4xl"
            ornament={<MosaicRow />}
          />
          <p className="mx-auto mt-4 max-w-xl text-center font-serif text-xs italic text-ink-soft">
            Placeholder until <code>sanctuary_map.png</code> /{" "}
            <code>Final_map.png</code> is added to{" "}
            <code>public/images/</code>. Per brief, this is the primary
            visual asset for this section.
          </p>
        </div>

        {/* Named places — data-driven, no hard-coded count. */}
        <div className="mx-auto mt-16 max-w-4xl">
          <p className="text-center font-serif text-xs uppercase tracking-[0.35em] text-amber">
            Places along the path
          </p>
          <ul
            className="mt-6 grid gap-px bg-hairline/60 sm:grid-cols-2"
            aria-label="Places in the zawiya"
          >
            {places.map((place) => (
              <li key={place.slug} className="bg-parchment">
                <PlaceCard place={place} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function PlaceCard({ place }: { place: Place }) {
  const strand = place.resident
    ? strands.find((s) => s.slug === place.resident)
    : null;

  return (
    <article className="relative h-full overflow-hidden p-8 sm:p-10">
      <ArchOutline className="pointer-events-none absolute -right-10 -top-6 h-44 w-32 text-green/[0.07]" />

      <p className="font-serif text-[0.7rem] uppercase tracking-[0.35em] text-amber">
        {place.terrain}
      </p>
      <h3 className="mt-2 font-display text-2xl text-green sm:text-[1.75rem]">
        {place.name}
      </h3>

      <p className="mt-4 font-display italic text-[1rem] leading-snug text-green-soft">
        {place.echo}
      </p>

      <p className="mt-4 font-serif text-[0.98rem] leading-relaxed text-ink">
        {place.description}
      </p>

      {strand ? (
        <p className="mt-5 font-serif text-sm">
          <span className="text-ink-soft">Home of </span>
          <Link
            href={strand.href}
            className="text-green underline decoration-amber/60 underline-offset-4 hover:text-amber"
          >
            {strand.name}
          </Link>
        </p>
      ) : (
        <p className="mt-5 font-serif text-sm italic text-ink-soft">
          Open to anyone who arrives.
        </p>
      )}
    </article>
  );
}