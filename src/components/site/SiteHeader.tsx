import Link from "next/link";

/**
 * SiteHeader — quiet, no clutter.
 * Brief: "no navigation clutter. Just the words and the world."
 * So the header carries only the wordmark and one small set of
 * inline links to the named strands. No menu icon, no banner.
 */
export function SiteHeader() {
  return (
    <header className="w-full border-b border-hairline/60 bg-parchment/80 backdrop-blur-[2px]">
      <div className="container flex flex-col items-center gap-3 py-5 sm:flex-row sm:items-end sm:justify-between sm:py-6">
        <Link
          href="/"
          className="font-display text-2xl tracking-tight text-green sm:text-[1.75rem]"
        >
          Sufi Punk
          <span className="ml-2 align-middle text-amber">❁</span>
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