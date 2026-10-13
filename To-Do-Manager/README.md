# To-Do Manager

A small task list for capturing and tracking everyday work. It keeps the original scenic background and simple layout, with task data saved in the current browser.

## Features

- Add tasks up to 160 characters; blank and whitespace-only entries are rejected.
- Mark tasks complete or reopen them with a labeled checkbox.
- Delete a task with its accessible Delete button.
- See total and remaining task counts and an empty-list message.
- Save and restore tasks with browser `localStorage`.
- Keep working in the current page if storage is blocked; storage and corrupt-data errors are announced.

## Technology

HTML, CSS, and vanilla JavaScript. There is no framework, package install, backend, account, or build step. The background is `bg-image.jpg`.

## Run locally

Open `index.html` in a browser, or start a static server from this folder:

```powershell
python -m http.server 8000
```

Open `http://localhost:8000`. Stop the server with `Ctrl+C`.

## How tasks work

Submit the form with **Add task** or `Enter`. Task text is trimmed, empty text is rejected, and task text is added with DOM `textContent` so HTML-like input is displayed as text. Use the checkbox or its label to toggle completion; use the Delete button to remove an item. The task count updates after each change.

Tasks are stored under the existing `todos` key in localStorage as an array of `{ "text": "…", "completed": false }` records. The format remains compatible with tasks saved by the earlier version. If saved JSON is invalid, the app starts an empty list and reports the problem; the next saved change replaces the malformed value. If storage is unavailable or full, changes remain usable in the open page but will not survive a reload.

## Files

```text
To-Do-Manager/
├── index.html   # Accessible form, task list, and status areas
├── style.css    # Scenic background and responsive task layout
├── script.js    # Task rendering and localStorage behavior
├── test.js      # Dependency-free Node interaction tests
└── bg-image.jpg # Existing background image
```

## Accessibility

The input has a visible label for assistive technology, and task completion uses native checkboxes with associated labels. Add and Delete controls are buttons. Keyboard focus is visible; after completing or deleting a task, focus returns to a useful control. Updates and storage errors are announced through a polite status message. Completed tasks use both a checkmark state and strike-through text, not color alone.

## Verification

Run the interaction harness with `node test.js`. It covers empty input, safe rendering of HTML-like text, adding and counting tasks, completion and reopening, deletion, persistence after app reload, malformed saved data, and unavailable storage. Also run `node --check script.js` and `node --check test.js`.

Graphical browser checks were not available in the authoring environment. Manually verify the layout at 320px, 375px, 430px, 768px, and 1280px, plus a short viewport; test keyboard use, localStorage after reload, storage errors, and the browser console.

## Deployment

The public repository's To-Do Manager README lists [a Netlify demo](https://to-do-manager-demo.netlify.app/), but its current availability and whether it serves this working copy could not be verified. No repository deployment configuration was found. To publish on Netlify, import the repository, leave the build command blank, and set the publish directory to `To-Do-Manager`. This is a static site; no deployment was triggered.
