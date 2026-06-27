import Link from "next/link";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { FlowerDivider } from "./Ornaments";

/**
 * A quiet "next milestone" placeholder for strand pages whose full
 * content arrives in subsequent milestones. Kept in the same voice as
 * the rest of the site so the experience never breaks.
 */
export function StrandStub({
  kicker,
  title,
  intro,
  upNext,
}: {
  kicker: string;
  title: string;
  intro: string;
  upNext: string;
}) {
  return (
    <div className="bg-parchment text-ink">
      <SiteHeader />

      <section className="container py-20 sm:py-28">
        <div className="prose-zawiya text-center">
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-amber-text">
            {kicker}
          </p>
          <h1 className="mt-3 font-display text-4xl text-green sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 font-serif text-[1.05rem] leading-relaxed text-ink">
            {intro}
          </p>

          <FlowerDivider label="forming" />

          <p className="font-serif text-[0.95rem] italic leading-relaxed text-ink-soft">
            {upNext}
          </p>

          <p className="mt-10 font-serif text-sm">
            <Link
              href="/"
              className="text-green underline decoration-amber/60 underline-offset-4 hover:text-amber"
            >
              ← Return to the home page
            </Link>
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}