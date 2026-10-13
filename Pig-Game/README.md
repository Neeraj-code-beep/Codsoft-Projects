# Pig Game

A two-player dice game with a turn score that players can either grow or bank. This version keeps the familiar split-player layout and uses the six supplied dice images.

## Rules and features

- Players take turns rolling a six-sided die.
- Rolls from 2 to 6 add to the active player's temporary turn score.
- Rolling a 1 clears that turn score and passes play to the other player.
- Hold adds the temporary score to the player's total and passes the turn.
- The first player to bank at least 100 points wins. Roll and Hold are disabled until New Game is selected.
- New Game resets both totals, both turn scores, the active player, die, winner styling, status, and controls.

## Technology

HTML, CSS, and vanilla JavaScript. No packages, build step, or backend are required. The flowchart and dice artwork are in `assets/`.

## Run locally

Open `index.html` in a browser, or from this folder run:

```powershell
python -m http.server 8000
```

Open `http://localhost:8000`. Stop the server with `Ctrl+C`.

## Controls and accessibility

Use **Roll dice**, **Hold**, and **New game** with a mouse, touch, or keyboard. `Tab` moves between buttons; `Enter` or `Space` activates the focused button. The dice description updates after each roll, and a polite status announcement reports rolls, turn changes, and wins. Buttons have visible focus and the game-over controls are disabled. Motion is reduced when the system requests reduced motion.

## Project files

```text
Pig-Game/
├── index.html                 # Game board, players, and controls
├── style.css                  # Original two-player look and responsive layouts
├── script.js                  # Turn, score, win, and reset logic
├── .prettierrc                # Existing formatting preferences
└── assets/
    ├── dice-1.png … dice-6.png
    └── pig-game-flowchart.png
```

## Verification

The JavaScript syntax check, local asset/anchor reference check, and dependency-free Node interaction checks were run. They cover score accumulation, Hold, rolling a 1, reaching 100, blocked actions after a win, and reset after a win. A graphical browser is unavailable in the current environment, so responsive appearance and the browser console remain manual checks at 320px, 375px, 430px, 768px, and 1280px widths, plus a short viewport.

## Deployment

The repository's Pig Game README lists [a Netlify demo](https://neeraj-pig-game-demo.netlify.app/), but its current availability and whether it serves this working copy were not verified. The repository contains no Pig Game build configuration. To publish this project on Netlify, import the repository, leave the build command empty, and set the publish directory to `Pig-Game`. This is a static site; no deployment was triggered from this workspace.
