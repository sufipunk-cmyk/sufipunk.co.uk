# Spiritual Underground

## Overview

`/underground` introduces low-demand faith and Spiritual Parallel Play using Naz's confirmed wording and links outward to inspiringthesufi.com and Substack.

## Goals

- Present the two exact definitions without paraphrase.
- Position Inspiring the Sufi as the demonstrated example.
- Offer a clear bridge to the archive and to expressions of interest.

## Scope / non-goals

### In scope
- Definition-led overview page
- Link to inspiringthesufi.com
- Link to Substack
- Expressions-of-interest invitation

### Non-goals
- Building inspiringthesufi.com within this repo
- Submission systems or partner portals

## User flows / UX / design notes

- Visitor reads the definitions, understands the concept, and can follow the invitation outward.
- The page should feel like a threshold, not a hard sell.

## Functional requirements

- Use the exact confirmed definitions from the master brief.
- Include link text: “This is where it started. Come and see.”
- Include expressions-of-interest invitation and Substack link.

## Data model / schema

- Static content only.

## API contracts

- None.

## Edge cases / failure modes

- Copy drift from the source brief.
- Confusing the page with a generic “about the concept” explainer.

## Acceptance criteria

- Exact definitions are present.
- inspiringthesufi.com is linked.
- Substack is linked.

## Test plan / test cases

- Verify wording against spec.
- Verify external links.

## Implementation notes

- Treat exact-copy sections as constants with minimal editing risk.

## Status / open questions

- Status: built (M10) — full page replaces the StrandStub placeholder.
- Sourcing notes for the build:
  - The Low-Demand Faith definition is reproduced verbatim from the master brief, in quotation marks, attributed to Sufi Punk. This matches the brief's "use them exactly as given / do not paraphrase" instruction and Naz's first-person voice.
  - The Spiritual Parallel Play definition is reproduced verbatim from the master brief's third-person summary wording. The instruction to "use them exactly as given" was honoured at the level of wording. **Flagged for author review:** the master brief's second definition is itself a summary, not a verbatim Naz-voice quotation. ITS_Master_Brief.md carries a longer first-person passage that begins "Spiritual Parallel Play grew out of that same curiosity..." — if a fuller, first-person version is preferred on the public page, it can be swapped in without further restructuring.
  - The "expressions of interest" invitation is bridging copy, kept short and in the site voice, written under the spec's prior authorisation ("exact wording for expressions-of-interest block can be composed around the confirmed definitions during implementation"). The contact channel is `sufipunk@icloud.com` — the only project email named in the master brief. **Flagged for author review:** confirm this is the right inbox for organisational EOIs, or specify an alternative.
- Open questions:
  - Whether to swap definition 2 to its longer ITS_Master_Brief first-person form.
  - Whether the EOI contact should remain `sufipunk@icloud.com` or move to a separate inbox.
