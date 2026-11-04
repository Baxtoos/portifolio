---
name: Sérgio Bastos Portfolio
description: Architectural Engineering Monograph — Moss Ink & CLI Centerpiece Edition
colors:
  emerald-signal: "#2FBF8A"
  emerald-hover: "#45CC9A"
  forest-signal-light: "#14724F"
  moss-ink: "#0B100E"
  mineral-slate: "#111815"
  botanical-graphite: "#17201C"
  interactive-moss: "#1F2B26"
  sage-white: "#EEF2EE"
  mineral-stone: "#B8C4BC"
  muted-botanical: "#8A9890"
  hairline-dark: "#1F2924"
  border-strong-dark: "#2E3D36"
  archival-sage-paper: "#F3F5F0"
  sage-paper-secondary: "#E8ECE4"
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
    backgroundColor: "{colors.emerald-signal}"
    textColor: "{colors.moss-ink}"
    rounded: "{rounded.md}"
    padding: "11px 20px"
  button-primary-hover:
    backgroundColor: "{colors.emerald-hover}"
  button-secondary:
    backgroundColor: "{colors.botanical-graphite}"
    textColor: "{colors.sage-white}"
    rounded: "{rounded.md}"
    padding: "11px 20px"
  project-card:
    backgroundColor: "{colors.mineral-slate}"
    textColor: "{colors.sage-white}"
    rounded: "{rounded.lg}"
    padding: "22px"
---

# Design System: Sérgio Bastos Portfolio

## Overview

**Creative North Star: "The Architectural Engineering Monograph — Moss Ink & CLI Centerpiece Edition"**

This design system rejects generic cyber-neon clichés (cyan/violet gradients, neon glows, decorative 3D bloat, and nested icon cards) in favor of an editorial engineering monograph anchored by an interactive CLI Terminal (`baxtoos@dev:~$`) right in the Hero and a refined, non-neon deep green palette ("Verde Musgo & Tinta").

**Key Characteristics:**
- Deep moss ink (`#0B100E`) in dark mode and archival sage paper (`#F3F5F0`) in light mode.
- Single high-contrast architectural emerald/forest green accent (`#2FBF8A` dark / `#14724F` light) with zero gradients and zero neon glow.
- Interactive CLI Terminal (`baxtoos@dev:~`) as the Hero centerpiece (`/` shortcut, `Tab` autocomplete, clickable command chips, and `open <id>` modal inspection).
- Exposed `1px` structural hairline rules (`#1F2924` / `#CFD6CA`) and ledger rows instead of nested cards.
- Expressive optical grotesque display typography (`Bricolage Grotesque`) paired with humanist-geometric prose (`Manrope`) and tabular monospace (`JetBrains Mono`).

## Colors

Deep mineral greens paired with a single architectural emerald/forest signal accent that guides eye movement toward the CLI prompt, primary actions, and verified production metrics.

### Primary
- **Architectural Emerald / Forest Green** (`#2FBF8A` in dark mode, `#14724F` in light mode): Used strictly for primary CTAs, the CLI terminal prompt (`baxtoos@dev:~$`), active filter states, focus rings, and key role indicators.

### Neutral
- **Deep Moss Ink** (`#0B100E`): Primary background canvas in dark mode.
- **Mineral Slate** (`#111815`): Secondary editorial band, Hero terminal stage, and card resting surface.
- **Botanical Graphite** (`#17201C`): Elevated containers, terminal header/command bar, modal dialogs, and secondary buttons.
- **Sage White** (`#EEF2EE`): Primary foreground text in dark mode (16.5:1 contrast).
- **Mineral Stone** (`#B8C4BC`): Secondary narrative prose (10.2:1 contrast).
- **Muted Botanical Gray** (`#8A9890`): Metadata, captions, and stack tokens (5.1:1 contrast, WCAG AA).
- **Archival Sage Paper** (`#F3F5F0`) & **Sage Paper Secondary** (`#E8ECE4`): Primary and secondary light-mode surfaces.

### Named Rules
**The Single Signal Rule.** Architectural Emerald (`#2FBF8A` / `#14724F`) is the only chromatic accent on the page; never combine it with secondary neon hues or multi-stop gradients.

## Typography

**Display Font:** `Bricolage Grotesque` (with `system-ui, -apple-system, sans-serif` fallback)
**Body Font:** `Manrope` (with `system-ui, -apple-system, sans-serif` fallback)
**Label/Mono Font:** `JetBrains Mono` (with `monospace` fallback)

**Character:** Authoritative, optical display lettering for titles contrasted against clean, high-legibility body prose and crisp tabular monospace for the Hero CLI terminal and measurements.

### Hierarchy
- **Display** (`800`, `clamp(2.5rem, 4.8vw + 1rem, 4.5rem)`, `line-height: 1.02`, `letter-spacing: -0.03em`): Hero name and primary identity.
- **Headline** (`700`, `clamp(1.85rem, 3vw + 0.5rem, 2.75rem)`, `line-height: 1.1`, `letter-spacing: -0.025em`): Section headings (`h2`).
- **Title** (`700`, `clamp(1.35rem, 2vw + 0.4rem, 1.85rem)`, `line-height: 1.18`, `letter-spacing: -0.02em`): Flagship case study titles (`h3`).
- **Subheading** (`700`, `1.35rem`, `line-height: 1.24`, `letter-spacing: -0.015em`): Modal titles and section subheadings.
- **Lead** (`600`, `1.25rem`, `line-height: 1.5`): Archive card titles, domain titles, and about essay lead.
- **Body** (`400–600`, `1rem`, `line-height: 1.65`, measure `65–68ch`): Case study narratives and biographical essay.
- **Small** (`500–600`, `0.875rem`, `line-height: 1.5`): CLI terminal output/input, buttons, navigation links, and secondary descriptions.
- **Label** (`500–600`, `0.75rem`, `tabular-nums`): CLI command chips, keyboard shortcut badges, numerical metrics, and stack tokens.

### Named Rules
**The Unassisted Heading Rule.** Headings (`h1`, `h2`, `h3`) never carry an eyebrow or kicker label above them; the heading's scale and wording carry the hierarchy directly.

## Layout

Centered container (`max-width: 1240px`, horizontal padding `24px` mobile / `40px` desktop). Sections use 12-column CSS grids (`6fr 6fr` in the Hero and Flagship Case Studies; `7fr 5fr` in section headers and Contact; `5fr 7fr` in About; `4fr 8fr` in the Capability Ledger) separated by `1px` structural hairlines and `80px` vertical rhythm.

## Elevation & Depth

Surfaces are flat and architectural at rest, separated by tonal layering (`#0B100E` → `#111815` → `#17201C`) and `1px solid` structural hairlines (`#1F2924` / `#2E3D36`). Shadows are reserved exclusively for floating overlay layers (the project detail modal and toast notifications).

### Shadow Vocabulary
- **Overlay Elevation** (`box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.68)`): Used only on `.modal-container` and `.toast-notice`.

### Named Rules
**The Single Elevation Declaration Rule.** Page containers and project cards declare their boundary with a `1px` border and never combine it with a diffuse drop shadow.

## Shapes

Crisp, technical corner geometry: `4px` (`--radius-xs`) for `<kbd>` badges, focus rings, and scrollbars; `6px` (`--radius-sm`) for CLI chips, tags, and small icon buttons; `8px` (`--radius-md`) for buttons, terminal input row, and filter controls; `12px` (`--radius-lg`) for project archive cards and the inner terminal window; `14px` (`--radius-xl`) for the Hero CLI stage, contact panel, and modal container. All icons are inline SVGs drawn with a uniform `1.75px` stroke width.

## Components

### Buttons
- **Shape:** Gently rounded technical rectangle (`8px` radius, `min-height: 44px`).
- **Primary:** Architectural Emerald (`#2FBF8A`) fill with Deep Moss Ink (`#0B100E`) label and `11px 20px` padding.
- **Hover / Focus:** Shifts to `#45CC9A` on hover with a `2px` icon translation; `2px solid #2FBF8A` outline with `3px` offset on `:focus-visible`.
- **Secondary:** Botanical Graphite (`#17201C`) fill with `#2E3D36` `1px` border and Sage White (`#EEF2EE`) text.

### Chips
- **Style:** Monospace CLI command buttons (`0.75rem`, `min-height: 36px`) with `#111815` background and `1px solid #2E3D36` border (`6px` radius).
- **State:** Interactive terminal chips highlight their border and label in `#2FBF8A` on hover; filter buttons fill with `--accent-primary` and `--accent-on-primary` text when active.

### Cards / Containers
- **Corner Style:** `12px` radius on project cards; `14px` on the Hero CLI stage and contact panel.
- **Background:** Mineral Slate (`#111815`), shifting to Botanical Graphite (`#17201C`) on hover.
- **Shadow Strategy:** Flat at rest (`box-shadow: none`); `-3px` vertical lift on hover.
- **Border:** `1px solid #1F2924`, strengthening to `#2E3D36` on hover.
- **Internal Padding:** `22px` on `.project-body`; `16px` on `.terminal-hero-stage`; `40px 32px` on `.contact-panel`.

### Inputs / Fields
- **Style:** Dedicated CLI terminal prompt bar (`.terminal-input-row`) with `12px 14px` padding, `#111815` background, `1px solid #2E3D36` border, `JetBrains Mono` `0.875rem` text, and an inline `Executar ↵` button.
- **Focus:** Border shifts to `#2FBF8A` on `:focus-within` with an emerald caret (`caret-color: #2FBF8A`).

### Navigation
- **Style:** Sticky top bar (`min-height: 72px`) with `backdrop-filter: blur(12px)`, `1px solid #1F2924` bottom border, `Bricolage Grotesque` brand wordmark, nav links with subtle active tint (`rgba(47, 191, 138, 0.14)`), theme toggle, and full-width mobile drawer below `860px`.

## Do's and Don'ts

### Do:
- **Do** keep the Interactive CLI Terminal (`baxtoos@dev:~`) immediately accessible in the Hero with `/` shortcut and one-click command chips.
- **Do** maintain WCAG AA contrast (`≥ 4.5:1` for prose and metadata) in both `dark` and `light` themes.
- **Do** disable decorative GSAP/boot motion when `prefers-reduced-motion: reduce` is active.

### Don't:
- **Don't** place eyebrows or kickers above `h1`, `h2`, or `h3` headings.
- **Don't** use gradient text (`background-clip: text`), neon Matrix glows, or heavy 3D canvases that compete with content.
- **Don't** nest cards inside cards or use generic icon-plus-heading boxes for the About or Skills sections.
