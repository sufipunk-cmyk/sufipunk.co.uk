import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SafePassageIntro } from "@/components/passage/SafePassageIntro";

export const metadata: Metadata = {
  title: "Safe Passage",
  description:
    "In the world but not of it. Walking alongside neurodivergent people inside systems not built for them.",
  alternates: {
    canonical: "/passage",
  },
  openGraph: {
    images: [
      {
        url: "/images/places/the-gathering-place.jpg",
        alt:
          "The Gathering Place — a sheltered cobblestone corner with a clay chiminea, an ornate Moroccan lantern hanging on a weathered wooden gate, jasmine and lavender at the base.",
      },
    ],
  },
  twitter: {
    images: ["/images/places/the-gathering-place.jpg"],
  },
};

export default function PassagePage() {
  return (
    <div className="bg-parchment text-ink">
      <SiteHeader />

      <SafePassageIntro />

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