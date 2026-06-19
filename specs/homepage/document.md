# Homepage / Digital Zawiya

## Overview

The homepage is the digital zawiya itself. Per the Sanctuary First print booklet, the zawiya is a mountain garden — not a building. The homepage introduces the world, centers the book, presents the illustrated map (the conceptual key — including the historical grounding for the word *zawiya* and the named places along the path), introduces the strands as the activities that happen at those places, makes the patronage ask, and provides the email signup path.

## Goals

- Deliver the homepage sections in the order: Welcome → Book → Map → Across the Garden → Patronage → Email Signup.
- Ensure the historical grounding for *zawiya* (a place where Allah was remembered) lands before — or alongside — the reader's first conceptual encounter with the word.
- Use garden / landscape vocabulary throughout (gate, path, terrace, lookout, bridge, archway, fountain) rather than rooms / doors.
- Keep the relationship between places (terrain along the path) and strands (activities) explicit and consistent.
- Make the page feel immersive rather than promotional.
- Support mobile and desktop reading without clutter.

## Scope / non-goals

### In scope
- Welcome section
- Book feature section
- Map section, including the named places along the path and zawiya grounding
- Across the Garden section, presenting strands as residents of those places
- Patronage section
- Email signup section

### Non-goals
- Extra landing-page sections
- Carousels, overlays, popups, or social embeds
- Any copy that hard-codes a count of strands or places (the structure must allow growth)
- Indoor / building vocabulary ("rooms", "doors") for site geography

## User flows / UX / design notes

- Visitor lands on homepage and immediately understands the site is a place of sanctuary.
- Visitor moves downward naturally through the sections.
- The reader meets the map (with zawiya grounding and the named places) before "Across the Garden", so the word and the terrain both have meaning by the time the strands are introduced as residents.
- Visitor can click into any strand, follow it from its place in the map, join Substack, or support via Ko-fi.
- Tone should remain quiet and spacious, with restrained motion.

## Functional requirements

- Render all confirmed homepage copy from the brief and booklet.
- Pull places and strands from a shared data module (`src/content/site/zawiya.ts`) so both sections stay in sync and the count is never hard-coded.
- Link from each place with a resident strand to that strand's page (`/sanctuary`, `/underground`, `/passage`).
- Link book CTA and signup CTA to the Substack subscribe URL.
- Link patronage CTAs to Ko-fi.
- Display the map asset in the map section.

## Data model / schema

- Static page data plus the shared zawiya data module.
- `Place` records carry a `slug`, `name`, `terrain` label, `resident` strand slug (or `null` for the gate), `echo` (a short italic line in the booklet's voice), and `description`.
- `Strand` records carry a `slug`, `name`, `href`, `kicker`, `placeSlug`, `placeName`, and `description`.
- The named places, in their canonical form (matching the overview map asset): **The Golden Door** (threshold), **The Lantern Library** (Sanctuary First), **The Devotional Corner** (Spiritual Underground), **The Gathering Place** (Safe Passage). The print-booklet imagery (lookout terrace + telescope, wisteria archways + fountain, stone bridge + signpost) is treated as a future zoomed-in layer; for now it lives inside each place's description as flavour, not as a name.

## API contracts

- None required for phase one homepage.

## Edge cases / failure modes

- Missing asset should degrade to a clearly marked placeholder until asset is added.
- Long copy must remain readable on narrow screens.
- Adding a new strand or place must not require code changes outside the shared data module.

## Acceptance criteria

- All sections appear in the correct order.
- The map section names every place along the path and points each place with a resident strand to that strand.
- The Across the Garden section presents each strand alongside the name of its place.
- All external links resolve correctly.
- No copy on the homepage hard-codes a count of strands or places.
- No spatial copy uses indoor vocabulary ("rooms", "doors") for site geography.
- Homepage works cleanly on mobile.

## Test plan / test cases

- Load homepage on mobile and desktop widths.
- Confirm section order: Welcome, Book, Map, Across the Garden, Patronage, Email signup.
- Confirm each place card shows the place's terrain, name, echo, description, and (where applicable) a link to its resident strand.
- Confirm each strand row in Across the Garden shows the place it lives at.
- Click each strand link from both the map and the strands section.
- Click Ko-fi and Substack links.
- Confirm map image placeholder renders pending the real asset.

## Implementation notes

- Use reusable section wrappers and typography tokens.
- Avoid generic card-grid treatment for strands; places use a quiet two-column hairline grid.
- The section kicker for Across the Garden is currently empty pending the author's wording. Previous kickers ("THE THREE STRANDS") referenced a strand count and older "doors" framing, both retired.

## Status / open questions

- Status: in progress (milestone 7 — strand-resident place names reverted to the overview-map asset's names: The Lantern Library, The Devotional Corner, The Gathering Place; The Golden Door retained. Booklet detail kept as flavour inside descriptions; "Across the Garden" section, four-line welcome refrain, and "the gate is open" all retained from milestone 6).
- Open questions:
  - Final wording for the Across the Garden kicker (pending author).
  - Final illustrated map asset (`sanctuary_map.png` / `Final_map.png`) still pending. The booklet's full-spread imagery (mountain valley, hanging-chair terrace, wisteria archways, stone bridge with signpost) is a strong candidate brief for that asset.