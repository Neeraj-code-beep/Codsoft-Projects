# Fresh Press Juice Showcase

A responsive, single page juice flavor showcase. It preserves the original colorful fruit backdrop and rotating bottle carousel while making the flavor controls, navigation, and layout work across screen sizes.

## Features

- Four selectable flavors: orange, plum, kiwi, and strawberry
- Coordinated bottle carousel, fruit backdrop, heading, description, and color theme
- Navigation links to the home, flavor selector, and flavor description
- Responsive layout with touch friendly flavor buttons
- Reduced motion support, visible keyboard focus, and accessible button labels

## Technology

HTML, CSS, and vanilla JavaScript. There are no packages, build tools, or backend services.

## Run locally

From the repository folder, open `Juice Landing page/index.html` in a browser. For a local server, run:

```powershell
cd "Juice Landing page"
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser. Stop the server with `Ctrl+C`.

## Files and assets

```text
Juice Landing page/
├── index.html       # Page structure and accessible controls
├── style.css        # Original visual direction and responsive layouts
├── script.js        # Flavor selection and carousel behavior
├── README.md        # Project and run instructions
└── images/
    ├── juice1.png … juice4.png   # Flavor bottles and thumbnails
    ├── bg*.webp                  # Resized decorative fruit artwork used by the page
    ├── bg*.png                   # Original fruit artwork retained
    └── logo.png                  # Brand mark
```

## Interaction and accessibility

Use the flavor buttons by mouse, touch, or keyboard. `Tab` moves between controls; `Enter` or `Space` selects a focused flavor. The left and right arrow keys move between flavors while focus is in the selector. The selected flavor is exposed with `aria-pressed`, and its heading and description are announced. Decorative images are hidden from assistive technology. Motion is reduced when the operating system requests reduced motion.

## Verification

The JavaScript syntax check and local asset/reference checks are run as part of the project review. Flavor selection logic is checked with a lightweight DOM stub in Node. A graphical browser is not available in this environment, so screen layout, actual assistive technology behavior, and browser console output still need manual verification at 320px, 375px, 430px, 768px, and 1280px widths, plus a short viewport.

## Deployment

This is a static site with no build command. The repository's Juice Landing Page README lists `https://neeraj-landing-page-demo.netlify.app/` as a demo, but its current availability and whether it serves the latest project files have not been verified. To publish this folder through Netlify, import the repository, leave the build command blank, and set the publish directory to `Juice Landing page`. No deployment was triggered from this workspace.
