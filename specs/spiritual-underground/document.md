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
- **M21 — "Before it had a name" lineage section added** between Spiritual Parallel Play and The demonstrated example. Four cards in fixed order: Too Punk to Pray? (2008) → The Mysteries: In Our Own Words (2009) → Sacred Qur'an (2009) → Hakawatiyyah — The Storyteller (2010). Reference text: `before-it-had-a-name.md` and `build-instruction-brief.md` supplied with the M21 task. Locked: facts, names, dates, quotations. Flexible: phrasing, which is set to match the existing essayistic register on this page (the hidden-treasure / monotropic-depth passages already live), not pasted from the reference document verbatim. Safeguarding (firm rule): no photograph of an identifiable child from The Mysteries (2009) is reproduced on the page — programme cover and foreword text only. The Hakawatiyyah card carries three programme images, the 3:46 trailer as an HTML5 `<video preload="metadata">` (Naz's own Ulfah Arts file, ~12 MB), and the full 24-page souvenir programme as a downloadable archive document (`ULFAH_HAKA_24PP_PROG_AW.pdf`, 12.5 MB), presented exactly as printed — full scan, unedited, advertisements and all — labelled "Read the full souvenir programme (PDF, 2010)".
- **M21 — count phrasing on the demonstrated-example block corrected** to mirror the live sister site `inspiringthesufi.com`. Body paragraph now reads *"fifty Names of Allah, surrounded by songs from around the world, each held alongside a written reflection (one entry pairs two Names under a single reflection)…"*. Portal badge italic line now reads *"Fifty Names of Allah, surrounded by songs. Written reflections."* This is the only place on sufipunk.co.uk where the count was user-facing. The same audit is recommended on `inspiringthesufi.com` itself (homepage banner, footer, meta descriptions, archive standfirst) — out of scope for this repo, flagged in the M21 spec.md entry.
- Sourcing notes for the build:
  - The Low-Demand Faith definition is reproduced verbatim from the master brief, in quotation marks, attributed to Sufi Punk. This matches the brief's "use them exactly as given / do not paraphrase" instruction and Naz's first-person voice.
  - The Spiritual Parallel Play definition is reproduced verbatim from the master brief's third-person summary wording. The instruction to "use them exactly as given" was honoured at the level of wording. **Flagged for author review:** the master brief's second definition is itself a summary, not a verbatim Naz-voice quotation. ITS_Master_Brief.md carries a longer first-person passage that begins "Spiritual Parallel Play grew out of that same curiosity..." — if a fuller, first-person version is preferred on the public page, it can be swapped in without further restructuring.
  - The "expressions of interest" invitation is bridging copy, kept short and in the site voice, written under the spec's prior authorisation ("exact wording for expressions-of-interest block can be composed around the confirmed definitions during implementation"). The contact channel is `sufipunk@icloud.com` — the only project email named in the master brief. **Flagged for author review:** confirm this is the right inbox for organisational EOIs, or specify an alternative.
- Open questions:
  - Whether to swap definition 2 to its longer ITS_Master_Brief first-person form.
  - Whether the EOI contact should remain `sufipunk@icloud.com` or move to a separate inbox.
