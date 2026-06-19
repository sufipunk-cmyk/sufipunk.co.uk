/**
 * The conceptual map of the zawiya.
 *
 * Two related collections live here:
 *
 *   - `places` — the named locations on the overview map. These are
 *     the canonical names that appear on the illustrated map asset
 *     (the "theme park map" view of the whole site). Some places
 *     are home to a strand; others (the door) belong to anyone who
 *     arrives.
 *
 *   - `strands` — the *activities* that happen at those places.
 *     Each strand declares which place it lives at via `placeSlug`,
 *     keeping the map and the strands index in sync.
 *
 * A note on naming layers
 *
 *   The Sanctuary First print booklet describes the same world at
 *   a closer scale — the lookout terrace with a telescope, the
 *   wisteria-draped archways and fountain, the stone bridge with
 *   the wooden signpost. That is a more detailed "walk-into" map
 *   we may build later. The booklet's imagery is welcome to live
 *   inside each place's description as flavour, but the canonical
 *   names below are the overview-map names. The two layers stay
 *   consistent that way: zoomed-out names on the overview, zoomed-in
 *   detail when you arrive.
 *
 * Both arrays are kept open-ended on purpose. The garden is alive;
 * additional places or strands may appear later. Nothing in the UI
 * hard-codes a count.
 */

export type PlaceSlug =
  | "the-golden-door"
  | "the-lantern-library"
  | "the-devotional-corner"
  | "the-gathering-place";

export type StrandSlug = "sanctuary" | "underground" | "passage";

export type Place = {
  slug: PlaceSlug;
  name: string;
  /**
   * A short label naming the kind of place — threshold, reading
   * room, practice corner, gathering point — so the map reads as
   * terrain rather than a list of rooms.
   */
  terrain: string;
  /**
   * Slug of the strand that lives at this place, if any. Threshold
   * places (such as The Golden Door) belong to anyone who arrives.
   */
  resident: StrandSlug | null;
  /**
   * One short italic line carrying the place's own meaning. Used
   * as a quiet pull-quote inside the place card.
   */
  echo: string;
  /**
   * One paragraph describing the place. Booklet imagery — terrace,
   * telescope, fountain, bridge, signpost — lives here as flavour
   * under the canonical overview-map name.
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
    slug: "the-golden-door",
    name: "The Golden Door",
    terrain: "The threshold",
    resident: null,
    echo: "The door remains open.",
    description:
      "Where you arrive. Lanterns lit beside the entrance, a stone path through flowers and mountains waiting on the other side. The door belongs to no single strand — it belongs to anyone who crosses it. You are free to stay, to rest, to return, to begin again.",
  },
  {
    slug: "the-lantern-library",
    name: "The Lantern Library",
    terrain: "Reading & witness",
    resident: "sanctuary",
    echo:
      "A place to pause. A place to see clearly. A place to remember what matters most.",
    description:
      "Home of Sanctuary First. A lamp-lit terrace high enough to hold the whole valley — a hanging chair, an open book, a coffee cup, a telescope angled toward the snow-capped mountains. Witness writing happens here, slowly, where attention is allowed to follow itself instead of productivity.",
  },
  {
    slug: "the-devotional-corner",
    name: "The Devotional Corner",
    terrain: "Practice & parallel play",
    resident: "underground",
    echo: "You do not join this. You recognise yourself in it.",
    description:
      "Home of the Spiritual Underground. Stone archways draped in wisteria, a small fountain audible through them, terrace seating that overlooks the valley. A low-pressure cultural and spiritual field for people practising faith, creativity, and survival outside traditional expectations.",
  },
  {
    slug: "the-gathering-place",
    name: "The Gathering Place",
    terrain: "Walking alongside",
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
    placeSlug: "the-lantern-library",
    placeName: "The Lantern Library",
    description:
      "The writing. An open, ongoing collection of arrival, threshold, and practice — held at the Lantern Library, where attention is allowed to follow itself. Move through it quietly, filtered by the experience, theme, tradition, or arc that meets you where you are.",
  },
  {
    slug: "underground",
    name: "Spiritual Underground",
    href: "/underground",
    kicker: "Spiritual Parallel Play",
    placeSlug: "the-devotional-corner",
    placeName: "The Devotional Corner",
    description:
      "The cultural and creative strand. Connection here is organic, slow, consent-based, non-performative — and Inspiring the Sufi, the demonstrated example, sits in the same field.",
  },
  {
    slug: "passage",
    name: "Safe Passage",
    href: "/passage",
    kicker: "In the world but not of it",
    placeSlug: "the-gathering-place",
    placeName: "The Gathering Place",
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