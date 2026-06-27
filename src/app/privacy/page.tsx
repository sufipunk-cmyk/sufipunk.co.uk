import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FlowerDivider } from "@/components/site/Ornaments";

/**
 * /privacy — Privacy & Ethics (Phase 1, Section E).
 *
 * A plain-language statement of how this site treats the people who
 * visit it. The site already promises "no tracking pixels, no automated
 * sequences" on the homepage; this page makes that promise explicit and
 * durable, and names the few third parties a visitor meets only if they
 * choose to leave for them (Substack, Ko-fi, YouTube, the host).
 *
 * NB: an "On the use of AI" section was intentionally removed pending
 * accurate wording from the author. Do not re-add a drafted version —
 * the author will supply the real statement separately.
 */
export const metadata: Metadata = {
  title: "Privacy & Ethics",
  description:
    "How this site treats your privacy — no tracking, no analytics, no advertising. The roots are Islamic. The language is human.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-parchment text-ink">
      <SiteHeader />

      <main>
        <section className="container max-w-2xl py-16 sm:py-24">
          <header className="text-center">
            <p className="font-serif text-xs uppercase tracking-[0.4em] text-amber-text">
              The Threshold
            </p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-green sm:text-5xl">
              Privacy &amp; Ethics
            </h1>
            <p className="mx-auto mt-5 max-w-xl font-display text-xl italic leading-snug text-green-soft">
              A sanctuary should not watch the people who rest in it.
            </p>
          </header>

          <FlowerDivider />

          <div className="prose-zawiya sanctuary-prose mt-10 space-y-8">
            <div>
              <h2 className="font-display text-2xl text-green">
                What this site collects
              </h2>
              <p>
                As little as possible — in practice, nothing about you. There
                are no analytics, no advertising, no tracking pixels, and no
                cookies set by this site. We do not build a profile of you, and
                we have no interest in following you once you leave. You can
                read here without leaving a trace.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-green">
                When you choose to leave for somewhere else
              </h2>
              <p>
                A few links carry you to places we do not control, and only ever
                because you chose to go:
              </p>
              <ul>
                <li>
                  <strong>Substack</strong> — if you subscribe to Sanctuary
                  First, your email address is held by Substack under their own
                  terms and privacy policy. We send letters only when there is
                  something to say. No automated sequences, no tracking.
                </li>
                <li>
                  <strong>Ko-fi</strong> — if you choose to support the work,
                  any payment and account details are handled by Ko-fi, not by
                  us. We never see or store your card details.
                </li>
                <li>
                  <strong>YouTube</strong> — embedded videos are loaded in
                  privacy-enhanced mode (<code>youtube-nocookie.com</code>), so
                  YouTube does not set its usual tracking cookies unless you
                  press play.
                </li>
                <li>
                  <strong>The host</strong> — like every website, this one is
                  served by a hosting provider that may keep short-lived,
                  standard server logs (for example, IP addresses) for security
                  and reliability. These are not used to identify or track you.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-green">
                Email &amp; contact
              </h2>
              <p>
                If you write to{" "}
                <a
                  href="mailto:sufipunk@icloud.com"
                  className="text-green underline decoration-amber/60 underline-offset-4 hover:text-amber"
                >
                  sufipunk@icloud.com
                </a>
                , your message is read by a person and kept only as long as it
                takes to reply and to hold the thread of a conversation. It is
                never sold, shared, or added to a mailing list without your
                asking.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-green">Your choices</h2>
              <p>
                Because nothing is tracked, there is nothing to opt out of and
                no profile to delete. If you have subscribed on Substack or
                supported through Ko-fi and would like your details removed, you
                can do that directly with them, or write to us and we will help.
              </p>
            </div>

            <p className="font-display text-lg italic text-green">
              The roots are Islamic. The language is human. The gate is open.
            </p>
          </div>

          <FlowerDivider />

          <div className="mt-4 text-center">
            <p className="font-serif text-sm">
              <Link
                href="/"
                className="text-green underline decoration-amber/60 underline-offset-4 hover:text-amber"
              >
                ← Return to the home page
              </Link>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}