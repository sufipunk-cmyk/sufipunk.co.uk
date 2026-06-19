# Sanctuary First — content folder

This folder is the source of truth for Sanctuary First posts.

## How it works

Every `.md` (or `.mdx`) file here becomes a post on the live site:

- File path:        `content/sanctuary/<slug>.md`
- Site URL:         `/sanctuary/<slug>`
- Listing:          `/sanctuary` (filterable by experience / theme / tradition / arc)

There is no numbering anywhere — the collection is open-ended.
Order is determined purely by the `date` field in frontmatter.

## Frontmatter schema

```yaml
---
title: "The post's full title"
slug: "url-friendly-slug"          # must be unique
date: "2025-09-12"                 # YYYY-MM-DD
excerpt: "Optional one-sentence opener that appears on the index."
arc: "arrival"                     # arrival | threshold | practice
experience:
  - "burnout-and-survival"
  - "faith-without-belonging"
theme:
  - "low-demand-faith"
  - "safety-and-nervous-system"
tradition:
  - "islamic-and-sufi"
awaitingMigration: false           # set to true while the canonical text
                                   # has not yet been migrated from
                                   # sanctuary-blog.vercel.app — the
                                   # post then renders with a clear
                                   # "awaiting migration" notice
---

The body of the post is plain markdown. Headings, paragraphs, blockquotes,
lists, and links all work. The reading view is intentionally narrow and
distraction-free.
```

## Tag IDs

Use the exact `id` strings from `src/content/sanctuary/taxonomies.ts` —
TypeScript will refuse to build if a tag is misspelled.

## Migration status

The original twelve Sanctuary posts have been migrated from
`Sanctuary_Session4_Final.docx` (Session 4 Updated Edition). All
twelve are real, canonical text — not placeholders. The
`awaitingMigration` flag is no longer set on any of them.

Notes from the migration:

- The ﷺ honorific after "Muhammad" was corrupted to `★` in a
  previous round-trip of the source. It has been restored to the
  correct Unicode codepoint U+FDFA in all six places it appears.
- The "Before you enter" and "Welcome Note" intros from the docx
  are rendered by the `SanctuaryIntro` component, not stored as
  posts.
- Dates were assigned so Post 1 (the author's narrative opener)
  sits at the top of the chronological index and Post 12 sits at
  the bottom. New posts written today simply use today's date and
  appear above all twelve. The author can override any date.
- The original document references the posts by number in the
  Welcome Note ("Posts 1–7 / Post 8 / Posts 9–12"). Per the
  author's instruction that the live collection should not be
  numbered, those references are rendered as arc names in the
  intro: Arrival / Threshold / Practice.