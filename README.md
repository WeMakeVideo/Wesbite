# wemake.video — SvelteKit Website

## CodeSandbox Setup
1. Upload this zip to codesandbox.io → "Import from zip"
2. It will auto-detect SvelteKit
3. In the terminal run: `npm install`
4. Then: `npm run dev`

## Stack
- SvelteKit 2
- GSAP 3 + ScrollTrigger
- Vanilla CSS (no Tailwind needed)

## Components
- `Hero.svelte` — WebGL particle canvas, char-by-char text animation, scroll-pinned video shrink
- `Nav.svelte` — Auto dark/light switching per section
- `Ticker.svelte` — Infinite scroll marquee
- `Disciplines.svelte` — Magnetic hover cards, scroll reveals
- `Work.svelte` — Asymmetric project grid, hover reveals
- `About.svelte` — Animated counters on scroll
- `Contact.svelte` — Magnetic CTA button
- `+layout.svelte` — Custom cursor (grows, changes colour on dark sections)

## Swapping in your real video
In `Hero.svelte`, replace the `<source src="...">` with your showreel URL or local file path.

## Customising stats
In `About.svelte`, update the counter target values (8, 200, 40) to your real numbers.
