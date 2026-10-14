# Pig-Game

A two-player, turn-based dice game. Each player chooses whether to keep building a temporary turn score or bank it in their total.

## Rules

- Player 1 starts. Players alternate turns.
- Roll adds the die value to the active player's turn score for results 2 through 6.
- Rolling a 1 loses the active player's unbanked turn score and passes the turn.
- Hold adds the turn score to that player's total and passes the turn. Holding with a zero turn score still passes the turn.
- The first player whose banked total reaches or exceeds 100 wins. Roll and Hold are disabled until a new game begins.
- New game resets both totals, turn scores, active player, die, winner state, status, and controls.

The die is selected randomly by the browser. The flowchart image in `assets/` is included as a project asset; the rules above reflect the implemented JavaScript.

## Controls and accessibility

Use **Roll dice**, **Hold**, and **New game** with a mouse, touch, or keyboard. The buttons are native keyboard controls with visible focus. Die descriptions update as it is rolled, and a polite live status reports turns and wins. Reduced-motion preferences shorten the page transitions.

## Technology and assets

HTML, CSS, and vanilla JavaScript. The stylesheet requests Nunito from Google Fonts with a local fallback. Dice images `assets/dice-1.png` through `assets/dice-6.png` and `assets/pig-game-flowchart.png` are stored locally. No package install, build step, backend, or score persistence is used.

## Run locally

Open `index.html` in a browser, or start a static server from this directory:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

## Check and limitations

From the repository root, run `node --check Pig-Game/script.js`. There is no committed automated Pig-Game test. Verify turn changes, the 1 rule, holding, the 100-point win, and new-game reset in a browser. Since rolls use `Math.random()`, exact rolls are not selectable through the interface.
