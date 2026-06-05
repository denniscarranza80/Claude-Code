# Riverbend Plaza — Shopping Plaza Website

A responsive, single-page marketing website for a fictional shopping plaza in
**Little Rock, Arkansas**. Built with plain HTML, CSS, and JavaScript — no build
step or dependencies required.

## Features

- **Hero** with location, headline, and key stats
- **Highlights** strip (retail, dining, events, parking)
- **Store directory** with live search + category filtering (vanilla JS)
- **Dining** section and **amenities** grid
- **Events** list with upcoming happenings
- **Visit** section with hours, address, and an embedded map
- **Leasing** section with a working (front-end) inquiry form
- Fully **responsive** with a mobile nav, and respects `prefers-reduced-motion`

## Project structure

```
index.html    Markup and page content
styles.css    Design tokens, layout, and responsive styles
app.js        Directory data, search/filter, nav toggle, form handling
```

## Run it locally

It's static, so just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Customizing

- **Stores:** edit the `STORES` array at the top of `app.js`.
- **Hours / address / phone:** update the `#visit` section in `index.html`.
- **Events:** edit the `.event-list` items in `index.html`.
- **Colors / fonts:** tweak the CSS variables in `:root` in `styles.css`.

> Names, addresses, and contact details are placeholders for demo purposes.
