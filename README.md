# CodSoft Projects

A collection of five standalone front-end projects built with HTML, CSS, and vanilla JavaScript. Each project can be opened directly in a browser; no root-level package installation or build step is required.

## Projects

| Project | Description | Project guide |
| --- | --- | --- |
| Calculator | Arithmetic calculator with keyboard input and expression parsing. | [Calculator README](Calculator/README.md) |
| Juice Landing Page | Responsive juice flavor showcase with interactive flavor selection. | [Juice Landing Page README](Juice%20Landing%20page/README.md) |
| Pig Game | Two-player dice game with turn-based scoring. | [Pig Game README](Pig-Game/README.md) |
| Portfolio | Responsive personal portfolio with mobile navigation and theme controls. | [Portfolio README](Portfolio/README.md) |
| To-Do Manager | Task list with completion, deletion, and browser storage. | [To-Do Manager README](To-Do-Manager/README.md) |

## Run locally

1. Download or clone this repository.
2. Open the relevant project's `index.html` file in a modern browser, or run a local static server from the repository root, for example: `python -m http.server 8000`.
3. Visit the relevant project path, such as `http://localhost:8000/Calculator/` or `http://localhost:8000/Portfolio/`.

## Tests and checks

The To-Do Manager includes a dependency-free Node.js test harness. From the repository root, run:

```bash
node To-Do-Manager/test.js
```

JavaScript syntax can be checked with `node --check` against each project's `script.js`. Browser rendering, keyboard interaction, and responsive layouts should also be checked manually at mobile, tablet, and desktop sizes.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Browser DOM APIs and localStorage (To-Do Manager and Portfolio theme preference)

Each project README contains project-specific features, controls, and verification notes. Live demo links are documented only in the individual guides and should be checked for current availability before relying on them.
