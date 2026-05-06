# Repository Layout

> Map of where things live in the `itsweber-tools` monorepo. Read this before
> moving files or adding new top-level entries.

## Top level

```
.
├── apps/                  pnpm-workspace apps
│   └── web/               React 19 + Vite SPA, the user-facing tool UI
├── packages/              pnpm-workspace shared packages
│   ├── toolkit/           tool registry, tool engine, 163 tool definitions
│   └── ui/                shared design tokens + UI primitives
├── docker/                Dockerfile, nginx config, container assets
├── docs/                  contributor + user documentation
│   ├── wiki/              public wiki, mirrored to GitHub Wiki
│   │   └── de/            German translations
│   ├── screenshots/       README + product-page screenshots
│   ├── STATUS.md          phase tracker, current focus
│   ├── TOOL_CATALOG.md    canonical tool list with categories
│   ├── PIPES.md           pipe system spec
│   ├── RELEASE_CHECKLIST.md  pre-release steps
│   ├── CMS_INTEGRATION.md    embedding into the marketing site
│   └── REPOSITORY_LAYOUT.md  this file
├── public/                static assets served at site root (favicons, brand)
├── scripts/
│   └── prepare-release.mjs   release validator (FORBIDDEN/ALLOWED lists)
├── .github/               workflows + issue/PR templates
├── README.md / README.de.md  bilingual project README
├── CONTRIBUTING.md        contribution rules + tool-author guide
├── CHANGELOG.md           release notes (Keep a Changelog)
├── SECURITY.md            vulnerability reporting
└── LICENSE
```

## Adding a new tool

One file: `packages/toolkit/src/tools/<id>.ts` exporting `defineTool({...})`
as default. The registry auto-discovers it; no extra registration step.
Schema is documented in [CONTRIBUTING.md](../CONTRIBUTING.md) and the tool
engine lives in `packages/toolkit/src/engine/`.

## Never tracked (privacy block)

These paths and basenames are gitignored on every level and additionally
hard-failed by `scripts/prepare-release.mjs`:

- **Basenames:** `CLAUDE.md`, `AGENTS.md`, `.env`, `skills-lock.json`
- **Directories:** `docs/internal/`, `_archive/`, `previews/`, `.claude/`,
  `.agents/`, `.continue/`, `skills/`, `memory/`, build artifacts
- **Globs:** `.env.*`, `*.code-workspace`, `*.jsonl`

`CLAUDE.md` files are AI-assistant briefings and stay outside the public
repository. Sub-agent pointers (`apps/web/CLAUDE.md`,
`packages/toolkit/CLAUDE.md`, `packages/ui/CLAUDE.md`) are local-only
files that point back to the root `CLAUDE.md`.

## Release validation

```bash
pnpm prepare-release:check   # dry-run, lists every tracked file
pnpm prepare-release         # full validation, exits 1 on any FORBIDDEN
```

The validator is the last gate before publishing a release tag.
