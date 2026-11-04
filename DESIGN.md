---
name: Sérgio Bastos Portfolio
description: Architectural Engineering Monograph — Full-Stack & Frontend Portfolio
colors:
  vermilion-copper: "#E85D2A"
  vermilion-hover: "#F27244"
  vermilion-ink-light: "#C84312"
  carbon-ink: "#0C0B0A"
  dark-stone: "#13110F"
  graphite-surface: "#1A1714"
  interactive-stone: "#24201C"
  parchment-white: "#F4F0EA"
  warm-stone: "#C4BBA9"
  warm-taupe: "#9A9080"
  hairline-dark: "#26221E"
  border-strong-dark: "#3A332C"
  archival-paper: "#F6F3EC"
  paper-secondary: "#ECE7DC"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, -apple-system, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  display-min:
    fontFamily: "Bricolage Grotesque, system-ui, -apple-system, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, -apple-system, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, -apple-system, sans-serif"
    fontSize: "1.85rem"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.02em"
  subheading:
    fontFamily: "Bricolage Grotesque, system-ui, -apple-system, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
    lineHeight: 1.24
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Manrope, system-ui, -apple-system, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.5
  body:
    fontFamily: "Manrope, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  small:
    fontFamily: "Manrope, system-ui, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.5
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  xs: "4px"
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "14px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  xxl: "80px"
components:
  button-primary:
    backgroundColor: "{colors.vermilion-copper}"
    textColor: "{colors.carbon-ink}"
    rounded: "{rounded.md}"
    padding: "11px 20px"
  button-primary-hover:
    backgroundColor: "{colors.vermilion-hover}"
  button-secondary:
    backgroundColor: "{colors.graphite-surface}"
    textColor: "{colors.parchment-white}"
    rounded: "{rounded.md}"
    padding: "11px 20px"
  project-card:
    backgroundColor: "{colors.dark-stone}"
    textColor: "{colors.parchment-white}"
    rounded: "{rounded.lg}"
    padding: "22px"
---

# Design System: Sérgio Bastos Portfolio

## Overview

**Creative North Star: "The Architectural Engineering Monograph"**

This design system rejects generic cyber-neon clichés (cyan/violet gradients, floating orbs, glassmorphic HUD brackets, and nested icon cards) in favor of an editorial engineering monograph inspired by precision industrial manuals and technical publishing. Every element exists to present production software systems, architectural decisions, and code craft with immediacy and zero visual noise.

**Key Characteristics:**
- Warm carbon ink (`#0C0B0A`) in dark mode and archival drafting paper (`#F6F3EC`) in light mode.
- Single high-contrast signal vermilion-copper accent (`#E85D2A` dark / `#C84312` light).
- Exposed `1px` structural hairline rules (`#26221E` / `#D8D0C3`) and ledger rows instead of nested cards.
- Expressive optical grotesque display typography (`Bricolage Grotesque`) paired with humanist-geometric prose (`Manrope`) and tabular monospace (`JetBrains Mono`).

## Colors

Warm, tactile surfaces paired with a single industrial signal accent that guides eye movement toward primary actions and verified production metrics.

### Primary
- **Signal Vermilion Copper** (`#E85D2A` in dark mode, `#C84312` in light mode): Used strictly for primary CTAs, active geometry toggles, focus rings, and key role indicators.

### Neutral
- **Warm Carbon Ink** (`#0C0B0A`): Primary background canvas in dark mode.
- **Dark Stone** (`#13110F`): Secondary editorial band and card resting surface.
- **Graphite Surface** (`#1A1714`): Elevated containers, modal dialogs, and secondary buttons.
- **Parchment White** (`#F4F0EA`): Primary foreground text in dark mode (16.8:1 contrast).
- **Warm Stone** (`#C4BBA9`): Secondary narrative prose (10.1:1 contrast).
- **Warm Taupe** (`#9A9080`): Metadata, captions, and stack tokens (≥ 5.2:1 contrast, WCAG AA).
- **Archival Paper** (`#F6F3EC`) & **Paper Secondary** (`#ECE7DC`): Primary and secondary light-mode surfaces.

### Named Rules
**The Single Signal Rule.** Signal Vermilion Copper is the only chromatic accent on the page; never combine it with secondary neon hues or multi-stop gradients.

## Typography

**Display Font:** `Bricolage Grotesque` (with `system-ui, -apple-system, sans-serif` fallback)
**Body Font:** `Manrope` (with `system-ui, -apple-system, sans-serif` fallback)
**Label/Mono Font:** `JetBrains Mono` (with `monospace` fallback)

**Character:** Authoritative, optical display lettering for titles contrasted against clean, high-legibility body prose and crisp tabular monospace for actual code and measurements.

### Hierarchy
- **Display** (`800`, `clamp(2.5rem, 4.8vw + 1rem, 4.5rem)`, `line-height: 1.02`, `letter-spacing: -0.03em`): Hero name and primary identity.
- **Headline** (`700`, `clamp(1.85rem, 3vw + 0.5rem, 2.75rem)`, `line-height: 1.1`, `letter-spacing: -0.025em`): Section headings (`h2`).
- **Title** (`700`, `clamp(1.35rem, 2vw + 0.4rem, 1.85rem)`, `line-height: 1.18`, `letter-spacing: -0.02em`): Flagship case study titles (`h3`).
- **Subheading** (`700`, `1.35rem`, `line-height: 1.24`, `letter-spacing: -0.015em`): Archive card titles and domain titles.
- **Lead** (`600`, `1.25rem`, `line-height: 1.5`): Hero statement and about essay lead.
- **Body** (`400–600`, `1rem`, `line-height: 1.65`, measure `65–68ch`): Case study narratives and biographical essay.
- **Small** (`500–600`, `0.875rem`, `line-height: 1.5`): Buttons, navigation links, and secondary descriptions.
- **Label** (`500–600`, `0.75rem`, `tabular-nums`): CLI terminal I/O, numerical metrics, and stack tokens.

### Named Rules
**The Unassisted Heading Rule.** Headings (`h1`, `h2`, `h3`) never carry an eyebrow or kicker label above them; the heading's scale and wording carry the hierarchy directly.

## Layout

Centered container (`max-width: 1240px`, horizontal padding `24px` mobile / `40px` desktop). Sections use asymmetric 12-column CSS grids (`7fr 5fr` in the Hero and section headers; `6fr 6fr` in Flagship Case Studies; `5fr 7fr` in About and CLI Terminal; `4fr 8fr` in the Capability Ledger) separated by `1px` structural hairlines and `80px` vertical rhythm.

## Elevation & Depth

Surfaces are flat and architectural at rest, separated by tonal layering (`#0C0B0A` → `#13110F` → `#1A1714`) and `1px solid` structural hairlines (`#26221E`). Shadows are reserved exclusively for floating overlay layers (the project detail modal and toast notifications).

### Shadow Vocabulary
- **Overlay Elevation** (`box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.65)`): Used only on `.modal-container` and `.toast-notice`.

### Named Rules
**The Single Elevation Declaration Rule.** Page containers and project cards declare their boundary with a `1px` border and never combine it with a diffuse drop shadow.

## Shapes

Crisp, technical corner geometry: `4px` (`--radius-xs`) for focus rings and scrollbars; `6px` (`--radius-sm`) for chips, tags, and small icon buttons; `8px` (`--radius-md`) for buttons and filter controls; `12px` (`--radius-lg`) for project archive cards; `14px` (`--radius-xl`) for the 3D sculpture stage, CLI terminal window, and modal container. All icons are inline SVGs drawn with a uniform `1.75px` stroke width.

## Components

### Buttons
- **Shape:** Gently rounded technical rectangle (`8px` radius, `min-height: 44px`).
- **Primary:** Signal Vermilion Copper (`#E85D2A`) fill with Warm Carbon Ink (`#0C0B0A`) label and `11px 20px` padding.
- **Hover / Focus:** Shifts to `#F27244` on hover with a `2px` icon translation; `2px solid #E85D2A` outline with `3px` offset on `:focus-visible`.
- **Secondary:** Graphite Surface (`#1A1714`) fill with `#3A332C` `1px` border and Parchment White (`#F4F0EA`) text.

### Chips
- **Style:** Monospace technical tags (`0.75rem`) with `#0C0B0A` or `#1A1714` background and `1px solid #26221E` border (`6px` radius).
- **State:** Interactive terminal chips highlight their border in `#E85D2A` on hover; filter buttons invert to `--text-primary` fill with `--bg-primary` text when active.

### Cards / Containers
- **Corner Style:** `12px` radius on project cards; `14px` on stage/terminal panels.
- **Background:** Dark Stone (`#13110F`), shifting to Graphite Surface (`#1A1714`) on hover.
- **Shadow Strategy:** Flat at rest (`box-shadow: none`); `-3px` vertical lift on hover.
- **Border:** `1px solid #26221E`, strengthening to `#3A332C` on hover.
- **Internal Padding:** `22px` on `.project-body`; `40px 32px` on `.contact-panel`.

### Inputs / Fields
- **Style:** Seamless CLI terminal input inside `.terminal-input-row` with `1px solid #26221E` top divider and `JetBrains Mono` `0.875rem` text.
- **Focus:** Vermilion caret (`caret-color: #E85D2A`) and high-contrast prompt (`baxtoos@dev:~$`).

### Navigation
- **Style:** Sticky top bar (`min-height: 72px`) with `backdrop-filter: blur(12px)`, `1px solid #26221E` bottom border, `Bricolage Grotesque` brand wordmark, nav links with subtle active tint (`rgba(232, 93, 42, 0.14)`), theme toggle, and full-width mobile drawer below `860px`.

## Do's and Don'ts

### Do:
- **Do** lead the portfolio with verifiable production case studies (`DIEX`, `AppFisio`, `MT Sublimação`) immediately after the Hero.
- **Do** maintain WCAG AA contrast (`≥ 4.5:1` for prose and metadata) in both `dark` and `light` themes.
- **Do** pause WebGL rendering when off-screen and disable decorative motion when `prefers-reduced-motion: reduce` is active.

### Don't:
- **Don't** place eyebrows or kickers above `h1`, `h2`, or `h3` headings.
- **Don't** use gradient text (`background-clip: text`), neon cyan/violet glows, or HUD brackets.
- **Don't** nest cards inside cards or use generic icon-plus-heading boxes for the About or Skills sections.
