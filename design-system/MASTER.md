# Design system: Dennis Cochardo portfolio

Source of truth for the tokens in `app/globals.css`. Generated with the ui-ux-pro-max skill (Portfolio/Personal palette, minimal Swiss type), then adapted: light by default, one blue accent, no gradients or shadows.

## Color (single accent)

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#FAFAFA` | `#09090B` |
| `--surface` | `#FFFFFF` | `#111113` |
| `--fg` | `#09090B` | `#FAFAFA` |
| `--muted` | `#475569` | `#A1A1AA` |
| `--border` | `#E4E4E7` | `#27272A` |
| `--accent` | `#2563EB` | `#2563EB` |
| `--accent-text` | `#2563EB` | `#60A5FA` |
| `--on-accent` | `#FFFFFF` | `#FFFFFF` |

## Type

- Sans: Inter 400/500/600. Mono (labels only): JetBrains Mono 500, 12px, uppercase, 0.08em tracking.
- Scale: display 40-64px fluid, h2 26-32, h3 20, body 17/1.65, small 14, label 12. Headings 600, tracking -0.02em. Line length capped at 68ch.

## Spacing and layout

- 4/8 grid: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Container 1100px max, 24px gutters (16px on mobile). Section padding 96px desktop, 64px mobile.
- Radius 8px controls, 12px cards. 1px borders. No shadows, no gradients.

## Interaction

- Tap targets 44px minimum. 2px accent focus ring. Hover transitions 150ms.
- Scroll fade-in 400ms, 8px rise, once, off under `prefers-reduced-motion`.
- Dark mode toggled with `data-theme` on `<html>`; light is the default.
