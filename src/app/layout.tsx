import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond, Amiri } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

/**
 * Amiri carries the full set of Arabic presentation forms — including
 * U+FDFA, the ligature for "sallallahu alayhi wa sallam" (ﷺ) used after
 * the Prophet Muhammad's name. The Latin body fonts do not include this
 * codepoint, so without a fallback the glyph renders as a tofu box.
 *
 * We expose this as a CSS variable and attach it as a tail fallback in
 * the global font stacks so it kicks in automatically for any Arabic
 * codepoint anywhere in the site, with no per-element markup needed.
 */
const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sufipunk.co.uk"),
  title: {
    default: "Sufi Punk — A Digital Zawiya",
    template: "%s · Sufi Punk",
  },
  description:
    "A place to rest, remember what is sacred, and reclaim the art of being. " +
    "A low-demand sanctuary for neurodivergent seekers, exhausted believers, " +
    "and anyone living close to the edges of capacity.",
  openGraph: {
    title: "Sufi Punk — A Digital Zawiya",
    description:
      "A place to rest, remember what is sacred, and reclaim the art of being.",
    url: "https://sufipunk.co.uk",
    siteName: "Sufi Punk",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sufi Punk — A Digital Zawiya",
    description:
      "A place to rest, remember what is sacred, and reclaim the art of being.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${ebGaramond.variable} ${amiri.variable}`}
    >
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}