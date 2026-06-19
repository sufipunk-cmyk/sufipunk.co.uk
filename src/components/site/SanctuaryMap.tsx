import Link from "next/link";
import { AssetPlaceholder } from "./AssetPlaceholder";
import { ArchOutline, MosaicRow } from "./Ornaments";
import { rooms, type Room } from "@/content/site/zawiya";

/**
 * The Sanctuary Map.
 *
 * Per the brief and a recent author note: the map is the conceptual
 * key to the whole site, and it has to come *before* "Inside the
 * Zawiya" — readers need the historical grounding for the word
 * before they meet it as a structural concept.
 *
 * The map intro carries that grounding (a zawiya is, historically, a
 * place where Allah was remembered). It then names the rooms — the
 * micro-sanctuaries — and points to which strand lives in each.
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
              A <em>zawiya</em>, historically, is a place where Allah was
              remembered. A small room kept apart from the noise of the
              world, where seekers sat, prayed, learned, and rested. This
              site is one of those rooms made digital — a corner of the
              internet kept for the same purpose.
            </p>
            <p>
              Inside, the zawiya holds named micro-sanctuaries. Each is a
              room of its own: a doorway, a library, a corner, a place to
              gather. Some rooms are home to a strand of the work. One —
              the door — belongs to everyone who arrives.
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

        {/* The named rooms — data-driven, no hard-coded count. */}
        <div className="mx-auto mt-16 max-w-4xl">
          <ul
            className="grid gap-px bg-hairline/60 sm:grid-cols-2"
            aria-label="Rooms of the zawiya"
          >
            {rooms.map((room) => (
              <li key={room.slug} className="bg-parchment">
                <RoomCard room={room} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function RoomCard({ room }: { room: Room }) {
  const strandHref =
    room.resident === "sanctuary"
      ? "/sanctuary"
      : room.resident === "underground"
        ? "/underground"
        : room.resident === "passage"
          ? "/passage"
          : null;

  const strandName =
    room.resident === "sanctuary"
      ? "Sanctuary First"
      : room.resident === "underground"
        ? "Spiritual Underground"
        : room.resident === "passage"
          ? "Safe Passage"
          : null;

  return (
    <article className="relative h-full overflow-hidden p-8 sm:p-10">
      <ArchOutline className="pointer-events-none absolute -right-10 -top-6 h-44 w-32 text-green/[0.07]" />

      <p className="font-serif text-[0.7rem] uppercase tracking-[0.35em] text-amber">
        {room.role}
      </p>
      <h3 className="mt-2 font-display text-2xl text-green sm:text-[1.75rem]">
        {room.name}
      </h3>

      <p className="mt-4 font-serif text-[0.98rem] leading-relaxed text-ink">
        {room.description}
      </p>

      {strandHref && strandName ? (
        <p className="mt-5 font-serif text-sm">
          <span className="text-ink-soft">Home of </span>
          <Link
            href={strandHref}
            className="text-green underline decoration-amber/60 underline-offset-4 hover:text-amber"
          >
            {strandName}
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