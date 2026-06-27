import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { AboutIntro } from "@/components/about/AboutIntro";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Sufi Punk — a soul that prepares the ground. Written by a parent navigating PDA, faith, and what researchers have named systems-generated trauma.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-parchment text-ink">
      <SiteHeader />

      <AboutIntro />

      <div className="container py-12 text-center">
        <p className="font-serif text-sm">
          <Link
            href="/"
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