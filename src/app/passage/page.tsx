import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SafePassageIntro } from "@/components/passage/SafePassageIntro";

export const metadata: Metadata = {
  title: "Safe Passage",
  description:
    "In the world but not of it. Walking alongside neurodivergent people inside systems not built for them.",
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
            ← Return to The Gathering Place
          </Link>
        </p>
      </div>

      <SiteFooter />
    </div>
  );
}