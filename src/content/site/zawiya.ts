/**
 * The conceptual map of the zawiya.
 *
 * Per the Sanctuary First print booklet (the source of truth for
 * this site's spatial language), the zawiya is not a building. It
 * is a mountain garden — a stone path through flowers, lanterns at
 * the gate, named places along the path. *Not a linear path. A
 * living field.*
 *
 * Two related collections live here:
 *
 *   - `places` — the named locations along the path. Some places
 *     are home to a strand; others (the gate) belong to anyone who
 *     arrives.
 *
 *   - `strands` — the *activities* that happen at those places.
 *     Each strand declares which place it lives at via `placeSlug`,
 *     keeping the map and the strands index in sync.
 *
 * Both arrays are kept open-ended on purpose. The site is built
 * around the idea that the garden is alive — additional places or
 * strands may appear later. Nothing in the UI hard-codes a count;
 * everything is derived from these arrays.
 */

export type PlaceSlug =
  | "the-gate"
  | "the-lookout"
  | "the-wisteria-terrace"
  | "the-stone-bridge";

export type StrandSlug = "sanctuary" | "underground" | "passage";

export type Place = {
  slug: PlaceSlug;
  name: string;
  /**
   * A short label naming the kind of ground — gate, terrace,
   * bridge — so the map reads as terrain rather than as rooms.
   */
  terrain: string;
  /**
   * Slug of the strand that lives at this place, if any. Threshold
   * places (such as the gate) belong to anyone who arrives.
   */
  resident: StrandSlug | null;
  /**
   * One short line in the booklet's voice — italic, evocative,
   * carrying the place's own meaning. Used as a quiet pull-quote
   * inside the place card.
   */
  echo: string;
  /**
   * One paragraph describing the place: its terrain, its lanterns,
   * what happens there.
   */
  description: string;
};

export type Strand = {
  slug: StrandSlug;
  name: string;
  href: string;
  /** Shown above the strand name as a small uppercase kicker. */
  kicker: string;
  /** Slug of the place this strand lives at. */
  placeSlug: PlaceSlug;
  /** Display name of the place — duplicated here for convenience. */
  placeName: string;
  /** The body paragraph used in the Across the Garden section. */
  description: string;
};

export const places: Place[] = [
  {
    slug: "the-gate",
    name: "The Gate",
    terrain: "The threshold",
    resident: null,
    echo: "The gate remains open.",
    description:
      "Where you arrive. An iron gate set into stone, lanterns lit beside it, a stone path through flowers and mountains waiting on the other side. The gate belongs to no single strand — it belongs to anyone who crosses it. You are free to stay, to rest, to return, to begin again.",
  },
  {
    slug: "the-lookout",
    name: "The Lookout",
    terrain: "An elevated terrace",
    resident: "sanctuary",
    echo:
      "A place to pause. A place to see clearly. A place to remember what matters most.",
    description:
      "Home of Sanctuary First. A terrace high enough to hold the whole valley — a hanging chair, an open book, a coffee cup, a telescope angled toward the snow-capped mountains. Witness writing happens here, slowly, where attention is allowed to follow itself instead of productivity.",
  },
  {
    slug: "the-wisteria-terrace",
    name: "The Wisteria Terrace",
    terrain: "Stone archways and a fountain",
    resident: "underground",
    echo: "You do not join this. You recognise yourself in it.",
    description:
      "Home of the Spiritual Underground. Stone archways draped in wisteria, a small fountain audible through them, terrace seating that overlooks the valley. A low-pressure cultural and spiritual field for people practising faith, creativity, and survival outside traditional expectations.",
  },
  {
    slug: "the-stone-bridge",
    name: "The Stone Bridge",
    terrain: "A crossing over a stream",
    resident: "passage",
    echo: "We are in the world, but not of it.",
    description:
      "Home of Safe Passage. A stone bridge over a stream, and a wooden signpost along the path naming what must not be lost in the crossing — dignity, autonomy, boundaries, belonging, safety. The strand of movement through systems that were never built with our nervous systems in mind.",
  },
];

export const strands: Strand[] = [
  {
    slug: "sanctuary",
    name: "Sanctuary First",
    href: "/sanctuary",
    kicker: "Witness Writing",
    placeSlug: "the-lookout",
    placeName: "The Lookout",
    description:
      "The writing. An open, ongoing collection of arrival, threshold, and practice — held at the lookout, where attention is allowed to follow itself. Move through it quietly, filtered by the experience, theme, tradition, or arc that meets you where you are.",
  },
  {
    slug: "underground",
    name: "Spiritual Underground",
    href: "/underground",
    kicker: "Spiritual Parallel Play",
    placeSlug: "the-wisteria-terrace",
    placeName: "The Wisteria Terrace",
    description:
      "The cultural and creative strand. Connection here is organic, slow, consent-based, non-performative — and Inspiring the Sufi, the demonstrated example, sits in the same field.",
  },
  {
    slug: "passage",
    name: "Safe Passage",
    href: "/passage",
    kicker: "In the world but not of it",
    placeSlug: "the-stone-bridge",
    placeName: "The Stone Bridge",
    description:
      "The work turning outward — toward professionals, organisations, and faith leaders walking alongside someone navigating systems not built for them. Movement through terrain, with dignity intact.",
  },
];

export function getPlaceBySlug(slug: PlaceSlug): Place | undefined {
  return places.find((p) => p.slug === slug);
}

export function getStrandBySlug(slug: StrandSlug): Strand | undefined {
  return strands.find((s) => s.slug === slug);
}