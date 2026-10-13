const display = document.querySelector('#result-box');
const buttons = document.querySelector('.buttons');

let expression = '';
let justCalculated = false;
let hasError = false;

function updateDisplay(value = expression || '0') {
  display.textContent = value;
  display.classList.toggle('error', hasError);
  display.scrollLeft = display.scrollWidth;
}

function enterValue(value) {
  if (hasError) {
    expression = '';
    hasError = false;
  }

  if (/\d/.test(value)) {
    if (justCalculated) expression = '';
    justCalculated = false;
    const currentNumber = expression.split(/[+*/%\-]/).at(-1);
    expression = currentNumber === '0' ? expression.slice(0, -1) + value : expression + value;
  } else if (value === '.') {
    if (justCalculated) expression = '';
    justCalculated = false;
    const currentNumber = expression.split(/[+*/%\-]/).at(-1);
    if (!currentNumber.includes('.')) expression += currentNumber ? '.' : '0.';
  } else if ('+-*/%'.includes(value)) {
    if (justCalculated) justCalculated = false;
    if (!expression && value !== '-') {
      updateDisplay();
      return;
    }
    if (/[+*/%\-]$/.test(expression)) {
      if (value === '-' && !expression.endsWith('-')) expression += value;
      else expression = expression.slice(0, -1) + value;
    } else {
      expression += value;
    }
  }

  updateDisplay();
}

function evaluateExpression(source) {
  const tokens = source.match(/(?:\d+\.?\d*|\.\d+)|[+*/%\-]/g) || [];
  if (tokens.join('') !== source || tokens.length === 0) throw new Error('Invalid expression');
  let index = 0;

  function parsePrimary() {
    if (tokens[index] === '+' || tokens[index] === '-') {
      const sign = tokens[index++] === '-' ? -1 : 1;
      return sign * parsePrimary();
    }
    const token = tokens[index++];
    if (!token || !/^(?:\d+\.?\d*|\.\d+)$/.test(token)) throw new Error('Incomplete expression');
    return Number(token);
  }

  function parseProduct() {
    let value = parsePrimary();
    while (['*', '/', '%'].includes(tokens[index])) {
      const operator = tokens[index++];
      const right = parsePrimary();
      if ((operator === '/' || operator === '%') && right === 0) throw new Error('Cannot divide by zero');
      value = operator === '*' ? value * right : operator === '/' ? value / right : value % right;
    }
    return value;
  }

  function parseSum() {
    let value = parseProduct();
    while (tokens[index] === '+' || tokens[index] === '-') {
      const operator = tokens[index++];
      const right = parseProduct();
      value = operator === '+' ? value + right : value - right;
    }
    return value;
  }

  const result = parseSum();
  if (index !== tokens.length || !Number.isFinite(result)) throw new Error('Invalid result');
  return Number(result.toPrecision(12)).toString();
}

function calculate() {
  if (!expression || /[+*/%\-]$/.test(expression)) {
    hasError = true;
    updateDisplay('Incomplete expression');
    return;
  }
  try {
    expression = evaluateExpression(expression);
    justCalculated = true;
    hasError = false;
    updateDisplay();
  } catch (error) {
    hasError = true;
    updateDisplay(error.message);
  }
}

function clear() {
  expression = '';
  justCalculated = false;
  hasError = false;
  updateDisplay();
}

function backspace() {
  if (hasError || justCalculated) return clear();
  expression = expression.slice(0, -1);
  updateDisplay();
}

buttons.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.id === 'clear') clear();
  else if (button.id === 'backspace') backspace();
  else if (button.id === 'total') calculate();
  else enterValue(button.textContent.trim());
});

document.addEventListener('keydown', (event) => {
  if (/^[0-9.+*/%-]$/.test(event.key)) {
    event.preventDefault();
    enterValue(event.key);
  } else if (event.key === 'Enter' || event.key === '=') {
    event.preventDefault();
    calculate();
  } else if (event.key === 'Backspace') {
    event.preventDefault();
    backspace();
  } else if (event.key === 'Escape' || event.key === 'Delete') {
    clear();
  }
});
