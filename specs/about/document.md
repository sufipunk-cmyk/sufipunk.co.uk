# About

## Overview

`/about` introduces Sufi Punk in the correct voice: lineage statement first, with a short orienting bio line rather than a conventional biography.

## Goals

- Keep the page soul-led rather than résumé-led.
- Include the confirmed orienting bio line and core about copy.
- Link to Ko-fi and Substack.

## Scope / non-goals

### In scope
- About copy
- Orienting bio line
- External links

### Non-goals
- Long-form CV or portfolio biography

## User flows / UX / design notes

- Visitor reaches About and quickly understands the practice and its lived grounding.

## Functional requirements

- Include the confirmed orienting bio line exactly.
- Include the additional confirmed about paragraph from the master brief.
- Include Ko-fi and Substack links.

## Data model / schema

- Static content only.

## API contracts

- None.

## Edge cases / failure modes

- Over-expanding into a conventional personal bio.

## Acceptance criteria

- Confirmed copy is present.
- External links work.

## Test plan / test cases

- Verify exact copy.
- Verify Ko-fi and Substack links.

## Implementation notes

- Keep the page concise and aligned with the brief’s tone.

## Status / open questions

- Status: built (M11) — full page replaces the StrandStub.
- Sourcing notes for the build:
  - Header soul-line "A soul that prepares the ground. The holding. The place you are cherished." — verbatim from the master brief.
  - Orienting bio quotation — verbatim from the master brief, with a short attribution note honouring the brief's instruction that "systems-generated trauma" reads as a reference to Clements & Aiello (University of Leeds / Cerebra), not as the author's coinage.
  - Personal-voice body — verbatim from the Sanctuary First print booklet's "About Me" card text, supplied 19 June 2026.
  - Four-item intersection strip ("Low-demand parenting / Neurodivergence and refusal / Faith without coercion / Culture, art, and sovereignty") — verbatim from the booklet.
  - Closing line "Devotion. Refusal. Sanctuary. Return. / This is how I make meaning. This is how I stay connected." — verbatim from the booklet.
  - Pull-quote "Writing here is simply the active record of my devotion." — author-supplied, placed near the close of the personal-voice body so it reads as a quiet seal on the section, just before the four-item strip.
  - Mosaic-doorway photograph supplied 19 June 2026, with the author's caption preserved verbatim. Stored at `/images/about/mosaic-doorway.jpg`.
- Place / map note: this page does not carry a place-named flower divider. About sits slightly behind the whole garden rather than at one of the four named places (The Golden Door, The Lantern Library, The Devotional Corner, The Gathering Place), so a plain `❁` divider closes the section and the return link goes back to the home page rather than to a specific place. This is consistent with the standing rule that the map's named places remain canonical and that no new place-vocabulary is invented.
- Open questions: none.
