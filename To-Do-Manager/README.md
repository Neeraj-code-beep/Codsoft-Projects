# To-Do Manager

A small browser task list for adding everyday tasks, marking them complete, and removing them. Tasks are saved locally in the current browser when storage is available.

## Features

- Add non-empty tasks up to 160 characters
- Mark tasks complete or reopen them
- Delete tasks and see total/remaining counts
- Restore saved tasks after a reload
- Safely display user-entered text as text, not HTML
- Show status messages when saved data is malformed or browser storage is unavailable

## Use the app

Open `index.html` in a browser, or start a static server from this directory:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000/`. Enter a task and select **Add task** or press `Enter`. Use its checkbox to toggle completion and its labeled Delete button to remove it.

## Technology and data

HTML, CSS, vanilla JavaScript, and the browser DOM/storage APIs. The page uses the local `bg-image.jpg` background and needs no packages, build step, account, or backend. Saved tasks use the `todos` key in `localStorage` as an array of `{ "text": "…", "completed": false }` records.

When saved JSON is invalid, the app starts with an empty list and announces the read error. If storage is unavailable or full, tasks still work for the current page view but will not survive a reload. Task text is trimmed and limited to 160 characters.

## Tests

From the repository root, run:

```sh
node --check To-Do-Manager/script.js
node --check To-Do-Manager/test.js
node To-Do-Manager/test.js
```

The dependency-free test harness covers empty input, safe rendering, adding/counting, completion/reopening, deletion, reload persistence, corrupt storage recovery, and unavailable-storage fallback.

## Limitations

Tasks are stored only in the current browser profile and are not synchronized across devices or users. There is no due date, category, search, or server backup.
