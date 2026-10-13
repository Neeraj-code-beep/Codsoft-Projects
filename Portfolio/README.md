# Neeraj Mishra — Portfolio

A responsive, single-page portfolio for presenting Neeraj Mishra's background, skills, selected Codsoft projects, and contact information.

## Features

- About, skills, selected projects, and contact sections with working in-page navigation.
- Mobile navigation that supports keyboard activation, Escape to close, and automatic closing after choosing a section.
- Light and dark themes synchronized across controls and saved in browser local storage when available.
- Direct email and phone links, plus GitHub links for the profile and project source.
- Responsive layout, visible keyboard focus, a skip link, reduced-motion support, and descriptive image text.

## Technology

Static HTML, CSS, and vanilla JavaScript. The page uses local PNG assets and optionally loads the Poppins typeface from Google Fonts. It has no build step or runtime package dependencies.

## Run locally

Open `index.html` in a browser, or serve the repository root with Python:

```powershell
py -m http.server 8000
```

Then open `http://localhost:8000/Portfolio/`. From inside the `Portfolio/` directory, the equivalent command is `py -m http.server 8000`, then visit `http://localhost:8000/`.

## Files

- `index.html` — page content, navigation, metadata, and contact links.
- `style.css` — layout, light/dark colors, responsive styles, focus states, and reduced-motion handling.
- `script.js` — mobile menu behavior and theme synchronization/persistence.
- `assets/` — optimized WebP profile image with the original PNG fallback, skill icons, and contact icons.

## Interactions and accessibility

All navigation links target sections on this page. The mobile menu is a button-controlled list and closes with Escape or after a link is chosen. Theme selection updates both theme buttons; local storage is optional and failures are handled without disabling the page. The portfolio does not contain a resume file, so the hero links to the project section instead of a placeholder download. No contact form is present; email and phone links open the visitor's configured apps. Use Tab and Enter/Space to navigate and activate controls.

## Checks and manual review

The project has no formal test suite. The completion pass checked JavaScript syntax, local asset and fragment references, and `git diff --check`. A lightweight Node DOM stub exercised theme initialization and toggling, menu opening/closing, Escape handling and focus return, resize behavior, and storage failure. Browser rendering, interactive keyboard behavior, browser console output, and viewport testing at 320, 375, 430, 768, and 1280 pixels still need manual verification because browser automation was unavailable.

## Static deployment

The site can be hosted by any static host. For Netlify, use no build command and set the publish directory to `Portfolio` from the repository root. For GitHub Pages, publish the `Portfolio/` folder from the repository using a workflow or deploy a branch/folder arrangement supported by the Pages settings. The repository currently has no root-level hosting configuration. The public [Portfolio README](https://github.com/Neeraj-code-beep/Codsoft-Projects/blob/main/Portfolio/README.md) lists a [Netlify demo](https://portfolioneeraj123.netlify.app/), but the demo's current availability and match to this working copy have not been verified.
