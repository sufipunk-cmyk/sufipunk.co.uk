/**
 * Quiet ornamental flourishes traced from the brief's vocabulary —
 * the ❁ flower motif and the pointed-arch silhouette taken from
 * the real handmade door.
 */

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