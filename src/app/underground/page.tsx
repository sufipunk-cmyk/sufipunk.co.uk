import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SpiritualUndergroundIntro } from "@/components/underground/SpiritualUndergroundIntro";

export const metadata: Metadata = {
  title: "Spiritual Underground",
  description:
    "Low-demand faith and Spiritual Parallel Play. Inspiring the Sufi as the demonstrated example.",
  alternates: {
    canonical: "/underground",
  },
  openGraph: {
    images: [
      {
        url: "/images/places/the-devotional-corner.jpg",
        alt:
          "The Devotional Corner — a candle-lit evening scene with a cut-glass vase of pussy-willow stems threaded with small lights, two golden domed lanterns, votive candles and prayer beads.",
      },
    ],
  },
  twitter: {
    images: ["/images/places/the-devotional-corner.jpg"],
  },
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
            ← Return to the home page
          </Link>
        </p>
      </div>

      <SiteFooter />
    </div>
  );
}