# Homepage / Digital Zawiya

## Overview

The homepage is the digital zawiya itself. It introduces the world, centers the book, presents the three strands, shows the illustrated map, makes the patronage ask, and provides the email signup path.

## Goals

- Deliver the six homepage sections in the exact brief order.
- Make the page feel immersive rather than promotional.
- Support mobile and desktop reading without clutter.

## Scope / non-goals

### In scope
- Welcome section
- Book feature section
- Inside the Zawiya strand links
- Map section
- Patronage section
- Email signup section

### Non-goals
- Extra landing-page sections
- Carousels, overlays, popups, or social embeds

## User flows / UX / design notes

- Visitor lands on homepage and immediately understands the site is a place of sanctuary.
- Visitor can move downward naturally through the six sections.
- Visitor can click into one of the three strands, join Substack, or support via Ko-fi.
- Tone should remain quiet and spacious, with restrained motion.

## Functional requirements

- Render all confirmed homepage copy from the brief.
- Link to `/sanctuary`, `/underground`, `/passage`.
- Link book CTA and signup CTA to Substack subscribe URL.
- Link patronage CTAs to Ko-fi.
- Display the map asset in the map section.

## Data model / schema

- Static page data only.
- Section content may live in local constants or content modules.

## API contracts

- None required for phase one homepage.

## Edge cases / failure modes

- Missing asset should degrade to a clearly marked placeholder until asset is added.
- Long copy must remain readable on narrow screens.

## Acceptance criteria

- All six sections appear in the correct order.
- All external links resolve correctly.
- Homepage works cleanly on mobile.

## Test plan / test cases

- Load homepage on mobile and desktop widths.
- Click each strand link.
- Click Ko-fi and Substack links.
- Confirm map image renders.

## Implementation notes

- Use reusable section wrappers and typography tokens.
- Avoid generic card-grid treatment.

## Status / open questions

- Status: planned
- Open questions: none for initialization phase
