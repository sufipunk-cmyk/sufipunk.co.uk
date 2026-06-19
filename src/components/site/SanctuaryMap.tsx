import Image from "next/image";
import Link from "next/link";
import { ArchOutline } from "./Ornaments";
import {
  mapImage,
  mapImageAlt,
  places,
  strands,
  type Place,
} from "@/content/site/zawiya";

/**
 * The Sanctuary Map.
 *
 * Per the Sanctuary First print booklet, the zawiya is a mountain
 * garden — not a building. The map carries the historical grounding
 * for the word "zawiya", then names the places along the path.
 *
 * Each place that has a resident strand links to that strand. The
 * threshold place (the gate) belongs to anyone who arrives, and is
 * given a wider hero treatment because everyone passes through it.
 *
 * Layout is data-driven: the threshold place (resident === null) is
 * promoted to the hero; the remaining places fill a uniform row
 * underneath. Adding a future place keeps working without changes.
 */
export function SanctuaryMap() {
  const heroPlace = places.find((p) => p.resident === null) ?? places[0];
  const otherPlaces = places.filter((p) => p !== heroPlace);

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
              Lanterns lit at the gate. Named places along the path:
              the Golden Door, the Lantern Library, the Devotional
              Corner, the Gathering Place. Some places are home to a
              strand of the work. The gate belongs to anyone who arrives.
            </p>
            <p className="text-center font-display italic text-green">
              Not a linear path. A living field.
            </p>
          </div>
        </header>

        {/* The illustrated overview map. */}
        <figure className="mx-auto mt-14 max-w-4xl">
          <div className="relative w-full overflow-hidden border border-hairline bg-parchment shadow-[0_2px_30px_-20px_rgba(0,0,0,0.35)]">
            <Image
              src={mapImage}
              alt={mapImageAlt}
              width={2200}
              height={1467}
              priority
              sizes="(min-width: 1024px) 56rem, 100vw"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mx-auto mt-4 max-w-xl text-center font-serif text-xs italic text-ink-soft">
            The overview map of the zawiya — the named places along the path.
          </figcaption>
        </figure>

        {/* Named places — data-driven, no hard-coded count. */}
        <div className="mx-auto mt-16 max-w-5xl">
          <p className="text-center font-serif text-xs uppercase tracking-[0.35em] text-amber">
            Places along the path
          </p>

          {/* Hero place: the threshold. Wide landscape, full-width. */}
          {heroPlace ? (
            <div className="mt-8">
              <PlaceCard place={heroPlace} variant="hero" />
            </div>
          ) : null}

          {/* Remaining places: uniform 3:4 portrait row. */}
          {otherPlaces.length > 0 ? (
            <ul
              className="mt-10 grid gap-px bg-hairline/60 sm:grid-cols-3"
              aria-label="Resident places in the zawiya"
            >
              {otherPlaces.map((place) => (
                <li key={place.slug} className="bg-parchment">
                  <PlaceCard place={place} variant="card" />
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function PlaceCard({
  place,
  variant,
}: {
  place: Place;
  variant: "hero" | "card";
}) {
  const strand = place.resident
    ? strands.find((s) => s.slug === place.resident)
    : null;

  // The hero (the threshold) renders as a wide landscape banner with
  // copy beneath it. Other places render as a uniform 3:4 portrait
  // tile with copy beneath, sized to sit shoulder-to-shoulder.
  if (variant === "hero") {
    return (
      <article className="relative overflow-hidden border border-hairline bg-parchment">
        <div
          className="relative w-full overflow-hidden bg-green/5"
          style={{ aspectRatio: "2.6 / 1" }}
        >
          <Image
            src={place.image}
            alt={place.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 64rem, 100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="relative px-6 py-8 sm:px-10 sm:py-10">
          <ArchOutline className="pointer-events-none absolute -right-10 -top-6 h-44 w-32 text-green/[0.07]" />
          <p className="font-serif text-[0.7rem] uppercase tracking-[0.35em] text-amber">
            {place.terrain}
          </p>
          <h3 className="mt-2 font-display text-3xl text-green sm:text-[2.25rem]">
            {place.name}
          </h3>
          <p className="mt-4 font-display italic text-[1.05rem] leading-snug text-green-soft">
            {place.echo}
          </p>
          <p className="mt-4 max-w-3xl font-serif text-[1rem] leading-relaxed text-ink">
            {place.description}
          </p>
          <p className="mt-5 font-serif text-sm italic text-ink-soft">
            Open to anyone who arrives.
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="relative flex h-full flex-col overflow-hidden">
      <div
        className="relative w-full overflow-hidden bg-green/5"
        style={{ aspectRatio: "3 / 4" }}
      >
        <Image
          src={place.image}
          alt={place.imageAlt}
          fill
          sizes="(min-width: 640px) 22rem, 100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="relative flex-1 p-7 sm:p-8">
        <ArchOutline className="pointer-events-none absolute -right-10 -top-6 h-44 w-32 text-green/[0.07]" />

        <p className="font-serif text-[0.7rem] uppercase tracking-[0.35em] text-amber">
          {place.terrain}
        </p>
        <h3 className="mt-2 font-display text-2xl text-green sm:text-[1.6rem]">
          {place.name}
        </h3>

        <p className="mt-4 font-display italic text-[0.98rem] leading-snug text-green-soft">
          {place.echo}
        </p>

        <p className="mt-4 font-serif text-[0.95rem] leading-relaxed text-ink">
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
      </div>
    </article>
  );
}