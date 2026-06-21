import Image from "next/image";
import Link from "next/link";

/**
 * SiteHeader — quiet, no clutter.
 * Brief: "no navigation clutter. Just the words and the world."
 * So the header carries only the wordmark and one small set of
 * inline links to the named strands. No menu icon, no banner.
 *
 * The mosaic-door icon (M17) sits immediately to the left of the
 * "Sufi Punk" wordmark — small and quiet, roughly text-height. The
 * trailing flower glyph (❁) was removed in M19: the mosaic-door icon
 * now carries the decorative-mark role on its own, and having both
 * read as one too many. Flower dividers (`<FlowerDivider />`) on
 * every other page are untouched.
 */
export function SiteHeader() {
  return (
    <header className="w-full border-b border-hairline/60 bg-parchment/80 backdrop-blur-[2px]">
      <div className="container flex flex-col items-center gap-3 py-5 sm:flex-row sm:items-end sm:justify-between sm:py-6">
        <Link
          href="/"
          className="inline-flex items-center font-display text-2xl tracking-tight text-green sm:text-[1.75rem]"
        >
          <Image
            src="/images/logo/header_icon_transparent.png"
            alt=""
            width={64}
            height={58}
            priority
            sizes="32px"
            aria-hidden="true"
            className="mr-2 h-8 w-auto sm:h-9"
          />
          <span>Sufi Punk</span>
        </Link>
        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-serif text-sm text-ink-soft sm:text-[0.95rem]"
        >
          <Link href="/sanctuary" className="hover:text-green">
            Sanctuary First
          </Link>
          <Link href="/underground" className="hover:text-green">
            Spiritual Underground
          </Link>
          <Link href="/passage" className="hover:text-green">
            Safe Passage
          </Link>
          <Link href="/about" className="hover:text-green">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}