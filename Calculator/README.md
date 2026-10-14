# Calculator

A responsive browser calculator with a neumorphic interface. It evaluates arithmetic expressions through a small parser instead of JavaScript `eval`.

## Features

- Addition, subtraction, multiplication, division, and remainder
- Operator precedence and unary plus/minus
- Decimal values, clear, and backspace
- Error messages for incomplete expressions, division or remainder by zero, and invalid results
- A live result display and keyboard input

## Controls

Use the on-screen buttons or type digits and `+`, `-`, `*`, `/`, `%`, or `.`. Press `Enter` or `=` to calculate, `Backspace` to remove the last character, and `Escape` or `Delete` to clear. An error can be cleared or replaced by entering a number.

## Technology

HTML, CSS, and vanilla JavaScript. There are no packages, build tools, or storage requirements.

## Run locally

Open `index.html` in a browser, or start a static server from this directory:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

## Limitations

The parser supports the listed arithmetic operators and precedence; it does not implement parentheses or scientific functions. Results are rounded to 12 significant digits to reduce common floating-point artifacts. Calculations are not saved between page visits.

## Check

From the repository root, run `node --check Calculator/script.js`. The repository has no automated Calculator interaction test; verify the keyboard and button controls in a browser.
