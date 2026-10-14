# 🧩 CodSoft Projects

Five independent browser projects built as small, standalone applications. Each project uses its own HTML, CSS, and JavaScript files; there is no shared build system.

## 🗂️ Projects

| Project | What it does | Guide |
| --- | --- | --- |
| [Calculator](Calculator/) | Evaluates basic arithmetic expressions with a hand-written parser, keyboard input, and operator precedence. | [Calculator README](Calculator/README.md) |
| [Fresh Press Juice Showcase](Juice%20Landing%20page/) | Presents four juice flavors with an animated, selectable bottle showcase. | [Juice Landing page README](Juice%20Landing%20page/README.md) |
| [Pig-Game](Pig-Game/) | Two-player dice game: build a turn score, bank it, and reach 100 points to win. | [Pig-Game README](Pig-Game/README.md) |
| [Portfolio](Portfolio/) | Personal portfolio with project links, contact links, theme controls, and a Blogs placeholder. | [Portfolio README](Portfolio/README.md) |
| [To-Do Manager](To-Do-Manager/) | Adds, completes, deletes, and locally saves tasks in the browser. | [To-Do-Manager README](To-Do-Manager/README.md) |

## 🧰 Technologies

**Shared foundation:** semantic HTML, CSS, and browser JavaScript. These projects do not require a package manager or compile step.

**Project-specific browser features:** the To-Do Manager stores tasks in `localStorage`; the Portfolio stores its theme preference there. The Calculator, Juice showcase, and Pig-Game keep their interaction state in the current page session. Stylesheets request Google Fonts for some projects and include system-font fallbacks.

## 📋 Prerequisites

A modern browser can open any project directly. Python 3 is optional and is only needed to run a local static server. Node.js is optional and is used for the syntax checks and To-Do Manager test command below.

## 🚀 Quick start

1. From the repository root, start a static server:

   ```sh
   python -m http.server 8000
   ```

   On Windows, `py -m http.server 8000` is an equivalent launcher when available.
2. Open the matching project address:

   - Calculator: `http://localhost:8000/Calculator/`
   - Juice Landing page: `http://localhost:8000/Juice%20Landing%20page/`
   - Pig-Game: `http://localhost:8000/Pig-Game/`
   - Portfolio: `http://localhost:8000/Portfolio/`
   - To-Do-Manager: `http://localhost:8000/To-Do-Manager/`

Stop the server with `Ctrl+C`. Alternatively, open the project's `index.html` directly without starting a server.

## 🧪 Validation

Run these commands from the repository root to check script syntax and execute the one committed automated test harness:

```sh
node --check Calculator/script.js
node --check "Juice Landing page/script.js"
node --check Pig-Game/script.js
node --check Portfolio/script.js
node --check To-Do-Manager/script.js
node --check To-Do-Manager/test.js
node To-Do-Manager/test.js
```

Only the To-Do Manager includes a committed interaction test file. The other projects should be checked in a browser; see each guide for project-specific manual checks.

## 📁 Repository map

```text
Calculator/          index.html, style.css, script.js
Juice Landing page/  index.html, style.css, script.js, images/
Pig-Game/            index.html, style.css, script.js, assets/
Portfolio/           index.html, style.css, script.js, assets/
To-Do-Manager/       index.html, style.css, script.js, test.js, bg-image.jpg
```

## 📚 Project guides

- [Calculator](Calculator/README.md)
- [Juice Landing page](Juice%20Landing%20page/README.md)
- [Pig-Game](Pig-Game/README.md)
- [Portfolio](Portfolio/README.md)
- [To-Do-Manager](To-Do-Manager/README.md)

Each guide documents the implemented behavior, local setup, and relevant limitations. No deployment URLs or automated suites are claimed here.
