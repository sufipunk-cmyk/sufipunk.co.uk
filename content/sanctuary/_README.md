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

## Pending migration

The brief notes that 12 Sanctuary collection posts already exist on
sanctuary-blog.vercel.app and should be migrated into this folder as
markdown files. Until those are dropped in, three placeholder posts
sit here marked `awaitingMigration: true` so the index, filters, and
reading view can be reviewed against the real layout — no surprises
when the real text replaces them.