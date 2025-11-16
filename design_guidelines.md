# AxeomLabs Design Guidelines

## Design Approach
**Reference-Based Approach**: Draw inspiration from dark-themed tech products like Linear (for typography hierarchy and restraint), Stripe (for trust and clarity), and Vercel (for cosmic/gradient aesthetics). Combine with a unique cosmic, mysterious atmosphere that feels alive yet trustworthy.

## Color System
**Primary Palette:**
- Background: `#05060B` (near-black) or `#0b1020` (deep navy)
- Surface/Cards: `#0f1419` (slightly lighter than background)
- Deep Purple: `#3b2b6f` (secondary backgrounds, accents)
- Electric Blue: `#2563ff` (primary CTAs, links, interactive elements)
- Vivid Violet: `#8b5cf6` (secondary accents, highlights)
- Soft Glow: `rgba(37,99,255,0.12)` (hover states, card borders)
- Text Primary: `#e5e7eb` (near-white)
- Text Secondary: `#9ca3af` (muted content)

**Gradient Usage:**
- Hero backgrounds: Subtle radial gradients from deep purple to near-black
- Card hover states: Linear gradients with blue-to-violet shifts
- CTAs: Gradient backgrounds with electric blue to violet
- Living gradients: Slow CSS animation (10-15s duration) for cosmic feel

## Typography
**Font Stack:**
- Primary: Inter or Poppins with fallback `system-ui, -apple-system, sans-serif`
- Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

**Hierarchy:**
- H1 (Hero): 3.5rem (56px) desktop, 2.5rem mobile, font-weight 700, tight line-height (1.1)
- H2 (Section headers): 2.5rem (40px) desktop, 2rem mobile, font-weight 700
- H3 (Card titles): 1.5rem (24px), font-weight 600
- Body: 1rem (16px), font-weight 400, line-height 1.6
- Small: 0.875rem (14px) for metadata, captions

## Layout System
**Spacing Scale:** Use Tailwind units: 2, 4, 6, 8, 12, 16, 20, 24, 32
- Component padding: `p-6` to `p-8`
- Section spacing: `py-16` to `py-24` desktop, `py-12` mobile
- Card gaps: `gap-6` to `gap-8`
- Container max-width: `max-w-7xl` (1280px)

**Grid Patterns:**
- Services: 3-column grid desktop (`grid-cols-3`), 2-column tablet, 1-column mobile
- Blog cards: 3-column masonry-style grid
- Team bios: 2-column side-by-side layout
- Focus areas: 4-column icon grid

## Component Library

### Navigation
Sticky header with glass morphism effect (`backdrop-blur-md`, dark background with 90% opacity). Logo left, nav links center/right. Subtle bottom border with glow color. Hover states: electric blue underline animation.

### Hero Section
Left-aligned content (60% width) with right-side cosmic particle canvas (40%). Hero includes: headline, subhead, two CTAs (primary gradient button, secondary outline button). Parallax background with slow-moving gradient. Minimum height: 85vh.

### Service Cards
Elevated cards with dark surface color, subtle border with soft glow. Card structure: icon (top), title (H3), 2-3 bullet points, CTA link. Hover: lift effect with increased glow, gradient border shift. Icon size: 48px, electric blue or violet.

### Blog Cards
Compact cards with: thumbnail placeholder (16:9 aspect ratio), title, date, tags (pill-shaped with purple background), excerpt (2 lines max), reading time. Hover: subtle scale and glow increase.

### Forms (BadWater & Contact)
Dark input fields with light borders (`border-gray-700`), focus state with electric blue border. Labels above inputs. TextArea for messages with 6-row minimum height. File upload with drag-drop zone styling. Submit button: gradient background, full-width on mobile.

### Footer
Multi-column layout (4 columns desktop, 2 tablet, 1 mobile): Sitemap links, contact details, small site description, copyright. Dark background slightly lighter than page background. Minimal spacing between sections.

## Animation Guidelines
**Framer Motion Transitions:**
- Page transitions: Fade + slight vertical slide (20px), 0.3s duration
- Section reveals: Staggered fade-in as user scrolls into view
- Card hover: Scale 1.02, glow intensity increase, 0.2s ease-out

**Cosmic Background:**
- Lightweight particle canvas (50-100 particles) with slow drift motion
- Fallback: CSS gradient animation for browsers/devices with reduced resources
- Particles: small dots (2-3px), electric blue/violet colors with low opacity (0.2-0.4)

**Reduce Motion:**
- Toggle button in navigation (accessible)
- When enabled: disable parallax, particle motion, and hover scale effects
- Store preference in localStorage

## Images
**Hero Section:** Large cosmic-themed abstract image (stars, nebula, or tech grid) on right side, blurred overlay to integrate with particle canvas. Image should be dark with blue/purple tones matching palette.

**About Page:** Team member placeholder avatars (circular, 200px diameter) with subtle glow border. If photos unavailable, use gradient circles with initials.

**Service Icons:** Use Heroicons (outline style) from CDN. 48px size, electric blue color. Icons: Research (beaker), Robotics (cpu-chip), AI (sparkles), Security (shield-check), Education (academic-cap), Guidance (chat-bubble).

**Blog Thumbnails:** Placeholder images with overlay gradient (dark to transparent from bottom). Aspect ratio 16:9, minimum 600px width.

**Buttons Over Images:** Apply `backdrop-blur-md` and dark background with 70% opacity to maintain readability. No additional hover effects beyond button's native interaction states.

## Accessibility
- WCAG AA contrast ratios (4.5:1 for text, 3:1 for UI elements)
- Semantic HTML5 elements (`<nav>`, `<main>`, `<article>`, `<section>`)
- Focus indicators: 2px electric blue outline with offset
- Aria labels for icon-only buttons and interactive elements
- Keyboard navigation: visible focus states, logical tab order
- Skip-to-content link for screen readers
- Alt text for all images, decorative images marked as `aria-hidden`

## Page-Specific Notes
- **BadWater Portal:** Clear visual distinction from main site (lighter purple accent). Large, friendly form with helpful placeholder text. Human icon/illustration emphasizing "No AI."
- **Blog:** Clean reading experience with generous line-height (1.8) and optimal content width (`max-w-prose`). Syntax highlighting for code blocks if needed.
- **Contact:** Map placeholder with dark theme styling. Contact details displayed as large, readable text blocks with icons.