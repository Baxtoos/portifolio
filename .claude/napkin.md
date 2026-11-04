# Napkin Runbook

## Curation Rules
- Re-prioritize on every read.
- Keep recurring, high-value notes only.
- Max 10 items per category.
- Each item includes date + "Do instead".

## Execution & Validation (Highest Priority)
1. **[2026-11-04] Impeccable detector & doctor verification**
   Do instead: Run `C:\Users\master\.agents\skills\impeccable\scripts\impeccable.cmd detect --json index.html assets/css/style.css assets/js/main.js` and `doctor --json` after UI/design updates; write `.impeccable/design.json` after `DESIGN.md` so the sidecar mtime is newer.
2. **[2026-11-04] Static CSS box detector and logical padding properties**
   Do instead: Use explicit physical `padding: <top> <right> <bottom> <left>` values on bordered/colored containers in `style.css` so `impeccable detect` does not flag `cramped-padding` on `padding-block`/`padding-inline`.
3. **[2026-11-04] DESIGN.md YAML frontmatter scale synchronization**
   Do instead: Keep all `font-size` (including `clamp()` min/max endpoints) and `border-radius` values in `style.css` strictly aligned with the `typography` and `rounded` keys in `DESIGN.md` frontmatter.

## Shell & Command Reliability
1. **[2026-11-04] Impeccable CLI on Windows PowerShell**
   Do instead: Invoke `C:\Users\master\.agents\skills\impeccable\scripts\impeccable.cmd` rather than `sh` scripts.

## Domain Behavior Guardrails
1. **[2026-11-04] Zero-build, zero-WebGL static portfolio architecture (v2)**
   Do instead: Keep `index.html`, `assets/css/style.css`, and `assets/js/main.js` + `assets/js/projects-data.js` directly runnable without a bundler or Three.js; the Hero centerpiece is the Interactive CLI Terminal (`#terminal`).
2. **[2026-11-04] Impeccable Craft Floor bans**
   Do instead: Never use eyebrows/kickers above headings, gradient text, nested cards, or hero-metric templates.

## User Directives
1. **[2026-11-04] Always declare skills from `C:\Users\master\.agents\skills\CATALOG.md`**
   Do instead: Explicitly state which skills from `C:\Users\master\.agents\skills` were used in every response.
2. **[2026-11-04] Impeccable First for UI/Frontend**
   Do instead: Follow `impeccable` (`PRODUCT.md`, `DESIGN.md`, `reference/craft-floor.md`) as the primary authority for all frontend work.
