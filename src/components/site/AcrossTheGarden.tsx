import Image from "next/image";
import Link from "next/link";
import { ArchOutline } from "./Ornaments";
import {
  places,
  strands,
  type Place,
  type Strand,
} from "@/content/site/zawiya";

/**
 * Across the Garden (M14 — merged section).
 *
 * Until M14 the homepage carried two adjacent sections that each
 * described the same four places — "Places Along the Path" inside
 * the map, and "Across the Garden" as the strands index. The same
 * phrases appeared twice on the same scroll.
 *
 * They are now a single section. The kicker / heading wording is the
 * draft below and is flagged for the author's review.
 *
 * Visual layout follows the previous "Places Along the Path" grid:
 * the threshold place (The Golden Door) is the wide hero, and the
 * three resident places sit shoulder-to-shoulder underneath it. For
 * each resident place the card now states the strand once — strand
 * name as the prominent header, place as a smaller italic secondary
 * line ("Found at The Lantern Library"), one tightened paragraph
 * combining atmosphere and function, and a single direct link
 * ("Enter Sanctuary First →").
 *
 * The framing line "Different voices along the path…" carries over
 * from the previous Across the Garden section: it is load-bearing for
 * the site's non-hierarchical posture. In M22 its muted closing
 * sentence was replaced by a second, emphasised line ("Three places.
 * One refusal — to perform belonging instead of living it.") to give
 * the section a single moment of conviction.
 *
 * The section is data-driven — adding a new place or strand to
 * `src/content/site/zawiya.ts` flows through here without code
 * changes.
 */
export function AcrossTheGarden() {
  // The data file marks the threshold place with `resident === null`.
  // Promote it to the hero slot; the rest fill the row underneath.
  const heroPlace = places.find((p) => p.resident === null) ?? places[0];
  const otherPlaces = places.filter((p) => p !== heroPlace);

  return (
    <section
      id="across-the-garden"
      className="border-t border-b border-hairline/60 bg-parchment-deep/40 py-20 sm:py-28"
    >
      <div className="container">
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-amber">
            What Happens Here
          </p>
          <h2 className="mt-3 font-display text-3xl text-green sm:text-5xl">
            Across the Garden
          </h2>

          {/* Framing line — load-bearing. Sets the non-hierarchical
              posture of the whole site.

              M22 — the muted closing sentence was replaced with a
              second, stronger line: "Three places. One refusal — to
              perform belonging instead of living it." Per
              homepage-and-about-micro-edits.md, this is the one moment
              of conviction the section was missing. "One refusal"
              surfaces Sanctuary's own definition ("Punk: for the
              refusal") one level up to the homepage, so it is given the
              site's emphasis treatment rather than the muted body
              tone. */}
          <p className="mx-auto mt-5 max-w-xl font-serif text-[1.02rem] text-ink-soft">
            Different voices along the path. Each strand has its own
            place in the map above; move between them as your capacity
            allows.
          </p>
          <p className="mx-auto mt-4 max-w-xl font-display text-[1.15rem] italic leading-snug text-green sm:text-[1.25rem]">
            Three places. One refusal — to perform belonging instead of
            living it.
          </p>
        </header>

        <div className="mx-auto mt-14 max-w-5xl">
          {/* Hero place — the threshold. Wide landscape, full-width.
              Stays as it was: no strand attached, no restructuring. */}
          {heroPlace ? <PlaceHero place={heroPlace} /> : null}

          {/* The three resident place cards in a uniform row. */}
          {otherPlaces.length > 0 ? (
            <ul
              className="mt-10 grid gap-px bg-hairline/60 sm:grid-cols-3"
              aria-label="Resident strands and the places where they live"
            >
              {otherPlaces.map((place) => (
                <li key={place.slug} className="bg-parchment">
                  <ResidentCard place={place} />
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/**
 * The threshold hero — The Golden Door.
 * Untouched from the previous M13 layout: image banner + place name +
 * echo line + place description + "Open to anyone who arrives."
 */
function PlaceHero({ place }: { place: Place }) {
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

/**
 * A resident strand card.
 *
 * Order, per the M14 brief:
 *   1. Photo
 *   2. Strand name — prominent (matches the nav)
 *   3. Place name — smaller italic secondary line, "Found at …"
 *   4. One tightened paragraph (atmosphere + function in one)
 *   5. One link — "Enter <strand name> →"
 *
 * The whole card is wrapped in a Link so the photograph is a real
 * affordance, not just decoration. The visible "Enter …" line gets
 * the underline treatment to make the action explicit.
 */
function ResidentCard({ place }: { place: Place }) {
  const strand = place.resident
    ? strands.find((s) => s.slug === place.resident)
    : undefined;

  // Defensive fallback — if a resident place ever lost its strand
  // pairing in the data file, render a non-link card so the page
  // doesn't crash. Should never happen in practice.
  if (!strand) {
    return <ResidentCardInner place={place} strand={null} />;
  }

  return (
    <Link
      href={strand.href}
      className="group block h-full transition-colors hover:bg-parchment-deep/30"
    >
      <ResidentCardInner place={place} strand={strand} />
    </Link>
  );
}

function ResidentCardInner({
  place,
  strand,
}: {
  place: Place;
  strand: Strand | null;
}) {
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
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>
      <div className="relative flex flex-1 flex-col p-7 sm:p-8">
        <ArchOutline className="pointer-events-none absolute -right-10 -top-6 h-44 w-32 text-green/[0.07]" />

        {/* 2. Strand name — prominent header (matches nav wording). */}
        <h3 className="font-display text-2xl text-green sm:text-[1.7rem]">
          {strand ? strand.name : place.name}
        </h3>

        {/* 3. Place name — smaller italic secondary line. */}
        <p className="mt-1 font-display text-[0.95rem] italic text-green-soft">
          {strand ? `Found at ${place.name}` : place.terrain}
        </p>

        {/* 4. One tightened paragraph: atmosphere + function in one.
              The "Home of X." prefix has been stripped from the
              place description in zawiya.ts so this paragraph reads
              cleanly under the strand-name header. */}
        <p className="mt-5 font-serif text-[0.95rem] leading-relaxed text-ink">
          {place.description}
        </p>

        {/* 5. The single "Enter …" link. */}
        {strand ? (
          <p className="mt-auto pt-6 font-serif text-sm">
            <span className="text-green underline decoration-amber/60 underline-offset-4 group-hover:text-amber">
              Enter {strand.name}
            </span>
            <span
              aria-hidden
              className="ml-2 text-amber transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </p>
        ) : null}
      </div>
    </article>
  );
}