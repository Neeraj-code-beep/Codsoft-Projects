'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

class FakeElement {
	constructor(tagName = 'div') {
		this.tagName = tagName;
		this.children = [];
		this.dataset = {};
		this.attributes = {};
		this.listeners = {};
		this.classNames = new Set();
		this.classList = {
			add: name => this.classNames.add(name),
			remove: name => this.classNames.delete(name),
			contains: name => this.classNames.has(name),
		};
		this.textContent = '';
		this.value = '';
		this.checked = false;
	}

	set className(value) { this.classNames = new Set(value.split(/\s+/).filter(Boolean)); }
	get className() { return [...this.classNames].join(' '); }

	addEventListener(type, handler) { this.listeners[type] = handler; }
	setAttribute(name, value) { this.attributes[name] = value; }
	append(...elements) { elements.forEach(element => this.appendChild(element)); }
	appendChild(element) { this.children.push(element); return element; }
	replaceChildren(...elements) { this.children = elements; }
	matches(selector) { return selector.startsWith('.') && this.classList.contains(selector.slice(1)); }
	closest(selector) { return this.matches(selector) ? this : null; }
	focus() { this.focused = true; }

	dispatch(type, target = this) {
		const handler = this.listeners[type];
		if (handler) handler({ target, preventDefault() {} });
	}
}

function makeStorage(initialValue = null) {
	return {
		value: initialValue,
		getItem() { return this.value; },
		setItem(key, value) { this.value = value; },
	};
}

function startApp(storage) {
	const elements = {
		'#form': new FakeElement('form'),
		'#input': new FakeElement('input'),
		'#todos': new FakeElement('ul'),
		'#todo-count': new FakeElement('p'),
		'#status': new FakeElement('p'),
	};
	const document = {
		querySelector(selector) { return elements[selector]; },
		createElement(tagName) { return new FakeElement(tagName); },
		getElementById(id) {
			function find(element) {
				if (element.id === id) return element;
				for (const child of element.children) {
					const result = find(child);
					if (result) return result;
				}
				return null;
			}
			return find(elements['#todos']);
		},
	};
	const window = { localStorage: storage };
	const script = fs.readFileSync(path.join(__dirname, 'script.js'), 'utf8');
	vm.runInNewContext(script, { document, window });
	return { ...elements, document };
}

function rowFor(app, index = 0) {
	return app['#todos'].children.filter(row => row.classList.contains('todo-row'))[index];
}

const storage = makeStorage();
let app = startApp(storage);
assert.equal(app['#todos'].children[0].textContent, 'No tasks yet. Add one above.');
assert.equal(app['#todo-count'].textContent, '0 tasks · 0 left');

app['#input'].value = '   ';
app['#form'].dispatch('submit');
assert.equal(app['#todos'].children[0].textContent, 'No tasks yet. Add one above.');
assert.match(app['#status'].textContent, /Enter a task/);

const unsafeText = '<img src=x onerror=alert(1)>';
app['#input'].value = `  ${unsafeText}  `;
app['#form'].dispatch('submit');
assert.equal(rowFor(app).children[1].textContent, unsafeText);
assert.equal(rowFor(app).children[1].children.length, 0);
assert.equal(app['#todo-count'].textContent, '1 task · 1 left');
assert.deepEqual(JSON.parse(storage.value), [{ text: unsafeText, completed: false }]);

let checkbox = rowFor(app).children[0];
checkbox.checked = true;
app['#todos'].dispatch('change', checkbox);
assert(rowFor(app).classList.contains('completed'));
assert.equal(app['#todo-count'].textContent, '1 task · 0 left');
assert.equal(app.document.getElementById(checkbox.id).focused, true);

app = startApp(storage);
assert(rowFor(app).classList.contains('completed'));
assert.equal(rowFor(app).children[1].textContent, unsafeText);

checkbox = rowFor(app).children[0];
checkbox.checked = false;
app['#todos'].dispatch('change', checkbox);
assert(!rowFor(app).classList.contains('completed'));
assert.equal(app['#todo-count'].textContent, '1 task · 1 left');

const deleteButton = rowFor(app).children[2];
app['#todos'].dispatch('click', deleteButton);
assert.equal(app['#todo-count'].textContent, '0 tasks · 0 left');
assert.equal(app['#input'].focused, true);
assert.deepEqual(JSON.parse(storage.value), []);

app = startApp(makeStorage('{broken json'));
assert.match(app['#status'].textContent, /could not be read/i);
app['#input'].value = 'Recovered task';
app['#form'].dispatch('submit');
assert.equal(rowFor(app).children[1].textContent, 'Recovered task');

const unavailableStorage = {
	getItem() { throw new Error('Storage unavailable'); },
	setItem() { throw new Error('Storage unavailable'); },
};
app = startApp(unavailableStorage);
app['#input'].value = 'Session-only task';
app['#form'].dispatch('submit');
assert.equal(rowFor(app).children[1].textContent, 'Session-only task');
assert.match(app['#status'].textContent, /could not save/i);

console.log('Passed: empty input, safe text rendering, add/count, completion and reopen, delete, reload persistence, corrupt storage recovery, and unavailable storage fallback.');
