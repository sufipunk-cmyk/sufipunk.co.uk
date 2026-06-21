# Safe Passage

## Overview

`/passage` is an early-form page that turns the work outward toward supporters, professionals, families, and communities walking alongside neurodivergent people.

## Goals

- Present Version A of the confirmed page text faithfully.
- Hold the page in a formative, non-commercial mode.
- Provide a simple contact path.

## Scope / non-goals

### In scope
- Confirmed page text
- Contact email link

### Non-goals
- Institutional resource library
- Consultancy packages
- Training sales language

## User flows / UX / design notes

- Visitor reads the threshold text and understands the page is forming but real.
- Visitor can use the simple contact link.

## Functional requirements

- Render the confirmed Version A text — with one author override applied (see "Author overrides" below).
- Include `mailto:sufipunk@icloud.com`.

## Author overrides (post-brief, applied)

These are deliberate tweaks the brief author has confirmed since the master brief was written. Honour them when building the page.

1. **Remove "families" from the professional welcome list.**
   The Version A welcome paragraph reads:
   > "If you are a professional, a faith leader, a family member, or part of a wider community trying to walk alongside someone — you are welcome here too..."
   The published page must instead read:
   > "If you are a professional, a faith leader, or part of a wider community trying to walk alongside someone — you are welcome here too..."
   Reasoning (from author): Safe Passage is aimed at professionals and institutions, not families. Including "a family member" disrupts the flow and miscasts the audience.

## Data model / schema

- Static content only.

## API contracts

- None.

## Edge cases / failure modes

- Accidentally using the more institutional Version B.

## Acceptance criteria

- The page uses the confirmed Version A text.
- Contact link works.

## Test plan / test cases

- Compare displayed copy against spec.
- Test the mailto link.

## Implementation notes

- Keep the page restrained and spacious.

## Status / open questions

- Status: built (M10) — full page replaces the StrandStub placeholder. Renders the Version A "Before you enter" + "Welcome Note" texts verbatim from the master brief, with the documented author override applied (the words "a family member" removed from the welcome list). Closes with a quiet `mailto:sufipunk@icloud.com` line and a "From the Gathering Place" flower divider that ties the page to its place on the overview map.
- Version B (the more institutionally-pitched alternative) remains held in reserve per the brief and is not built here.
- Open questions: none.
