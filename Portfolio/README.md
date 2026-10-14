# Neeraj Mishra — Portfolio

A responsive, single-page portfolio presenting Neeraj Mishra's background, skills, selected projects, and contact options.

## Sections and features

- Profile introduction with a WebP portrait and PNG fallback
- About and Skills & Experience sections
- Project cards linking to the four project folders in the public GitHub repository
- Contact details with email, phone, and GitHub profile links
- A Blogs section that currently contains only a “coming soon” placeholder; there are no published articles or blog system
- Desktop navigation and an expandable mobile navigation menu
- Light and dark themes; the selected theme is stored in browser `localStorage` when available

## Accessibility and responsive behavior

The page includes a skip link, labeled navigation, visible focus styles, descriptive portrait text, and a mobile menu that supports keyboard activation and Escape. The layout adapts at tablet and mobile widths, and motion is reduced when the operating system requests it. Theme controls remain usable if browser storage is unavailable.

## Technology and assets

Static HTML, CSS, and vanilla JavaScript. Poppins is requested from Google Fonts with Arial/system fallbacks. The profile picture and skill/contact icons are stored in `assets/`; the page prefers `profilephoto.webp` and falls back to `profilephoto.png`. No package installation, build step, or backend is required.

## Run locally

From the repository root, start a static server:

```sh
python -m http.server 8000
```

Open `http://localhost:8000/Portfolio/`. Alternatively, open `index.html` directly in a browser.

## Check and limitations

From the repository root, run `node --check Portfolio/script.js`. There is no committed Portfolio test suite. Check desktop and mobile navigation, Escape behavior, theme toggling, and storage fallback in a browser. The site has no contact form or resume download; email and phone links open the visitor's configured apps. The Blog section is a placeholder.

Return to the [repository overview](../README.md).
