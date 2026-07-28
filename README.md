# Marquee-Site

Landing page for [Marquee](https://github.com/jeremehancock/Marquee) — a self-hosted
web app for managing your Plex media posters.

Plain HTML, CSS, and vanilla JavaScript. No framework, no build step, no
dependencies — every asset is local, so it can be hosted as static files
anywhere.

## Structure

```
index.html                          the whole page
assets/css/styles.css               styles (dark theme, matches the app palette)
assets/js/main.js                   mobile nav, scroll reveal, FAQ, footer year
assets/img/logo.svg                 app logo (copied from Marquee)
assets/img/favicon.svg              app favicon (copied from Marquee)
assets/img/screenshot-gallery.svg   PLACEHOLDER — hero screenshot
assets/img/screenshot-wall.svg      PLACEHOLDER — Poster Wall screenshot
assets/img/og-image.svg             PLACEHOLDER — social share image
```

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Replacing the placeholder images

The three `PLACEHOLDER` SVGs are drawn stand-ins sized to the real thing. To swap
one for a real screenshot, drop the new file in `assets/img/` and update its
`src` in [`index.html`](index.html):

| Placeholder | Used in | Suggested size |
| --- | --- | --- |
| `screenshot-gallery.svg` | hero, inside the browser frame | 1200 × 800 |
| `screenshot-wall.svg` | Poster Wall section | 1200 × 750 |
| `og-image.svg` | `og:image` meta tag | 1200 × 630 (use PNG/JPG — some platforms don't render SVG previews) |

## Notes

- Installation and configuration details deliberately live on GitHub, not here —
  the page links out to the repo instead of duplicating the Docker setup.
- The `og:image` and `canonical` URLs in `index.html` point at
  `https://marquee.app/`; update them if the site lands on a different domain.

## License

[MIT](LICENSE)
