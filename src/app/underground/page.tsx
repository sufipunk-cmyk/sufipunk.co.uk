import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SpiritualUndergroundIntro } from "@/components/underground/SpiritualUndergroundIntro";

export const metadata: Metadata = {
  title: "Spiritual Underground",
  description:
    "Low-demand faith and Spiritual Parallel Play. Inspiring the Sufi as the demonstrated example.",
};

export default function UndergroundPage() {
  return (
    <div className="bg-parchment text-ink">
      <SiteHeader />

      <SpiritualUndergroundIntro />

      <div className="container py-12 text-center">
        <p className="font-serif text-sm">
          <Link
            href="/#the-map"
            className="text-green underline decoration-amber/60 underline-offset-4 hover:text-amber"
          >
            ← Return to The Devotional Corner
          </Link>
        </p>
      </div>

      <SiteFooter />
    </div>
  );
}