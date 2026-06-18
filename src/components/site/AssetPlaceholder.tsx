import { type CSSProperties } from "react";

/**
 * Typographic placeholder for a brief-named image that isn't in the
 * sandbox yet. Per brief: "If an image is missing: use a typographic
 * placeholder and flag it — do not source a replacement."
 *
 * Once the real file appears in /public/images/<filename>, replace
 * this component with a <Image src="/images/<filename>" /> at the
 * call site.
 */
export function AssetPlaceholder({
  filename,
  label,
  aspect = "16 / 10",
  className = "",
  ornament,
}: {
  filename: string;
  label: string;
  aspect?: string;
  className?: string;
  ornament?: React.ReactNode;
}) {
  const style: CSSProperties = { aspectRatio: aspect };
  return (
    <figure
      className={`asset-placeholder w-full ${className}`}
      style={style}
      aria-label={`${label} (placeholder for ${filename})`}
    >
      <div className="relative z-10 flex flex-col items-center gap-3">
        {ornament ? <div className="text-amber">{ornament}</div> : null}
        <div className="asset-name font-display">{label}</div>
        <div className="asset-tag">[ asset · {filename} ]</div>
      </div>
    </figure>
  );
}