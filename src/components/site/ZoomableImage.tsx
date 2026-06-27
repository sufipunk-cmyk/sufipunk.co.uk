"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Download, X, ZoomIn } from "lucide-react";

/**
 * ZoomableImage — Phase 1, Section D (media zoom & download).
 *
 * A small, dependency-light lightbox used for images that reward a
 * closer look: the homepage overview map and the Spiritual Underground
 * archive scans (programme covers, the RE Today spread, the Sacred
 * Qur'an booklet). Source-resolution was checked before building this —
 * every target image has materially more native pixels than its inline
 * display size, so opening a larger view genuinely improves legibility.
 *
 * Behaviour
 *  - The inline thumbnail is a real <button> that opens an overlay
 *    showing the full-resolution source image.
 *  - The overlay is an accessible modal dialog: role="dialog" +
 *    aria-modal, Escape closes, focus moves into the dialog on open and
 *    is restored to the trigger on close, focus is trapped between the
 *    Download and Close controls, the backdrop click closes, and body
 *    scroll is locked while open.
 *  - Every overlay offers a Download link (a same-origin <a download>),
 *    so the source file can always be saved.
 *
 * Graceful degradation: if client JS never runs, the inline image still
 * renders with its alt text (content is never hidden behind the zoom).
 * For the map, a separate always-visible "Download map" link is rendered
 * by SanctuaryMap itself, so downloading works without JS too.
 */

type ZoomableImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  priority?: boolean;
  /** className applied to the trigger button (carries the frame/border). */
  className?: string;
  /** Optional caption shown beneath the image inside the overlay. */
  caption?: string;
  /** Accessible label for the zoom trigger. */
  zoomLabel?: string;
  /** Suggested download filename; defaults to the source basename. */
  downloadName?: string;
};

export function ZoomableImage({
  src,
  alt,
  width,
  height,
  sizes,
  priority,
  className,
  caption,
  zoomLabel = "View larger image",
  downloadName,
}: ZoomableImageProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const labelId = useId();

  const close = useCallback(() => setOpen(false), []);
  const fileName = downloadName ?? src.split("/").pop() ?? "image";

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const prevBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Move focus into the dialog.
    closeRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key === "Tab") {
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])",
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevBodyOverflow;
      // Restore focus to the trigger (or whatever was focused before).
      (triggerRef.current ?? previouslyFocused)?.focus?.();
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${zoomLabel}: ${alt}`}
        aria-haspopup="dialog"
        className={`group/zoom relative block w-full cursor-zoom-in ${className ?? ""}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className="h-auto w-full"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-green/85 px-2.5 py-1 font-serif text-[0.65rem] uppercase tracking-[0.15em] text-parchment opacity-0 transition-opacity duration-200 group-hover/zoom:opacity-100 group-focus-visible/zoom:opacity-100"
        >
          <ZoomIn className="h-3.5 w-3.5" aria-hidden />
          Zoom
        </span>
      </button>

      {open ? (
        <div
          ref={dialogRef}
          // biome-ignore lint/a11y/useSemanticElements: this is a deliberate custom modal (focus trap + restore, scroll lock, backdrop-click close); a native <dialog> would change the established behaviour.
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelId}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          className="fixed inset-0 z-50 flex flex-col bg-ink/90 backdrop-blur-sm"
        >
          <div className="flex items-center justify-end gap-2 p-4">
            <a
              href={src}
              download={fileName}
              className="inline-flex items-center gap-2 border border-parchment/40 px-4 py-2 font-serif text-xs uppercase tracking-[0.18em] text-parchment transition hover:bg-parchment/10"
            >
              <Download className="h-4 w-4" aria-hidden />
              Download
            </a>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="inline-flex items-center gap-2 border border-parchment/40 px-4 py-2 font-serif text-xs uppercase tracking-[0.18em] text-parchment transition hover:bg-parchment/10"
            >
              <X className="h-4 w-4" aria-hidden />
              Close
            </button>
          </div>

          <div
            className="flex flex-1 items-center justify-center overflow-auto px-4 pb-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) close();
            }}
          >
            {/* Full-resolution source. Plain <img> keeps the overlay simple
                and only loads when the dialog is opened. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="max-h-full max-w-full object-contain shadow-2xl"
            />
          </div>

          <p
            id={labelId}
            className="px-4 pb-5 text-center font-serif text-xs italic text-parchment/80"
          >
            {caption ?? alt}
          </p>
        </div>
      ) : null}
    </>
  );
}