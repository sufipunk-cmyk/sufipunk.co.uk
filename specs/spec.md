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
| Editing pass — SEO, consistency, voice | done (M13) | — |
| Homepage consolidation — places + strands merged, Substack CTA collision fixed | done (M14) | — |
| Spiritual Parallel Play rewrite, homepage cards, About consolidation | done (M15) | — |

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

Milestone 13 (editing pass — SEO, consistency, hierarchy clarity, voice): complete in code. Includes:

- **SEO**:
  - Added `src/app/sitemap.ts`. Emits all static routes (`/`, `/sanctuary`, `/underground`, `/passage`, `/about`) plus every Sanctuary post URL, with `lastModified` per post pulled from frontmatter `date`. Verified at `/sitemap.xml` — 17 `<loc>` entries.
  - Added `src/app/robots.ts`. Permissive `User-agent: *, Allow: /` plus a sitemap pointer. Verified at `/robots.txt`.
  - Added Article JSON-LD to each Sanctuary post (`src/app/sanctuary/[slug]/page.tsx`): `@context`, `@type: "Article"`, `headline`, `author` (Person, "Sufi Punk"), `datePublished` from frontmatter, `description` from excerpt, `mainEntityOfPage` URL, `publisher` Organization. Rendered via `<script type="application/ld+json">` at the top of the page tree. Verified by curl on `/sanctuary/sufi-punk` — JSON-LD payload present and well-formed.
  - Added a per-page Open Graph image (and matching Twitter image) using the real photographs already in `public/images/places/`, replacing the site-wide default for those routes:
    - Homepage → `/images/places/sanctuary-map.jpg` (overview-map illustration).
    - `/sanctuary` → `/images/places/the-lantern-library.jpg`.
    - `/underground` → `/images/places/the-devotional-corner.jpg`.
    - `/passage` → `/images/places/the-gathering-place.jpg`.
  - The site-wide default OG image stays in place via `metadataBase` + `layout.tsx` for any route that doesn't override.

- **Substack consistency**:
  - URL: every Substack link across the entire site now points to `/subscribe` (previously the footer linked to the bare Substack homepage while in-page links pointed to `/subscribe`). Footer's `SUBSTACK` constant updated; homepage book CTA and inline link both routed through a single `SUBSTACK_SUBSCRIBE` constant; About page Substack link updated; Underground Substack link updated.
  - Visible link text: standardised everywhere to read "Sanctuary First on Substack" (previously varied between "Join the list", "Quiet Letters", and the footer's "Substack — Sanctuary First").

- **About page — Clements & Aiello attribution**:
  - Removed from its previous position directly under the orienting bio quotation.
  - Replaced inline with a small ★ footnote marker (`<sup>` linking to `#footnote-systems-generated-trauma`) on the phrase "systems-generated trauma" inside the orienting bio quotation.
  - Reworded body added at the bottom of the About page in an `<aside id="footnote-systems-generated-trauma">`: *"Systems-generated trauma is drawn from research by Clements & Aiello (University of Leeds / Cerebra), referenced here in their language, though I apply it more broadly than their original context."*

- **Safe Passage — acronym definitions on first use**:
  - SEND first-use expansion added in body copy: "parenting through SEND (Special Educational Needs and Disabilities) tribunals". Verified rendering on desktop and mobile.
  - PDA first-use expansion **not added on Safe Passage**: PDA does not appear anywhere in the Safe Passage body copy as written (the master-brief Version A text routes that around "navigating statutory systems" / "SEND tribunals"). Inserting an expansion would have required also inserting a fresh PDA reference, which is editing copy rather than annotating it. PDA does appear elsewhere — in the orienting bio quote on About and in the homepage Patronage section — but neither of those is the Safe Passage page. Flagged in the M13 handoff for the author to decide whether (a) Safe Passage should mention PDA and we add it, or (b) the rule was meant to apply across the site as a whole, in which case the About-page PDA reference becomes the "first use" and gets the expansion there.

- **Spiritual Underground — "Inspiring the Sufi" portal**:
  - Promoted from a buried in-paragraph link to a prominent `<aside>` portal block. Block contains: kicker "A portal · Ten years of practice", title "Inspiring the Sufi", italic line "Fifty Names of Allah. Fifty songs. Fifty written reflections.", a short body paragraph, a green primary button "Visit Inspiring the Sufi →" pointing to `https://inspiringthesufi.com`, and the original brief-required line "This is where it started. Come and see." preserved as the italic caption underneath the button.

- **"Art" made explicit**:
  - Underground lead paragraph rewritten: "the art, culture, and creative practice strand of this work — the place for people whose faith, attention, and making live a little outside the standard rooms." Naming "art" first, separately from "culture" and "creative practice".
  - About page reinforced: a new paragraph below the four-item strip connects "culture, art, and sovereignty" explicitly to the author's decade as an Artistic Director — *"That fourth current — culture, art, and sovereignty — is not abstract. I have spent a decade as an Artistic Director, and the discipline of building accessible creative space sits inside everything written here."*

- **Book section placement (experiment — flagged for author review)**:
  - Moved the homepage "Coming Soon · A Book" section from its previous higher position (just under the welcome) to sit directly after the "Across the Garden" section. New homepage section order: Welcome → Sufi Punk three-spaces line → Map → Across the Garden (the four entry rows, including the Safe Passage row) → **Book** → Patronage → Email.
  - Marked clearly as an experiment in the M13 handoff. Easy to revert by moving the `<BookSection />` JSX block back above `<MapSection />` in `src/app/page.tsx` if the author prefers the previous placement.

- **Sufi Punk / three spaces clarifying line (draft — flagged for author review)**:
  - Added a short clarifying section near the top of the homepage, between the Welcome and the Map, with kicker "Sufi Punk" and italic body:
    > Sufi Punk is the creative identity behind this work. Three spaces hold it — Sanctuary First, Spiritual Underground, Safe Passage.
  - Flagged in the M13 handoff as a draft for the author to ratify or rewrite in her own voice. The wording is mine, the structural decision (one short orienting line before the map) is the brief.

- **Explicitly NOT changed in M13** (per the brief):
  - About page's "ABOUT ME" heading next to the photograph stayed as-is (intentional repetition).
  - Homepage book blurb register stayed as-is (deliberately bridging voice).
  - No "start here" cue or orientation hierarchy added — the four entry points (the map and the three strands) remain deliberately undifferentiated.

- **Verification**:
  - `/sitemap.xml` and `/robots.txt` curl-verified on the dev server.
  - JSON-LD payload curl-verified on `/sanctuary/sufi-punk`.
  - All M13 visual changes browser-tested at desktop 1280×900 and mobile 375×812 across home, about, underground, passage, and one sanctuary post. Mobile screenshots confirm: three-spaces line renders cleanly, footer Substack text reads "Sanctuary First on Substack", About footnote ★ marker resolves to the bottom-of-page footnote, Underground "Visit Inspiring the Sufi →" portal block displays as a prominent button, Safe Passage SEND expansion renders correctly, Book section sits below "Across the Garden".

Milestone 14 (homepage consolidation — places + strands merged, Substack CTA collision fixed): complete in code. Includes:

- **Two homepage sections merged into one.** Until M14 the homepage carried two adjacent sections that each described the same four places independently — "Places Along the Path" inside the map, and "Across the Garden" as the strands index. The same atmospheric phrases ("a lamp-lit terrace", "attention is allowed to follow itself", "stone archways draped in wisteria", "stone bridge over a stream") appeared twice on the same scroll. The two sections are now one merged section.

- **Visual layout** carries over from the previous "Places Along the Path" grid: The Golden Door is the wide hero (no strand attached, no restructuring), and the three resident places sit shoulder-to-shoulder underneath it.

- **Resident-card content order** restructured per the M14 brief:
  1. Photo (unchanged — same hero crops as before).
  2. Strand name as the prominent header (matches the nav: "Sanctuary First", "Spiritual Underground", "Safe Passage").
  3. Place name as a smaller italic secondary line ("Found at The Lantern Library" / "Found at The Devotional Corner" / "Found at The Gathering Place").
  4. One tightened paragraph (atmosphere + function combined). The "Home of X." opening was stripped from each resident place's `description` in `src/content/site/zawiya.ts`, since the strand name is now the header above; the paragraph reads cleanly without it.
  5. One direct link ("Enter Sanctuary First →" / "Enter Spiritual Underground →" / "Enter Safe Passage →"). The whole card is wrapped in `<Link>` so the photograph is itself an affordance, but the visible "Enter …" line is the labelled action.

- **Framing line carried over verbatim** from the previous Across the Garden section as the intro to the merged section: *"Different voices along the path. Each strand has its own place in the map above; move between them as your capacity allows. None is more important than the others."* Load-bearing for the site's non-hierarchical posture.

- **Section heading / kicker (draft, flagged):** kicker "WHAT HAPPENS HERE", heading "Across the Garden". Inherited from the previous Across the Garden section. Flagged in the M14 handoff for the author to ratify or rename — the merged section now contains both places (with photos) and strands (as residents), so the heading sits on a slightly different fulcrum than before.

- **Map section untouched in scope, trimmed in implementation.** The Map (zawiya history + the illustrated overview map) stays where it was on the page and keeps its content. Implementation cleanup: the per-place card grid that previously rendered at the bottom of `SanctuaryMap.tsx` (lines 80–106) has been removed, since that grid is now the merged section. The Map component is now strictly: kicker → heading → historical paragraph → illustrated overview image with caption. All place-card / strand-pairing logic moved to `AcrossTheGarden.tsx`.

- **Substack CTA collision fixed.** The Book section's CTA and the Quiet Letters / Join the Zawiya CTA both used to read "SANCTUARY FIRST ON SUBSTACK →" — identical button text for two different invitations on the same page. The two are now differentiated:
  - Book section CTA → **"Follow the book's progress →"** (flagged for the author to ratify the wording). Both `href` values still point to the same `/subscribe` URL — the difference is purely in the visible label, since "follow the book's progress" is the actual reason a reader would subscribe from inside the Book section.
  - Quiet Letters CTA → kept as **"Sanctuary First on Substack →"** (the literal subscribe action).
  - The inline support line under the Book CTA still reads "Updates arrive via Sanctuary First on Substack." with the underline link unchanged.

- **Content data changes** in `src/content/site/zawiya.ts`: the `description` field on the three resident places (`the-lantern-library`, `the-devotional-corner`, `the-gathering-place`) had its leading "Home of <Strand>." sentence removed, since the strand name is now the card header. Golden Door's description is unchanged.

- **Component changes** summary:
  - `src/components/site/SanctuaryMap.tsx` — trimmed. No longer renders place cards; only the historical text and the illustrated overview map.
  - `src/components/site/AcrossTheGarden.tsx` — rewritten as the merged section. Renders the threshold hero (`PlaceHero`) plus the three resident strand cards (`ResidentCard` + `ResidentCardInner`). The previous strand-row layout (text-only rows with kicker + name + paragraph + arrow) is gone, replaced by photo cards.
  - `src/app/page.tsx` — Book section CTA wording changed from "Sanctuary First on Substack" to "Follow the book's progress". Section comment block updated to reflect the M14 ordering.

- **Verification:**
  - `bun run build` succeeds. All 22 routes generate as static. `/sitemap.xml` and `/robots.txt` still register cleanly. JSON-LD on Sanctuary posts unaffected.
  - Browser-tested at desktop 1280×900 and mobile 375×812. Walked the full homepage scroll: Welcome → Sufi Punk three-spaces → Map (now ends at the illustrated overview, no place grid below) → merged Across the Garden (kicker, heading, framing line, Golden Door hero, three resident cards each with strand name / "Found at …" / one paragraph / "Enter X →" link) → Book ("Follow the book's progress →") → Patronage → Quiet Letters ("Sanctuary First on Substack →") → Footer ("Sanctuary First on Substack" link). Confirmed: the two Substack buttons are now visibly different on both viewports; no in-page repetition of the same atmospheric phrases.

Milestone 15 (Spiritual Parallel Play rewrite, homepage cards, About consolidation): complete in code. Includes:

- **Spiritual Underground — Spiritual Parallel Play definition replaced.** The earlier short summary on `/underground` ("Spiritual Parallel Play is a practice that grew out of a decade of community arts work…") is replaced with the author's settled four-paragraph version, supplied verbatim in the M15 brief. The four paragraphs cover: (1) following monotropic curiosity all the way down and discovering God already there in parallel-play presence; (2) the world calling that depth a deficiency, while God designed it — including the hidden-treasure clause; (3) the growth as noticing, permeating outward into a way of finding God anywhere; (4) the relationship to ritual: same destination, different road, only one of the roads has infrastructure built for it.

- **Hidden-treasure footnote** added at the bottom of the Spiritual Parallel Play section. Marked with the same ★ pattern used on the About page in M13: a small inline `<sup>` after "A hidden treasure" in paragraph 2, anchored to a small `<aside id="footnote-hidden-treasure">` set off with a hairline above. Footnote text reproduced verbatim from the brief: *"The hidden-treasure saying is held within Sufi tradition, particularly through Ibn Arabi's lineage; its standing as an authenticated hadith is debated among scholars, but I hold it as spiritually true regardless of its formal chain."*

- **Homepage resident cards — Sanctuary First and Spiritual Underground rewritten.** The single tightened paragraph for each of those two cards (in the merged Across the Garden section, M14) is replaced with the M15-supplied wording, both verbatim.
  - Sanctuary First card: *"Witness writing that lives low-demand faith in practice — attention allowed to follow itself, in ordinary moments as much as formal ones. An open, ongoing collection of arrival, threshold, and practice."* Photo and "Found at The Lantern Library" preserved.
  - Spiritual Underground card: *"Spiritual Parallel Play in practice — following curiosity all the way down and finding God already there. A low-pressure field for people practising faith, creativity, and survival outside traditional expectations."* Photo and "Found at The Devotional Corner" preserved.
  - Safe Passage card: deliberately untouched per the M15 brief.
  - Implementation: edited the `description` field for `the-lantern-library` and `the-devotional-corner` in `src/content/site/zawiya.ts`. The card layout in `AcrossTheGarden.tsx` is unchanged — same data flow as M14.

- **About page — consolidation, four edits.**
  1. Intersection sentence updated. Was: *"I live at the intersection of low-demand parenting, neurodivergence and refusal, faith without coercion, and culture, art, and sovereignty."* Now: *"I live at the intersection of low-demand parenting, neurodivergence, faith, and art."*
  2. *"I built Sanctuary First so safety could come first"* → *"I built this zawiya so safety could come first."* The rest of the sentence and surrounding paragraph are unchanged.
  3. New passage added immediately after *"This is sanctuary for those who were never meant to comply."*: *"This is what makes this zawiya different from any other: it accepts anyone who wants to remember God, including those who could not find belonging in their own religion. You can find validation here — and you can return to your faith with clarity, where ritual no longer defines your relationship with God."*
  4. Four-item strip replaced entirely. The previous booklet-derived strip (*"Low-demand parenting / Neurodivergence and refusal / Faith without coercion / Culture, art, and sovereignty"*) is now four bare words: **Epistemic injustice. Monotropic attention. Bridge. Translation.** Same visual styling — four-column grid, same italic-display treatment, same hairline separators. Per the brief: no explanation, definition, or footnote is added for any of these four words anywhere on the site. They stand undefined the same way *"Devotion. Refusal. Sanctuary. Return."* already does on this page.
  5. The M13 explanatory paragraph that previously sat below the strip ("That fourth current — *culture, art, and sovereignty* — is not abstract. I have spent a decade as an Artistic Director…") is removed in M15, since the new four words must stand bare with no explanation anywhere. The Artistic Director context still exists on the page above, in the personal-voice body ("I am a Muslim PDA parent, AuDHD writer, and Artistic Director.").
  6. The closing line *"Devotion. Refusal. Sanctuary. Return."* and its tail (*"This is how I make meaning. This is how I stay connected."*) are preserved unchanged, positioned after the new four bare words.

- **Explicit non-additions** per M15 brief paragraph 4. No new card, section, or standalone definition has been added for "ND Devotion", "Devotion Without Demand", or "Monotropic Attention" anywhere on the site. The single bare appearance of *"Monotropic attention"* in the four-word strip on About is the only place that phrase exists on the site, and it is intentionally undefined.

- **Verification:**
  - `bun run build` succeeds. All 22 routes generate as static. Sitemap, robots, JSON-LD, and per-page OG images carried over from M13/M14 are unaffected.
  - Browser-tested at desktop 1280×900 and mobile 375×812. Walked: home (homepage cards) → about (intersection sentence, "this zawiya" line, new passage, four bare words, closing line) → underground (full SPP section, ★ marker on "A hidden treasure" in paragraph 2, hidden-treasure footnote rendering after paragraph 4, "The demonstrated example" section following intact). Confirmed: SPP definition reads as four paragraphs in order; both footnotes (★) on `/underground` and `/about` render correctly on both viewports; the four bare words stack to one column on mobile and form four columns on desktop, with no explanatory copy anywhere; "Safe Passage" card is identical to M14.

Milestone 16 (Safe Passage rewrite, bold-badge stamp on strand intros, elegant lockup in footer): complete in code. Includes:

- **Safe Passage — third paragraph of "Before you enter" replaced.** The earlier *"this strand is younger than the others… is not theoretical"* framing on `/passage` is replaced with the author's settled three-paragraph offer in first-person voice, supplied verbatim in the M16 brief:
  1. *"There's something in here for you too. You're trying to find something — to name something that's been hard to name. That's what I can hold space for."*
  2. *"The same monotropic depth that lets me find God inside a single curious thread is the depth I bring to a problem you haven't solved yet. I think strategically. I think outside the box. I plan ahead — plus a decade of creative practice, finding ways through when the conventional path doesn't work."*
  3. *"This is consultancy, training, and strategic support for professionals, schools, services, and faith communities navigating systems that weren't built for the people inside them."*
  Implementation: edited `src/components/passage/SafePassageIntro.tsx`. Surrounding "Before you enter" block (Welcome Note section, "We are in the world, but not of it" pull-quote, the rest of the M13/M14 page structure) preserved unchanged. The earlier first-use SEND expansion (M13) lived inside the now-replaced paragraph, so it no longer appears in the body text — flagged in the component header comment.

- **Safe Passage — closing line added.** Per the M16 brief: *"This part of the work is still developing. If you want to help it grow — into training, into resources, into something more people can lean on — you can support it now through patronage, or by following the book's progress."* Placed at the page's natural close, immediately before the existing `<FlowerDivider>` and `Welcome Note` block continuation, with `patronage` linked to `/#patronage` and `following the book's progress` linked to `/#the-book`. The brief said *"after the existing patronage/Ko-fi material"* — the page itself has no Ko-fi block (Fountain/Ko-fi material lives on the homepage `#patronage` block, not on `/passage`); the implementation reading is therefore "natural close of the page, with hyperlinked support words pointing back to the homepage Fountain and Book sections." Flagged for author review.

- **Bold-badge stamp added to all three strand intros.** New asset `public/images/logo/sufipunk_logo_bold_badge_FINAL.png` (1024×1024, RGBA with real alpha, ~1.97MB) — a hand-painted mosaic gateway in deep green, gold, red, navy, and teal, with a small wall-fountain spout, set above the wordmark "SUFI PUNK · DIGITAL ZAWIYA" in a distressed serif. New shared `<ZawiyaBadge />` component co-located in `src/components/site/Ornaments.tsx`: centered flex wrapper, 200px wide, uses `next/image` with width/height/sizes attributes for proper responsive behavior, descriptive alt text. Placed `<ZawiyaBadge className="mb-6" />` directly above the `<h2>Before you enter</h2>` on:
  - `src/components/sanctuary/SanctuaryIntro.tsx`
  - `src/components/underground/SpiritualUndergroundIntro.tsx`
  - `src/components/passage/SafePassageIntro.tsx`
  Identical treatment on each — same component, same wrapper class, same vertical spacing — so the three intros share the same stamp at the same point in their reading flow.

- **Elegant lockup logo placed in footer first column.** New asset `public/images/logo/sufipunk_logo_elegant_lockup_FINAL.png` (1254×1254, RGBA with real alpha, ~1.30MB) — the same mosaic gateway with the wordmark and "DIGITAL ZAWIYA" tagline in elegant lockup form. In `src/components/site/SiteFooter.tsx`, the first column's previous plain `<h3>Sufi Punk</h3>` heading + tagline `<p>` is replaced by an `<Image>` of the lockup at `w-[200px] sm:w-[240px]` (responsive: smaller on mobile, larger from `sm:` up), `h-auto`, with `next/image` width/height/sizes. The "Visit" and "Elsewhere" link columns are preserved exactly as they were in M13/M14 (Sanctuary First, Spiritual Underground, Safe Passage, About / Sanctuary First on Substack, Ko-fi, sufipunkmusic@gmail.com).

- **No header changes this round.** Per the M16 brief — header lockup change deliberately deferred.

- **Verification:**
  - All routes return 200 after restart. Stale `.next` cache cleared twice during development to keep Turbopack honest. `bun run build` produces all 22 static routes cleanly with the new image assets.
  - Browser-tested at desktop 1280×900 and mobile 375×812. Walked: `/sanctuary` (badge above "Before you enter") → `/underground` (same badge, identical treatment) → `/passage` (same badge, plus M16 rewrite paragraphs visible below, plus closing line with hyperlinks rendering green-underlined) → footer on `/passage` (elegant lockup in first column, Visit and Elsewhere columns intact, "The roots are Islamic. The language is human. The gate is open." preserved). On mobile the footer columns stack vertically as expected; the lockup sits centered above the Visit and Elsewhere lists. All four logo placements render at the intended size on both viewports.

Up next:
- Decide PDA expansion placement (flagged in M13).
- Author review of (a) book-section move (M13), (b) three-spaces clarifying line draft (M13), (c) merged section heading/kicker (M14: "WHAT HAPPENS HERE / Across the Garden"), (d) Book CTA wording (M14: "Follow the book's progress →"), (e) M16 Safe Passage closing-line placement (flagged above — page's natural close vs. somewhere else, since brief said "after Ko-fi material" but page has no Ko-fi block), (f) M16 Safe Passage closing-line link targets (currently `/#patronage` and `/#the-book` — confirm these are the intended anchors).
- Post-dates change deferred from M16 batch per author note ("not blocking anything, can go in on its own whenever you're ready to confirm it").
- Header lockup change deferred from M16 — pending author direction on whether the elegant lockup or a different treatment should appear in the header.
- Continue migrating any further Sanctuary posts as they're written.
