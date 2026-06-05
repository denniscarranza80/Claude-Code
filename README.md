# Plaza La Cima — Website

A polished, multi-page marketing website for **Plaza La Cima**, a shopping,
dining, and gathering destination in **Little Rock, Arkansas**. Built with plain
HTML, CSS, and JavaScript — **no build step, no dependencies, no framework** — so
it loads fast on any device and can be hosted anywhere (static host, S3, GitHub
Pages, Netlify, etc.).

## Highlights

- **Elegant, upscale design** — refined serif headings (Fraunces), a teal +
  warm-gold "summit" palette, generous whitespace, and a consistent design-token
  system in CSS.
- **Smooth, lightweight animations** — scroll-reveal via `IntersectionObserver`,
  hero entrance, sticky-header transition, and tasteful hover micro-interactions.
  Everything honors `prefers-reduced-motion`.
- **Fully responsive** — fluid type/spacing with `clamp()`, an accessible mobile
  nav, and layouts that reflow cleanly from phone to desktop.
- **Accessible** — semantic landmarks, skip link, keyboard-friendly nav,
  `aria-current` page states, visible focus styles, and labeled controls.
- **Fast** — no images to download (decorative gradients stand in for photos),
  one small CSS file, and a handful of tiny vanilla JS modules.

## Pages

| File | Page | What's on it |
| --- | --- | --- |
| `index.html` | Home | Hero, highlights, featured stores, dining & events teasers, leasing CTA |
| `stores.html` | Store Directory | Live search + category filtering across all tenants |
| `dining.html` | Dining | Restaurant/café cards, food hall feature |
| `events.html` | Events | Sorted event calendar, "host with us" section |
| `visit.html` | Visit | Hours (with *today* highlighted), map, amenities, contact |
| `leasing.html` | Leasing | Pitch + validated leasing inquiry form |

## Project structure

```
index.html / stores.html / dining.html / events.html / visit.html / leasing.html
styles.css      Design tokens, components, animations, responsive rules
data.js         Single source of truth: stores, dining, events (edit here)
directory.js    Renders the searchable/filterable store directory
content.js      Renders dining cards and the events list
app.js          Shared: mobile nav, scroll reveal, header state, form, year
```

## Run it locally

It's static, so open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Customizing

- **Stores / dining / events:** edit the arrays in **`data.js`** — every page
  updates automatically.
- **Hours, address, phone, email, map:** update `visit.html` (and the address in
  each footer). Hours rows use `data-day` so "Today" highlights correctly.
- **Colors, fonts, spacing:** tweak the CSS custom properties in `:root` at the
  top of `styles.css`.
- **Real photos:** the `.ph-*` gradient blocks are placeholders. Swap them for
  real images by setting a `background-image` on the matching `.media-fill` /
  `.tile-media`, or replace the element with an `<img loading="lazy">`.

> The tenant names, suites, hours, phone, email, and address are realistic
> **placeholders**. Replace them with Plaza La Cima's real details — the
> structure stays the same.
