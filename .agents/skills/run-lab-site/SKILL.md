---
name: run-lab-site
description: Build, serve, lint, test, and visually verify the ARIA Research Lab al-folio Jekyll website. Use when asked to run or preview the lab site, diagnose a Jekyll or Docker build, validate lab-site content or configuration changes, check browser rendering, or select the relevant al-folio integration and visual tests.
---

# Run Lab Site

Read `AGENTS.md` before any change. It is the authoritative routing guide for this al-folio v1 repository; use `docs/BOUNDARIES.md` when a requested behavior may belong to a plugin gem rather than this starter/site checkout.

## Preview with Docker

Run from the repository root:

```bash
docker compose up -d --build
for attempt in $(seq 1 60); do
  curl -fsS http://127.0.0.1:8080/ >/dev/null && break
  sleep 1
done
curl -fsS http://127.0.0.1:8080/ >/dev/null
```

The current `_config.yml` has a blank `baseurl`, so preview this personalized checkout at `/`. If `_config.yml` changes, derive the preview URL from its actual `baseurl` rather than assuming one.

Inspect logs and stop the service when finished:

```bash
docker compose logs --tail=100
docker compose down
```

The container writes the built site to `/tmp/_site`; do not expect a host `_site` directory to prove that the current container build succeeded.

## Run proportional checks

For content or configuration changes, start with:

```bash
npm ci
npm run lint:prettier
npm run lint:style-contract
bundle exec jekyll build
```

Run only integration scripts related to the changed behavior. Use `npm run test:visual` when layout, styling, navigation, responsive behavior, or rendered components changed. The full validated command set is in `AGENTS.md`.

Keep `Gemfile` and `_config.yml` plugin lists synchronized. Never add starter-local `_layouts/`, `_includes/`, `_sass/`, `_scripts/`, `assets/tailwind/`, `tailwind.config.js`, or `assets/webfonts/` paths without first rerouting the change according to `AGENTS.md` and `docs/BOUNDARIES.md`.

## Respect academic-data ownership

The hub sync owns generated recruiting data and can add missing eligible lab bibliography entries. Existing `_bibliography/papers.bib` entries are lab-owned for fields such as `preview`, `pdf`, awards, and display flags and must remain verbatim during sync. For cross-repository facts, use the parent hub's `$maintain-academic-hub` or `$run-academic-sync` skill.

Finish by reporting the URL checked, build/lint/test results, relevant log errors, and whether the issue belongs in this repository or an owning al-folio plugin.
