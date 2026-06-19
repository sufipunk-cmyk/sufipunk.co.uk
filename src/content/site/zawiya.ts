/**
 * The conceptual map of the zawiya.
 *
 * Two related collections live here:
 *
 *   - `rooms` — the named micro-sanctuaries. These are the *places*
 *     inside the digital zawiya. Rooms can have a resident strand or
 *     stand on their own (the threshold belongs to no single strand).
 *
 *   - `strands` — the *activities* that happen inside those rooms.
 *     Each strand declares which room it lives in via `roomSlug`,
 *     which keeps the map and the strands index in sync.
 *
 * Both are kept open-ended on purpose. The site is built around the
 * idea that the zawiya is alive — additional rooms or strands may
 * appear later. Nothing in the UI hard-codes a count; everything is
 * derived from these arrays.
 */

export type RoomSlug =
  | "golden-door"
  | "lantern-library"
  | "devotional-corner"
  | "gathering-place";

export type StrandSlug = "sanctuary" | "underground" | "passage";

export type Room = {
  slug: RoomSlug;
  name: string;
  /** A short label describing the room's role inside the map. */
  role: string;
  /**
   * Slug of the strand that lives in this room, if any. Threshold
   * rooms (such as the Golden Door) are not tied to one strand.
   */
  resident: StrandSlug | null;
  /**
   * One quiet paragraph describing what this room is for.
   */
  description: string;
};

export type Strand = {
  slug: StrandSlug;
  name: string;
  href: string;
  /** Shown above the strand name as a small uppercase kicker. */
  kicker: string;
  /** Slug of the room this strand lives in. */
  roomSlug: RoomSlug;
  /** Display name of the room — duplicated here for convenience. */
  roomName: string;
  /** The body paragraph used in the Inside the Zawiya section. */
  description: string;
};

export const rooms: Room[] = [
  {
    slug: "golden-door",
    name: "The Golden Door",
    role: "The threshold",
    resident: null,
    description:
      "The entrance. Where you arrive before you decide which room is yours today. The door belongs to no single strand — it belongs to anyone who crosses it. Take a breath here. Set down what the world made you carry on the way in.",
  },
  {
    slug: "lantern-library",
    name: "The Lantern Library",
    role: "Reading & witness",
    resident: "sanctuary",
    description:
      "A quiet, lamp-lit room of writing — the home of Sanctuary First. Letters of arrival, threshold, and practice held as an open, ongoing collection. Move through it as your capacity allows; nothing has to be read in order.",
  },
  {
    slug: "devotional-corner",
    name: "The Devotional Corner",
    role: "Practice & parallel play",
    resident: "underground",
    description:
      "The home of Spiritual Underground. A corner kept for low-demand practice and Spiritual Parallel Play — and where Inspiring the Sufi, the demonstrated example, sits. Devotion that does not require performance, certainty, or anyone watching.",
  },
  {
    slug: "gathering-place",
    name: "The Gathering Place",
    role: "Walking alongside",
    resident: "passage",
    description:
      "The home of Safe Passage. A room facing outward — toward professionals, organisations, and faith leaders walking alongside someone navigating systems not built for them. The work that turns from the inward path back into the world.",
  },
];

export const strands: Strand[] = [
  {
    slug: "sanctuary",
    name: "Sanctuary First",
    href: "/sanctuary",
    kicker: "Witness Writing",
    roomSlug: "lantern-library",
    roomName: "The Lantern Library",
    description:
      "The writing. An open, ongoing collection of arrival, threshold, and practice. Move through it quietly — filtered by the experience, theme, tradition, or arc that meets you where you are.",
  },
  {
    slug: "underground",
    name: "Spiritual Underground",
    href: "/underground",
    kicker: "Parallel Play",
    roomSlug: "devotional-corner",
    roomName: "The Devotional Corner",
    description:
      "A cultural and creative strand. The space where low-demand faith and Spiritual Parallel Play meet — and where Inspiring the Sufi, the demonstrated example, is held.",
  },
  {
    slug: "passage",
    name: "Safe Passage",
    href: "/passage",
    kicker: "In the world but not of it",
    roomSlug: "gathering-place",
    roomName: "The Gathering Place",
    description:
      "The work turning outward — toward professionals, organisations, and faith leaders walking alongside someone navigating systems not built for them. Forming, but real.",
  },
];

export function getRoomBySlug(slug: RoomSlug): Room | undefined {
  return rooms.find((r) => r.slug === slug);
}

export function getStrandBySlug(slug: StrandSlug): Strand | undefined {
  return strands.find((s) => s.slug === slug);
}