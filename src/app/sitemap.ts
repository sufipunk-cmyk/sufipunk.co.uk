import type { MetadataRoute } from "next";
import { getAllSanctuaryPosts } from "@/content/sanctuary/loader";

/**
 * Sitemap (M13).
 *
 * Static routes plus every Sanctuary First post slug. Standard
 * Next.js App Router convention — Next picks this up at /sitemap.xml.
 *
 * Last-modified for each post is its frontmatter `date`. The static
 * pages get the build time as a single shared `lastModified`, which
 * is good enough for a small site; if any of these change content
 * meaningfully we can per-pin them later.
 */
const SITE_URL = "https://sufipunk.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/sanctuary`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/underground`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/passage`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const postEntries: MetadataRoute.Sitemap = getAllSanctuaryPosts().map((p) => ({
    url: `${SITE_URL}/sanctuary/${p.slug}`,
    lastModified: new Date(`${p.date}T00:00:00Z`),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticEntries, ...postEntries];
}