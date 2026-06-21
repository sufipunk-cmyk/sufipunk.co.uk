import Image from "next/image";
import Link from "next/link";

const SUBSTACK = "https://sufipunksanctuaryfirst.substack.com/subscribe";
const KOFI = "https://ko-fi.com/sufipunk";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-hairline/60 bg-parchment-deep/40">
      <div className="container py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            {/* M16 — elegant lockup replaces the plain text "Sufi Punk"
                heading + tagline paragraph. The lockup carries the
                wordmark "Sufi Punk · Digital Zawiya" inside the
                artwork, so no surrounding heading text is needed. */}
            <Image
              src="/images/logo/sufipunk_logo_elegant_lockup_FINAL.png"
              alt="Sufi Punk · Digital Zawiya — a refined mosaic gateway above the wordmark Sufi Punk in deep-green serif, with Digital Zawiya set beneath in small caps."
              width={500}
              height={500}
              sizes="240px"
              className="h-auto w-[200px] sm:w-[240px]"
            />
          </div>
          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-ink-soft">
              Visit
            </h4>
            <ul className="mt-3 space-y-1.5 font-serif text-[0.95rem]">
              <li>
                <Link href="/sanctuary" className="text-green hover:text-amber">
                  Sanctuary First
                </Link>
              </li>
              <li>
                <Link href="/underground" className="text-green hover:text-amber">
                  Spiritual Underground
                </Link>
              </li>
              <li>
                <Link href="/passage" className="text-green hover:text-amber">
                  Safe Passage
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-green hover:text-amber">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-ink-soft">
              Elsewhere
            </h4>
            <ul className="mt-3 space-y-1.5 font-serif text-[0.95rem]">
              <li>
                <a
                  href={SUBSTACK}
                  target="_blank"
                  rel="noreferrer"
                  className="text-green hover:text-amber"
                >
                  Sanctuary First on Substack
                </a>
              </li>
              <li>
                <a
                  href={KOFI}
                  target="_blank"
                  rel="noreferrer"
                  className="text-green hover:text-amber"
                >
                  Ko-fi — Sanctuary First Patron
                </a>
              </li>
              <li>
                <a
                  href="mailto:sufipunk@icloud.com"
                  className="text-green hover:text-amber"
                >
                  sufipunk@icloud.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-hairline/60 pt-6 text-center font-serif text-xs text-ink-soft">
          <p className="italic">
            The roots are Islamic. The language is human. The gate is open.
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Sufi Punk. All writing is the author&apos;s own.
          </p>
        </div>
      </div>
    </footer>
  );
}