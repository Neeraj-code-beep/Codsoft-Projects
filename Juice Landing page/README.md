# Fresh Press Juice Showcase

A single-page juice product showcase with a colorful fruit backdrop, four bottle flavors, and a rotating bottle carousel.

## Features

- Orange, plum, kiwi, and strawberry flavor choices
- Flavor selection updates the heading, description, background gradient, selected thumbnail, bottle carousel, and fruit artwork together
- Home, Flavors, About, and Explore flavors navigation targets the existing showcase and controls; it does not add separate pages or sections
- Responsive navigation and flavor controls, with a single selected decorative bottle on compact screens
- Reduced-motion styles, visible keyboard focus, and accessible flavor-button names

## Controls and motion

Select a bottle with a click, touch, or keyboard activation (`Enter` or `Space`). When focus is in the flavor selector, `ArrowLeft` and `ArrowRight` move the selection and wrap between the four flavors. Navigation focuses its existing destination and scrolls it into view without changing the selected flavor or adding a fragment to the address. Bottle and fruit transforms transition when a flavor is selected; system reduced-motion preferences shorten those transitions.

At widths up to 700px, only the selected decorative carousel bottle is shown. At widths up to 700px and heights up to 620px, the large decorative bottle carousel is hidden while the four flavor thumbnails remain available.

## Technology and assets

HTML, CSS, and vanilla JavaScript. The page has no package dependencies, build process, backend, or persistent state. It uses `images/logo.png`, `images/juice1.png` through `images/juice4.png`, and the four optimized `images/bg*.webp` fruit backgrounds. Original `images/bg*.png` artwork is also retained in the folder but is not loaded by the page.

## Run locally

Open `index.html` in a browser, or start a static server from this directory:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

## Check and limitations

From the repository root, run `node --check "Juice Landing page/script.js"`. There is no committed automated browser test. Check flavor changes, all four navigation links, arrow-key behavior, reduced-motion settings, and mobile/desktop layouts in a browser. The showcase contains one main content area; About is the flavor description, and Flavors points to the selector rather than to separate editorial sections.
