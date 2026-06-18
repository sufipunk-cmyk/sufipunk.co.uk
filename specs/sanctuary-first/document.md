# Sanctuary First

## Overview

`/sanctuary` presents the witness writing collection with intro text, filterable post index, and distraction-free reading views for the 12 posts.

## Goals

- Make the 12 posts readable and navigable.
- Support filtering by experience, theme, tradition, and arc.
- Preserve contemplative tone while maintaining practical discoverability.

## Scope / non-goals

### In scope
- Intro text at top of page
- Post index
- Filter UI
- Individual post pages with previous/next navigation

### Non-goals
- CMS
- Comments/community features
- Additional posting workflows

## User flows / UX / design notes

- Visitor reaches `/sanctuary`, reads the intro, scans filters, opens a post.
- Visitor can move between posts with previous/next links.
- Filters should be legible on mobile.

## Functional requirements

- Read posts from local markdown files in `/posts` or equivalent content folder.
- Frontmatter includes title, arc, and tags for experience/theme/tradition.
- Filter controls update the visible index.

## Data model / schema

- Markdown frontmatter:
  - `title`
  - `slug`
  - `arc`
  - `experienceTags[]`
  - `themeTags[]`
  - `traditionTags[]`
  - `date`

## API contracts

- None required; use filesystem content loading.

## Edge cases / failure modes

- Post missing required tags.
- Empty filter results.
- Broken prev/next navigation at boundaries.

## Acceptance criteria

- 12 posts appear and are readable.
- Filters work for all listed taxonomies.
- Previous/next navigation works.

## Test plan / test cases

- Open sanctuary page.
- Apply each filter group.
- Visit first, middle, and last post.

## Implementation notes

- Build readable post pages first, then layer filters.

## Status / open questions

- Status: planned
- Open questions: source location for existing 12 posts to be confirmed during implementation
