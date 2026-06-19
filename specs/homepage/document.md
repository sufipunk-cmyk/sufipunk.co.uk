# Homepage / Digital Zawiya

## Overview

The homepage is the digital zawiya itself. It introduces the world, centers the book, presents the illustrated map (the conceptual key — including historical grounding for the word *zawiya* and the named rooms), introduces the strands as the activities living inside those rooms, makes the patronage ask, and provides the email signup path.

## Goals

- Deliver the homepage sections in the order: Welcome → Book → Map → Inside the Zawiya → Patronage → Email Signup.
- Ensure the historical grounding for *zawiya* (a place where Allah was remembered) lands before — or alongside — the reader's first conceptual encounter with the word.
- Keep the relationship between rooms (places) and strands (activities) explicit and consistent.
- Make the page feel immersive rather than promotional.
- Support mobile and desktop reading without clutter.

## Scope / non-goals

### In scope
- Welcome section
- Book feature section
- Map section, including named rooms and zawiya grounding
- Inside the Zawiya section, presenting strands as residents of rooms
- Patronage section
- Email signup section

### Non-goals
- Extra landing-page sections
- Carousels, overlays, popups, or social embeds
- Any copy that hard-codes a count of strands or rooms (the structure must allow growth)

## User flows / UX / design notes

- Visitor lands on homepage and immediately understands the site is a place of sanctuary.
- Visitor moves downward naturally through the sections.
- The reader meets the map (with zawiya grounding) before "Inside the Zawiya" so the word has structural meaning by the time it returns as a section heading.
- Visitor can click into any strand, follow it from its room in the map, join Substack, or support via Ko-fi.
- Tone should remain quiet and spacious, with restrained motion.

## Functional requirements

- Render all confirmed homepage copy from the brief.
- Pull rooms and strands from a shared data module (`src/content/site/zawiya.ts`) so both sections stay in sync and the count is never hard-coded.
- Link from each room with a resident strand to that strand's page (`/sanctuary`, `/underground`, `/passage`).
- Link book CTA and signup CTA to the Substack subscribe URL.
- Link patronage CTAs to Ko-fi.
- Display the map asset in the map section.

## Data model / schema

- Static page data plus the shared zawiya data module.
- `Room` records carry a `slug`, `name`, `role`, `resident` strand slug (or `null` for the threshold), and `description`.
- `Strand` records carry a `slug`, `name`, `href`, `kicker`, `roomSlug`, `roomName`, and `description`.

## API contracts

- None required for phase one homepage.

## Edge cases / failure modes

- Missing asset should degrade to a clearly marked placeholder until asset is added.
- Long copy must remain readable on narrow screens.
- Adding a new strand or room must not require code changes outside the shared data module.

## Acceptance criteria

- All sections appear in the correct order.
- The map section names every room and points each room with a resident strand to that strand.
- The Inside the Zawiya section presents each strand alongside the name of its room.
- All external links resolve correctly.
- No copy on the homepage hard-codes a count of strands or rooms.
- Homepage works cleanly on mobile.

## Test plan / test cases

- Load homepage on mobile and desktop widths.
- Confirm section order: Welcome, Book, Map, Inside the Zawiya, Patronage, Email signup.
- Confirm each room card shows the room's role, name, description, and (where applicable) a link to its resident strand.
- Confirm each strand row in Inside the Zawiya shows the room it lives in.
- Click each strand link from both the map and the strands section.
- Click Ko-fi and Substack links.
- Confirm map image placeholder renders pending the real asset.

## Implementation notes

- Use reusable section wrappers and typography tokens.
- Avoid generic card-grid treatment for strands; rooms use a quiet two-column hairline grid.
- The section kicker for Inside the Zawiya is currently empty pending the author's wording. The previous kicker referenced a strand count and older "doors" framing, both of which were retired.

## Status / open questions

- Status: in progress (milestone 5 — map / strands relationship reworked, room data introduced, copy and section order updated).
- Open questions:
  - Final wording for the Inside the Zawiya kicker (pending author).
  - Final illustrated map asset (`sanctuary_map.png` / `Final_map.png`) still pending.