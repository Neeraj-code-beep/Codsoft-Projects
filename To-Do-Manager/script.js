'use strict';

const STORAGE_KEY = 'todos';
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const todosList = document.querySelector('#todos');
const count = document.querySelector('#todo-count');
const status = document.querySelector('#status');

let nextTaskId = 1;

function setStatus(message) {
	status.textContent = message;
}

function loadTasks() {
	try {
		const savedTasks = window.localStorage.getItem(STORAGE_KEY);
		if (savedTasks === null) return [];

		const parsedTasks = JSON.parse(savedTasks);
		if (!Array.isArray(parsedTasks)) throw new Error('Saved tasks are not a list.');

		return parsedTasks
			.filter(task => task && typeof task.text === 'string' && task.text.trim())
			.map(task => ({
				id: nextTaskId++,
				text: task.text.trim().slice(0, 160),
				completed: task.completed === true,
			}));
	} catch {
		setStatus('Saved tasks could not be read. Add a task to start a fresh list.');
		return [];
	}
}

let tasks = loadTasks();

function saveTasks(message) {
	try {
		const savedTasks = tasks.map(({ text, completed }) => ({ text, completed }));
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(savedTasks));
		setStatus(message);
	} catch {
		setStatus('Your changes are visible here, but this browser could not save them.');
	}
}

function updateCount() {
	const remaining = tasks.filter(task => !task.completed).length;
	const taskWord = tasks.length === 1 ? 'task' : 'tasks';
	count.textContent = `${tasks.length} ${taskWord} · ${remaining} left`;
}

function renderTasks() {
	todosList.replaceChildren();
	updateCount();

	if (tasks.length === 0) {
		const emptyMessage = document.createElement('li');
		emptyMessage.className = 'empty-state';
		emptyMessage.textContent = 'No tasks yet. Add one above.';
		todosList.appendChild(emptyMessage);
		return;
	}

	tasks.forEach(task => {
		const row = document.createElement('li');
		row.className = task.completed ? 'todo-row completed' : 'todo-row';

		const checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.className = 'todo-checkbox';
		checkbox.id = `todo-checkbox-${task.id}`;
		checkbox.dataset.taskId = String(task.id);
		checkbox.checked = task.completed;

		const label = document.createElement('label');
		label.className = 'todo-text';
		label.htmlFor = checkbox.id;
		label.textContent = task.text;

		const deleteButton = document.createElement('button');
		deleteButton.type = 'button';
		deleteButton.className = 'delete-button';
		deleteButton.id = `delete-task-${task.id}`;
		deleteButton.dataset.taskId = String(task.id);
		deleteButton.setAttribute('aria-label', `Delete task: ${task.text}`);
		deleteButton.textContent = '×';

		row.append(checkbox, label, deleteButton);
		todosList.appendChild(row);
	});
}

form.addEventListener('submit', event => {
	event.preventDefault();
	const text = input.value.trim();

	if (!text) {
		setStatus('Enter a task before adding it.');
		input.focus();
		return;
	}

	if (text.length > 160) {
		setStatus('Tasks can be up to 160 characters.');
		input.focus();
		return;
	}

	tasks.push({ id: nextTaskId++, text, completed: false });
	input.value = '';
	renderTasks();
	saveTasks(`Added task: ${text}`);
	input.focus();
});

todosList.addEventListener('change', event => {
	const checkbox = event.target;
	if (!checkbox.matches('.todo-checkbox')) return;

	const task = tasks.find(item => item.id === Number(checkbox.dataset.taskId));
	if (!task) return;

	task.completed = checkbox.checked;
	renderTasks();
	saveTasks(`${task.completed ? 'Completed' : 'Reopened'} task: ${task.text}`);
	document.getElementById(checkbox.id).focus();
});

todosList.addEventListener('click', event => {
	const deleteButton = event.target.closest('.delete-button');
	if (!deleteButton) return;

	const index = tasks.findIndex(item => item.id === Number(deleteButton.dataset.taskId));
	if (index < 0) return;

	const [deletedTask] = tasks.splice(index, 1);
	renderTasks();
	saveTasks(`Deleted task: ${deletedTask.text}`);

	const nextTask = tasks[Math.min(index, tasks.length - 1)];
	if (nextTask) document.getElementById(`delete-task-${nextTask.id}`).focus();
	else input.focus();
});

renderTasks();
