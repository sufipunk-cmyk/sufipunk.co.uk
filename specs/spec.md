# Sufi Punk — Master Product Spec

## Project overview

Build `sufipunk.co.uk` as the main Sufi Punk site: a digital zawiya that presents the living practice, featured book, sanctuary map, patronage invitation, and the three core strands of the work.

This site is not a portfolio, generic blog, or shop. It should feel like entering a place.

## Goals

- Create a mobile-first Next.js site that faithfully follows the master brief.
- Preserve the contemplative, reverent tone while keeping the site usable and readable.
- Make Ko-fi patronage and Substack subscription clear without turning the site into a hard-sell funnel.
- Provide distinct pages for Sanctuary First, Spiritual Underground, Safe Passage, and About.
- Keep the build static-friendly and low-maintenance.

## Design direction

- Atmosphere: quiet, reverent, library-meets-garden.
- Palette: parchment / dark green / amber-gold.
- Typography: Cormorant Garamond for display; readable serif or humanist sans for body copy.
- Imagery: use only project-provided assets.
- Layout principle: immersive sections rather than generic SaaS blocks or card grids.

## Technical stack decisions

- Framework: Next.js 15 App Router + TypeScript
- UI base: Tailwind CSS + shadcn/ui primitives where useful
- Hosting target: Vercel
- Content source: local markdown files for posts
- Database decision: `default` provider was selected for record-keeping, but **no database is in scope for phase one**
- Forms/auth/payments: no custom auth, no CMS, no payment processor integration; outbound links only to Ko-fi and Substack

## Architecture rules

- Follow the master brief as the source of truth.
- Prefer static content and filesystem content sources.
- Do not add features outside the brief.
- Use real asset filenames from the project; do not invent replacements.
- Build mobile-first, then refine desktop.
- Keep copy faithful where exact wording is specified.
- Push to GitHub after initialization and after each major milestone.

## Feature list

| Feature | Status | Spec |
|---|---|---|
| Homepage / Digital Zawiya | done (asset placeholders pending) | `specs/homepage/document.md` |
| Sanctuary First | done (3 placeholder posts pending real migration) | `specs/sanctuary-first/document.md` |
| Spiritual Underground | stub live | `specs/spiritual-underground/document.md` |
| Safe Passage | stub live | `specs/safe-passage/document.md` |
| About | stub live | `specs/about/document.md` |
| Content & Platform Foundations | done (homepage milestone) | `specs/platform-foundations/document.md` |

## Current phase

Milestone 1 (initialization): pushed to GitHub as commit `9fa58f8`.

Milestone 2 (homepage): pushed to GitHub as commit `e7b277e`.

Milestone 3 (Sanctuary First): complete in code. Includes:
- Sanctuary intro section (open-and-ongoing framing, no numbered framing per author override)
- Filesystem content loader for markdown posts (frontmatter + readingMinutes + neighbours)
- Brief-verbatim taxonomies: 9 experience tags, 8 theme tags, 5 tradition tags, 3 arc tags
- Post index with the four filter groups (URL-state, OR within group / AND across groups)
- Reading view per post with arc kicker, taxonomy chips, awaiting-migration banner where flagged, and prev/next navigation
- Three seeded placeholder posts (one per arc), all flagged `awaitingMigration: true`, ready to be replaced when the real twelve are migrated

Author overrides applied:
- Sanctuary posts are NOT numbered anywhere in UI or copy
- Homepage welcome's "who this is for" repetition trimmed
- Safe Passage professional audience list no longer mentions families

Up next:
- Migrate the real twelve Sanctuary posts from `sanctuary-blog.vercel.app`
- Spiritual Underground full content with the two confirmed definitions
- Safe Passage Version A (with the families override)
- About page full copy
- Replacement of asset placeholders once real images land in `public/images/`
