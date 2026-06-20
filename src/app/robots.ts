import type { MetadataRoute } from "next";

/**
 * robots.txt (M13).
 *
 * Permissive — the site is meant to be found. Points crawlers at the
 * sitemap and otherwise stays out of their way.
 */
const SITE_URL = "https://sufipunk.co.uk";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}