# Categories

A word puzzle game where players group 16 words into four sets of four connected words. Built with Astro and client-side vanilla scripts.

## Features

- **Puzzle Solver & Generator**: Play starter puzzles or create custom boards with short links (`/c/<id>`).
- **Google Sheets Backend (Optional)**: Connect a Google Sheet via Google Apps Script (see [`public/google-apps-script/Code.gs`](public/google-apps-script/Code.gs)) to sync custom puzzles and friend leaderboards across devices.
- **Local Fallback**: Runs completely in the browser with `localStorage` if no backend is configured.

## Running Locally

From the monorepo root:

```bash
pnpm dev:games
```
