import Image from "next/image";

/**
 * Quiet ornamental flourishes traced from the brief's vocabulary —
 * the ❁ flower motif and the pointed-arch silhouette taken from
 * the real handmade door.
 */

/**
 * The bold "stamp" badge that opens each strand intro page (M16).
 *
 * The badge image already carries the SUFI PUNK / DIGITAL ZAWIYA
 * wordmark inside the artwork, so this component is just a sized,
 * centered, accessibly-labelled wrapper. Used above the "Before you
 * enter" heading on Sanctuary First, Spiritual Underground, and
 * Safe Passage. Same treatment on each, per the M16 brief.
 *
 * Sizing: the brief asked for "roughly 180–220px wide". Settled on
 * 200px, with `priority={false}` since the badge sits below the page
 * title and is not the LCP element.
 */
export function ZawiyaBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <Image
        src="/images/logo/sufipunk_logo_bold_badge_FINAL.png"
        alt="Sufi Punk · Digital Zawiya — a hand-painted mosaic gateway in deep green, gold, red, navy, and teal, with a small wall-fountain spout, set above the wordmark SUFI PUNK · DIGITAL ZAWIYA in a distressed serif."
        width={400}
        height={400}
        sizes="200px"
        className="h-auto w-[200px]"
      />
    </div>
  );
}

export function FlowerDivider({ label }: { label?: string }) {
  return (
    <div className="divider-flower py-6" aria-hidden={!label}>
      <span aria-hidden>❁</span>
      {label ? (
        <span className="font-serif text-xs uppercase tracking-[0.3em] text-ink-soft">
          {label}
        </span>
      ) : null}
      <span aria-hidden>❁</span>
    </div>
  );
}

/**
 * Pointed-arch SVG outline. Drawn as a soft hairline so it reads as
 * an alcove rather than a heavy frame.
 */
export function ArchOutline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 260"
      className={className}
      role="presentation"
      aria-hidden
    >
      <path
        d="M20 256 L20 110 Q20 20 100 20 Q180 20 180 110 L180 256"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M30 256 L30 112 Q30 30 100 30 Q170 30 170 112 L170 256"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeOpacity="0.4"
      />
    </svg>
  );
}

/** A short, decorative diamond row reminiscent of mosaic chips. */
export function MosaicRow({ count = 9 }: { count?: number }) {
  const items = Array.from({ length: count });
  return (
    <div
      className="flex items-center justify-center gap-2 text-amber"
      aria-hidden
    >
      {items.map((_, i) => (
        <span
          key={i}
          className="inline-block h-1.5 w-1.5 rotate-45 bg-current"
          style={{ opacity: i % 2 === 0 ? 1 : 0.55 }}
        />
      ))}
    </div>
  );
}