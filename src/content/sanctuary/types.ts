import type {
  ArcTag,
  ExperienceTag,
  ThemeTag,
  TraditionTag,
} from "./taxonomies";

/**
 * Frontmatter schema for a Sanctuary First post.
 *
 * Per brief: posts live as markdown files in /content/sanctuary, with
 * frontmatter carrying title, arc, and experience / theme / tradition tags.
 *
 * NB: there is intentionally no `number` field. The collection is
 * open-ended and ordering is by `date` descending.
 */
export type SanctuaryFrontmatter = {
  title: string;
  slug: string;
  date: string;
  excerpt?: string;
  arc: ArcTag;
  experience: ExperienceTag[];
  theme: ThemeTag[];
  tradition: TraditionTag[];
  /**
   * Optional flag for posts that have not yet been migrated from the
   * Squarespace / sanctuary-blog source. When `true`, the page renders
   * a clear notice that the canonical text is awaiting migration so it
   * never silently looks like the final published copy.
   */
  awaitingMigration?: boolean;
};

export type SanctuaryPost = SanctuaryFrontmatter & {
  /** Raw markdown body. */
  content: string;
  /** HTML rendered from `content`. */
  html: string;
  /** Estimated reading time, in minutes. */
  readingMinutes: number;
};