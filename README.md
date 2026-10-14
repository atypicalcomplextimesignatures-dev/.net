# atypicalcomplextimesignatures.net

Astro monorepo powered by [pnpm workspaces](https://pnpm.io/workspaces).

## Workspace Structure

```
.
├── apps/
│   ├── landing/    # Main portfolio & landing Astro site
│   └── games/      # Word puzzle game (Categories) Astro app
└── packages/
    └── ui/         # Shared Astro components and design styles (@repo/ui)
```

## Getting Started

Install dependencies:

```bash
pnpm install
```

### Development

```bash
pnpm dev:landing    # Start landing dev server
pnpm dev:games      # Start games dev server
```

### Build

```bash
pnpm build          # Build all apps (runs pnpm -r build)
```
