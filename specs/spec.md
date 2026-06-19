# Sufi Punk — Master Product Spec

## Project overview

Build `sufipunk.co.uk` as the main Sufi Punk site: a digital zawiya that presents the living practice, featured book, sanctuary map, patronage invitation, and the named strands of the work that live inside the rooms of that map.

The map is the conceptual key. The zawiya is a mountain garden — not a building. A stone path through flowers, lanterns at the entrance, named places along the path. The named places on the overview map (The Golden Door, The Lantern Library, The Devotional Corner, The Gathering Place) are the terrain; the strands (Sanctuary First, Spiritual Underground, Safe Passage) are the activities that happen at specific places. Both are kept open-ended on purpose — the site structure must not hard-code a count of strands or places, since the garden is alive and may grow. *Not a linear path. A living field.*

Naming layers: the overview map (the existing illustrated asset) names the four canonical places listed above. The Sanctuary First print booklet describes the same world at a closer "walk-into" scale — a lookout terrace with a telescope, wisteria-draped archways with a fountain, a stone bridge with a wooden signpost. The booklet's imagery lives inside each place's description as flavour, but the canonical names are the overview-map names so site copy follows one consistent map. A more detailed zoomed-in layer may be built later.

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
| Sanctuary First | done (12 real posts migrated from Session 4 docx) | `specs/sanctuary-first/document.md` |
| Spiritual Underground | stub live | `specs/spiritual-underground/document.md` |
| Safe Passage | stub live | `specs/safe-passage/document.md` |
| About | stub live | `specs/about/document.md` |
| Content & Platform Foundations | done (homepage milestone) | `specs/platform-foundations/document.md` |

## Current phase

Milestone 1 (initialization): pushed to GitHub as commit `9fa58f8`.

Milestone 2 (homepage): pushed to GitHub as commit `e7b277e`.

Milestone 3 (Sanctuary First infrastructure): pushed to GitHub as commit `e0511ad`.

Milestone 4 (Sanctuary First content migration): complete in code. Includes:
- All twelve canonical posts migrated from `Sanctuary_Session4_Final.docx`
- Three placeholder/seeded posts removed
- "Before you enter" and "Welcome Note" intros migrated into `SanctuaryIntro` (Welcome Note's numbered references translated to arc names per the no-numbering rule)
- ﷺ honorific (U+FDFA) restored everywhere it was corrupted to `★` in the source
- Amiri loaded as a Unicode-range fallback so Arabic codepoints render as real glyphs (no tofu) in body and display fonts site-wide
- Per-post taxonomy assigned by close reading of body + Zawiya Discussion sections
- Post body, "Turn to look at the world" italic closer, and full Zawiya Discussion (Wide Lens / Devotional Lens / Questions) all included verbatim
- Dates assigned so Post 1 sits newest and Post 12 sits oldest, leaving "today" free for new posts the author will write — narrative reading order is preserved without numbers being shown anywhere

Milestone 3 details (Sanctuary First infrastructure):
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
