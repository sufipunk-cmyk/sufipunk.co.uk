# Content & Platform Foundations

## Overview

This feature covers project-wide technical foundations: routing, metadata, asset handling, post content structure, styling tokens, and deployment/version-control workflow.

## Goals

- Establish a maintainable base for the site.
- Keep content static-friendly and easy to version.
- Support milestone-based GitHub pushes.

## Scope / non-goals

### In scope
- App Router structure
- Global theme tokens and typography setup
- Content directory conventions
- Metadata defaults
- Git/GitHub workflow

### Non-goals
- CMS
- Database-backed admin
- Runtime authoring tools

## User flows / UX / design notes

- Not user-facing directly, but should enable consistent presentation and navigation.

## Functional requirements

- Set project metadata for `sufipunk.co.uk`.
- Organize routes for home, sanctuary, underground, passage, and about.
- Support local asset usage with Next.js image handling.
- Maintain a clear Git history with pushes after major milestones.

## Data model / schema

- Shared content types for posts and static sections.

## API contracts

- None required in phase one.

## Edge cases / failure modes

- Asset paths break.
- Metadata remains scaffold default.
- Milestone work is not committed promptly.

## Acceptance criteria

- Project is initialized and version-controlled.
- Specs exist in repo.
- Initial commit is pushed to GitHub.

## Test plan / test cases

- Run repository status checks.
- Verify remote configuration.
- Verify GitHub commit is visible.

## Implementation notes

- Initialization phase should stop after scaffold + specs + Git push, before page-building.

## Status / open questions

- Status: in-progress
- Open questions: none