# SANE/REBELS — Design System

## Brand Identity

### Logo
**SANE/REBELS** — The logo alternates visibility between SANE and REBELS using opacity animation. They "meet" in the middle at purple (both visible), then swap — creating a breathing, living effect.

- Typography: Sans-serif, bold, uppercase, tight tracking
- Separator: Forward slash `/` in accent color
- Animation duration: 8 seconds, ease-in-out, infinite

---

## Color Palette

### Primary Colors
| Name | Value | Usage |
|------|-------|-------|
| Background | `oklch(0.12 0.01 280)` | Deep dark purple-black |
| Foreground | `oklch(0.98 0 0)` | White/light text |
| Accent (Purple) | `oklch(0.78 0.28 295)` | Primary accent, CTAs, highlights |
| Accent (Warm) | `oklch(0.78 0.24 50)` | Secondary accent, orange tones |

### Supporting Colors
- Border: `oklch(0.30 0.02 280)` — Subtle separation
- Muted: `oklch(0.70 0 0)` — Secondary text
- Ring: `oklch(0.65 0.20 300)` — Focus states

### Shader Background
- Deep purple base with swirling effects
- Colors blend: purple (#9333ea) ↔ orange (#c2410c)
- Black overlay at 35% opacity for depth

---

## Typography

### Font Stack
- **Sans:** Geist (primary), fallback system fonts
- **Mono:** Geist Mono (labels, code, details)

### Type Scale
| Element | Size | Weight | Style |
|---------|------|--------|-------|
| H1 (Hero) | 4xl-8xl | Bold | Tight tracking |
| H2 (Section) | 2xl-6xl | Bold | Tight tracking |
| H3 (Card) | lg-2xl | Bold | Normal |
| Body | base-xl | Normal | Relaxed leading |
| Label | xs | Normal | Uppercase, wide tracking |
| Detail | xs-sm | Normal | Monospace |

---

## Tone of Voice

### We Sound Like
- Warm, direct, curious
- Builder-energy (energized by making, not just advising)
- Confident but inviting (not cocky)
- Thoughtful partner who's done the work

### Key Phrases
- "Machines do machine work. Humans stay human."
- "The rebellion? Going home on time."
- "The sanity? Being present when you get there."
- "Sane enough to build it. Rebel enough to ship it."

### We DON'T Sound Like
- Generic startup speak
- Hustle porn
- Over-promising ("10x your revenue!")
- Cold/corporate
- AI slop (no em-dashes, no "leverage", no "utilize")

---

## Visual Style

### Core Principles
1. **Minimalist** — Details revealed on hover/interaction
2. **Dark Mode First** — Deep, rich backgrounds
3. **Subtle Motion** — Breathing, living, responsive
4. **Premium Feel** — Not minimal for minimal's sake

### Effects
- **Grain Overlay** — Adds texture, subtle noise
- **Custom Cursor** — Distinctive interaction feedback
- **Shader Background** — Living, animated depth
- **Hover Reveals** — Content unfolds on interaction

### Animation Timing
- Transitions: 300ms ease-out (standard)
- Page loads: 700-1000ms fade-in
- Logo pulse: 8s ease-in-out infinite
- Scroll snap: smooth behavior

---

## Component Patterns

### Cards
- Border: `border-foreground/10`
- Background: `bg-foreground/5` with backdrop blur
- Hover: `border-accent/30` + `bg-accent/10`
- Padding: Responsive (p-3 → p-6)
- Rounded: lg → xl

### Buttons
- **Primary:** Accent background, dark text
- **Secondary:** Transparent, border, light text
- **Magnetic Effect:** Subtle pull toward cursor
- **Hover:** Scale 1.05, glow effect

### Text Hierarchy
- Section labels: Monospace, xs, uppercase, accent color
- Headings: Sans-serif, bold, accent highlights
- Body: Light text with opacity variations (90%, 70%, 50%)
- Details: Hidden by default, revealed on hover

---

## Interaction Design

### Scroll Behavior
- Horizontal scroll with snap points
- Vertical scroll on mobile converted to horizontal navigation
- Smooth scroll between sections
- Section indicators (minimalist dots)

### Hover States
- Content reveals (height transitions from 0 to auto)
- Color transitions (foreground/50 → foreground/90)
- Border color changes (accent glow)
- Scale micro-animations

### Focus States
- Ring color matches accent
- Clear visual feedback
- Accessible contrast

---

## Responsive Design

### Breakpoints
- Mobile first approach
- md: 768px+ (tablet/desktop layouts)
- lg: 1024px+ (enhanced layouts)

### Mobile Adaptations
- Reduced spacing (p-3 vs p-6)
- Smaller text sizes (text-xs vs text-base)
- Touch-friendly tap targets
- Vertical stack vs grid layouts
