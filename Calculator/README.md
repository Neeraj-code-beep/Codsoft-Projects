# CodSoft Calculator

A small, responsive calculator built with HTML, CSS, and vanilla JavaScript. It keeps the original neumorphic style and supports basic arithmetic through the on-screen keys or keyboard.

## Features

- Addition, subtraction, multiplication, division, and remainder (`%`)
- Standard operator precedence and unary minus
- Decimal input, clear, backspace, and recoverable error messages
- Keyboard controls: digits and `+ - * / % .`, `Enter` or `=` to calculate, `Backspace` to delete, and `Escape` or `Delete` to clear
- Responsive layout, visible keyboard focus, and an announced result display

## Run locally

Open `index.html` directly in a browser, or start any static file server from this folder and open its local address. No build step or package installation is needed.

## Project structure

```text
Calculator/
├── index.html   # Calculator controls and display
├── style.css    # Neumorphic styling and responsive layout
├── script.js    # Input handling and arithmetic parser
└── README.md    # Usage and verification notes
```

## Implementation notes

Expressions are tokenized and parsed in JavaScript using separate unary, multiplication/division/remainder, and addition/subtraction steps. This gives normal operator precedence without evaluating input as JavaScript. Invalid or incomplete expressions and division by zero show a message; entering a new number or clearing the calculator recovers the display. Results are formatted to 12 significant digits to hide common floating-point artifacts.

## Manual verification checklist

- Try `2 + 3 * 4` (14), `8 / 2` (4), `5 - 8` (-3), `5 % 2` (1), and `0.1 + 0.2` (0.3).
- Enter several decimal points in one number, repeat operators, and calculate with an empty or incomplete expression.
- Try `8 / 0`, then enter a number to confirm the calculator recovers; also check AC and backspace.
- Repeat basic calculations with the keyboard controls listed above.
- Check narrow mobile (around 320px), tablet, and desktop widths, plus a short viewport height.

## Deployment

This folder is a standalone static site and needs no build step. No GitHub Pages, Netlify, or other hosting configuration was found in the repository when this README was written, so a live deployment is not confirmed. To publish the calculator with GitHub Pages, configure a Pages workflow or place the site files in the repository's configured Pages source; selecting the repository root alone serves the repository root, not this `Calculator/` folder. Alternatively, set a static host's publish directory to `Calculator/`. Follow that host's current setup instructions and verify the published URL after deployment.
