# atypicalcomplextimesignatures.net

Astro monorepo powered by [pnpm workspaces](https://pnpm.io/workspaces).

## Workspace Structure

```
.
├── apps/
│   ├── home/          # Main portfolio & home Astro site (atypicalcomplextimesignatures.net)
│   ├── games/         # Word puzzle & guessing games: Categories & Charess (games.svenja.dev)
│   ├── artwork/       # Visual archive & digital illustrations (artwork.svenja.dev)
│   ├── literature/    # Manuscripts, prose, and literary essays (literature.svenja.dev)
│   ├── projects/      # Software systems, audio experiments, and tools (projects.svenja.dev)
│   └── magazine/      # Magazine cover editor & preview tool (magazine.svenja.dev)
└── packages/
    └── ui/            # Shared Astro components and design styles (@repo/ui)
```

## Getting Started

Install dependencies:

```bash
pnpm install
```

### Development

```bash
pnpm dev               # Launch all workspace apps in parallel
pnpm dev:home          # Start home dev server
pnpm dev:games         # Start games dev server
pnpm dev:artwork       # Start artwork dev server
pnpm dev:literature    # Start literature dev server
pnpm dev:projects      # Start projects dev server
pnpm dev:magazine      # Start magazine dev server
```

### Build

```bash
pnpm build             # Build all apps (runs pnpm -r build)
```
