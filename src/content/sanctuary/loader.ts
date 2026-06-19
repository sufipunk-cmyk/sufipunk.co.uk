import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import type { SanctuaryFrontmatter, SanctuaryPost } from "./types";

const POSTS_DIR = path.join(process.cwd(), "content", "sanctuary");

marked.setOptions({
  gfm: true,
  breaks: false,
});

function readingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

function listMarkdownFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((name) => {
    // Underscore- and dot-prefixed files are conventionally not content
    // (e.g. `_README.md`, `.DS_Store`). Skip them so the loader only
    // ever sees real posts.
    if (name.startsWith("_") || name.startsWith(".")) return false;
    return name.endsWith(".md") || name.endsWith(".mdx");
  });
}

/**
 * Load every Sanctuary First post from /content/sanctuary, sorted newest
 * first. Pure filesystem read — runs at build time, no DB required.
 */
export function getAllSanctuaryPosts(): SanctuaryPost[] {
  const files = listMarkdownFiles(POSTS_DIR);

  const posts: SanctuaryPost[] = files.map((filename) => {
    const fullPath = path.join(POSTS_DIR, filename);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);
    const fm = data as SanctuaryFrontmatter;

    if (!fm.title || !fm.slug || !fm.date || !fm.arc) {
      throw new Error(
        `[sanctuary] ${filename} is missing required frontmatter (title, slug, date, arc).`
      );
    }

    const html = marked.parse(content, { async: false }) as string;

    return {
      ...fm,
      experience: fm.experience ?? [],
      theme: fm.theme ?? [],
      tradition: fm.tradition ?? [],
      content,
      html,
      readingMinutes: readingMinutes(content),
    };
  });

  posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return posts;
}

export function getSanctuaryPost(slug: string): SanctuaryPost | undefined {
  return getAllSanctuaryPosts().find((p) => p.slug === slug);
}

/**
 * Returns prev / next neighbours by chronological order
 * (newest first → "previous" walks toward older posts).
 */
export function getNeighbours(slug: string): {
  previous?: SanctuaryPost;
  next?: SanctuaryPost;
} {
  const posts = getAllSanctuaryPosts();
  const idx = posts.findIndex((p) => p.slug === slug);
  if (idx === -1) return {};
  return {
    next: idx > 0 ? posts[idx - 1] : undefined,
    previous: idx < posts.length - 1 ? posts[idx + 1] : undefined,
  };
}