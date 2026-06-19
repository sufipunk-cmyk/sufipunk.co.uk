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
| Homepage / Digital Zawiya | done (M9 — real visuals in for map, four named places, and book cover) | `specs/homepage/document.md` |
| Sanctuary First | done (12 real posts migrated from Session 4 docx) | `specs/sanctuary-first/document.md` |
| Spiritual Underground | done (M10 — full page replacing the StrandStub) | `specs/spiritual-underground/document.md` |
| Safe Passage | done (M10 — Version A page text in full, with the documented "a family member" override) | `specs/safe-passage/document.md` |
| About | done (M11 — full page replacing the StrandStub) | `specs/about/document.md` |
| Content & Platform Foundations | done (M12 — Vercel build path corrected) | `specs/platform-foundations/document.md` |

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

Milestone 9 (real visual assets): complete in code. Includes:
- Five real photographs and the book cover dropped into `public/images/`:
  - `images/places/sanctuary-map.jpg` — illustrated overview map
  - `images/places/the-golden-door.jpg` — from `golden_door_FINAL_brightened.webp` (the brightened version, replacing the original Golden Door upload)
  - `images/places/the-lantern-library.jpg` — confirmed by author as the photo of the green-and-white mosaic lantern + Rumi/Shams books
  - `images/places/the-devotional-corner.jpg` — confirmed by author, kept as-is at the original candle-lit warmth (a brighter retake was tested and rejected)
  - `images/places/the-gathering-place.jpg` — confirmed by author as the chiminea/lantern hearth scene
  - `images/book/low-demand-faith-cover.jpg` — rendered from the supplied Cover.pdf
- `Place` type now carries `image` and `imageAlt`; a top-level `mapImage` constant carries the overview-map asset path. Both are set in `src/content/site/zawiya.ts` so the data file remains the single source of truth.
- `SanctuaryMap` rebuilt around a data-driven layout: the threshold place (`resident === null`) is rendered as a wide landscape hero (~2.6:1, full-width, centre-cropped from its source); the remaining places render as a uniform 3:4 portrait row (centre-cropped). This stays compatible with adding a future fourth strand without code changes — only the data file would need to grow.
- Homepage Book section swapped from `AssetPlaceholder` to a real `next/image` of the cover; `MosaicRow` import removed where it was only used for the placeholder ornament. `AssetPlaceholder` itself is kept in the codebase for any later asset slots that haven't yet been delivered.

Milestone 10 (Spiritual Underground + Safe Passage full pages): complete in code. Includes:
- `/underground` rebuilt as a full-content page replacing the M3 `StrandStub`. Renders the two confirmed concepts from the master brief in this order: a short "Before you enter" framing in the site voice, the Low-Demand Faith definition as a quotation in Naz's voice, the Spiritual Parallel Play definition as plain copy with the brief's exact wording, an "Inspiring the Sufi" demonstrated-example block linking out to inspiringthesufi.com with the brief-specified link text "This is where it started. Come and see.", and a restrained "An invitation" block opening expressions of interest from faith, arts, and cultural organisations with the project email and a Substack tail. Closes with a "From the Devotional Corner" flower divider.
- `/passage` rebuilt as a full-content page replacing the M3 `StrandStub`. Renders the master brief's confirmed Version A text verbatim — both the "Before you enter" and "Welcome Note" sections — with the author override applied (the words "a family member" removed from the Welcome Note's welcome list). Closes with a quiet `sufipunkmusic@gmail.com` contact line and a "From the Gathering Place" flower divider.
- Both pages mirror the existing `SanctuaryIntro` pattern: header kicker, display title, sectioned body using `prose-zawiya sanctuary-prose`, a place-named flower divider that ties the strand back to its home on the overview map.
- Page routes are kept thin; component bodies live in `src/components/underground/SpiritualUndergroundIntro.tsx` and `src/components/passage/SafePassageIntro.tsx`. `StrandStub` is retained for `/about`, which is still in stub state per its spec.
- Two flagged ambiguities recorded in `specs/spiritual-underground/document.md` for the author to settle when she's ready: (a) whether to swap the Spiritual Parallel Play definition to the longer first-person passage that exists in `ITS_Master_Brief.md`, and (b) whether organisational expressions-of-interest should remain at `sufipunkmusic@gmail.com` or move to a different inbox.

Milestone 11 (About page): complete in code. Includes:
- `/about` rebuilt as a full-content page replacing the M3 `StrandStub`. Same `SanctuaryIntro` pattern as the strand pages — kicker, display title, sectioned body using `prose-zawiya sanctuary-prose` — but consciously not tied to a named place on the overview map, since this page sits slightly behind the whole garden rather than at one of the four micro-sanctuaries.
- The page integrates three confirmed sources, all reproduced verbatim:
  - The master brief's confirmed soul-line as the header (*"A soul that prepares the ground. The holding. The place you are cherished."*).
  - The master brief's confirmed short orienting bio quotation, with a small attribution line honouring the brief's "systems-generated trauma" note (referencing Clements & Aiello, University of Leeds / Cerebra) so the phrase reads as a research reference rather than a coinage.
  - The Sanctuary First print booklet's "About Me" card text supplied 19 June 2026, including the four-item intersection strip ("Low-demand parenting / Neurodivergence and refusal / Faith without coercion / Culture, art, and sovereignty") and the closing line ("Devotion. Refusal. Sanctuary. Return. / This is how I make meaning. This is how I stay connected.").
- The author-supplied pull-quote ("Writing here is simply the active record of my devotion.") sits near the close of the personal-voice body, just before the four-item strip.
- The booklet's mosaic-doorway photograph is dropped into `public/images/about/mosaic-doorway.jpg` and embedded with its booklet caption preserved verbatim.
- The page closes with a plain `❁` divider (not place-named) and a "Return to the home page" link, since About does not live at one of the four named places. This keeps the standing rule intact: only the map's named places carry place-name flower dividers.
- `StrandStub` is no longer referenced from any page route. The component is kept in the codebase for any future placeholder needs.

Milestone 12 (production build configuration fix): complete in code. Includes:
- Removed `output: 'standalone'` and the `distDir` override from `next.config.js`. The standalone output mode produces a self-contained Node.js server bundle for self-hosting (e.g. Docker), not a folder Vercel can serve as static output. Combined with the `distDir` override and a `vercel.json` pointing at that override, every route on the production deploy was 404'ing. Default Next.js `.next/` output is restored.
- Deleted `vercel.json`. A standard Next.js project on Vercel needs no `vercel.json` for the build/serve path to work.
- Stripped `BUILD_DIR=.next-build` from both `package.json` build scripts (`build` and `build:local`).
- Removed `.next-build/types/**/*.ts` from the `tsconfig.json` `include` list — only the default `.next/types/**/*.ts` is needed now.
- Updated the `Dockerfile`'s standalone-server `COPY` lines to reference `/app/.next/standalone` and `/app/.next/static` instead of the old `/app/.next-build/...` paths. The Dockerfile's defensive sed step that injects `output: 'standalone'` into `next.config.js` inside the Docker build context is preserved — that's correct behaviour for Docker self-hosting and only fires inside Docker builds. It does not affect Vercel.
- Verified: a clean `bun run build` succeeds, output goes to the default `.next/` directory, all 20 routes generate as static (`/`, `/about`, `/passage`, `/sanctuary`, `/sanctuary/[slug]` ×12, `/underground`, plus `_not-found`), no `.next-build/` directory is created anywhere, no `.next/standalone/` directory is created (confirming standalone mode is fully off), and the project-wide grep for `BUILD_DIR`, `.next-build`, and `outputDirectory` returns zero matches outside the historical specs trail.
- Browser-tested in dev: home (welcome / map / book), Sanctuary First, About — all M11 content baseline preserved with no drift. The fix is content-invisible, as required.

Note flagged for later (not in M12 scope): `package.json` still has `prisma generate;` at the start of the `build` script. The project carries no Prisma schema and no `prisma` dependency, so on each build that command prints `prisma: command not found` before falling through to `next build`. The `;` continuation means it is non-blocking, so the build still succeeds. Dead leftover from the project template — easy to drop in a future milestone, but explicitly out of scope here under "do not touch any copy, layout, or content — this is purely a build configuration correction" if interpreted strictly. Including the note here so it doesn't get lost.

Up next:
- Migrate the real twelve Sanctuary posts from `sanctuary-blog.vercel.app`
