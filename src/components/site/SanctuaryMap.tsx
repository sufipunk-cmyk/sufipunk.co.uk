import { Download } from "lucide-react";
import { ZoomableImage } from "@/components/site/ZoomableImage";
import { mapImage, mapImageAlt } from "@/content/site/zawiya";

/**
 * The Sanctuary Map.
 *
 * Per the Sanctuary First print booklet, the zawiya is a mountain
 * garden — not a building. The map carries the historical grounding
 * for the word "zawiya", then shows the illustrated overview map
 * itself.
 *
 * M14 — the per-place card grid that previously lived at the bottom
 * of this component has moved into "Across the Garden", so the place
 * descriptions and their resident strands are now stated once in one
 * merged section. This file is left doing only what the user-visible
 * heading says: be the map.
 */
export function SanctuaryMap() {
  return (
    <section className="bg-parchment py-20 sm:py-28" id="the-map">
      <div className="container">
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-amber-text">
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

        {/* The illustrated overview map.
            M20 — `map-hover-zoom` adds a subtle 1.04× scale on
            pointer hover, gated behind `@media (hover: hover)` in
            `globals.css` so touch devices don't get a stuck zoomed
            state. `overflow-hidden` on the wrapper clips the scaled
            image cleanly to its frame.

            Phase 1 (Section D) — the map is now click-to-zoom via the
            ZoomableImage lightbox (the source is 1536×1024, larger than
            its inline display, so a full view helps read the place
            labels). An explicit, always-visible "Download map" link sits
            beneath it — it is a plain same-origin <a download>, so it
            works even if client JS does not. */}
        <figure className="mx-auto mt-14 max-w-4xl">
          <div className="map-hover-zoom relative w-full overflow-hidden border border-hairline bg-parchment shadow-[0_2px_30px_-20px_rgba(0,0,0,0.35)]">
            <ZoomableImage
              src={mapImage}
              alt={mapImageAlt}
              width={2200}
              height={1467}
              priority
              sizes="(min-width: 1024px) 56rem, 100vw"
              zoomLabel="Zoom the overview map"
              downloadName="sufipunk-zawiya-map.jpg"
              caption="The overview map of the zawiya — the named places along the path."
            />
          </div>
          <figcaption className="mx-auto mt-4 max-w-xl text-center font-serif text-xs italic text-ink-soft">
            The overview map of the zawiya — the named places along the path.
          </figcaption>
          <div className="mt-4 text-center">
            <a
              href={mapImage}
              download="sufipunk-zawiya-map.jpg"
              className="inline-flex items-center gap-2 font-serif text-xs uppercase tracking-[0.18em] text-amber-text underline decoration-amber/60 underline-offset-4 transition hover:text-amber"
            >
              <Download className="h-3.5 w-3.5" aria-hidden />
              Download map
            </a>
          </div>
        </figure>
      </div>
    </section>
  );
}