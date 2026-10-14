# CodSoft Projects

Five standalone browser projects built with HTML, CSS, and vanilla JavaScript. Each project lives in its own folder and can be opened directly or served from the repository root. There is no shared build system or root package installation.

## Projects

| Project | Overview | Project guide |
| --- | --- | --- |
| [Calculator](Calculator/) | Keyboard-accessible arithmetic calculator with operator precedence and error handling. | [Calculator README](Calculator/README.md) |
| [Juice Landing page](Juice%20Landing%20page/) | Responsive Fresh Press flavor showcase with a rotating bottle and four selectable juices. | [Juice Landing page README](Juice%20Landing%20page/README.md) |
| [Pig-Game](Pig-Game/) | Two-player dice game with turn scoring, banking, and a 100-point winning threshold. | [Pig-Game README](Pig-Game/README.md) |
| [Portfolio](Portfolio/) | Personal portfolio with project links, contact options, a Blogs placeholder, and light/dark themes. | [Portfolio README](Portfolio/README.md) |
| [To-Do-Manager](To-Do-Manager/) | Task list with completion, deletion, and browser storage. | [To-Do-Manager README](To-Do-Manager/README.md) |

## Technologies

- HTML for page structure and native controls
- CSS for layouts, responsive rules, visual themes, and reduced-motion preferences
- Vanilla JavaScript and browser DOM APIs for interactions
- `localStorage` for To-Do Manager tasks and the Portfolio theme preference
- Node.js for JavaScript syntax checks and the To-Do Manager's dependency-free test harness

## Prerequisites

A modern browser is enough to open the pages. Python is optional for running a local static server. Install Node.js only if you want to run the supplied JavaScript checks and To-Do Manager tests. Portfolio and Pig-Game request Google Fonts; their CSS includes local system-font fallbacks if the network font is unavailable.

## Run locally

From the repository root, start a static server:

```sh
python -m http.server 8000
```

On Windows, `py -m http.server 8000` may be used instead. Open the project path in a browser:

- `http://localhost:8000/Calculator/`
- `http://localhost:8000/Juice%20Landing%20page/`
- `http://localhost:8000/Pig-Game/`
- `http://localhost:8000/Portfolio/`
- `http://localhost:8000/To-Do-Manager/`

Stop the server with `Ctrl+C`. Alternatively, open the project's `index.html` directly; no build step is required.

## Project layout

```text
Calculator/          index.html, style.css, script.js
Juice Landing page/  index.html, style.css, script.js, images/
Pig-Game/            index.html, style.css, script.js, assets/
Portfolio/           index.html, style.css, script.js, assets/
To-Do-Manager/       index.html, style.css, script.js, test.js, bg-image.jpg
```

Each folder is independent. There is no shared root `package.json` or test runner.

## Checks

Run the following from the repository root to check JavaScript syntax and the To-Do Manager interactions:

```sh
node --check Calculator/script.js
node --check "Juice Landing page/script.js"
node --check Pig-Game/script.js
node --check Portfolio/script.js
node --check To-Do-Manager/script.js
node --check To-Do-Manager/test.js
node To-Do-Manager/test.js
```

The automated test harness covers To-Do Manager task creation, safe text rendering, completion, deletion, persistence, malformed storage, and unavailable storage. The other projects have no committed test harness; verify their interactions, links, assets, and responsive layouts in a browser.

## Limitations

These are independent static projects, not a unified application. No deployment configuration or verified live demo is included in this repository. To-Do Manager changes cannot persist when browser storage is unavailable. Portfolio blog content is a placeholder; the page currently has no articles or publishing system.

See each project README for its controls, implementation details, and project-specific limitations.
