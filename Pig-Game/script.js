'use strict';

const TARGET_SCORE = 100;
const players = [document.querySelector('.player--0'), document.querySelector('.player--1')];
const scoreDisplays = [document.querySelector('#score--0'), document.querySelector('#score--1')];
const currentDisplays = [document.querySelector('#current--0'), document.querySelector('#current--1')];
const dice = document.querySelector('.dice');
const status = document.querySelector('#game-status');
const newGameButton = document.querySelector('.btn--new');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');

let scores;
let currentScore;
let activePlayer;
let playing;

function setStatus(message) {
	status.textContent = message;
}

function startNewGame() {
	scores = [0, 0];
	currentScore = 0;
	activePlayer = 0;
	playing = true;

	scoreDisplays.forEach((display) => { display.textContent = '0'; });
	currentDisplays.forEach((display) => { display.textContent = '0'; });
	players.forEach((player, index) => {
		player.classList.remove('player--winner');
		player.classList.toggle('player--active', index === activePlayer);
	});

	dice.src = 'assets/dice-5.png';
	dice.alt = 'Die not rolled yet';
	dice.classList.add('hidden');
	rollButton.disabled = false;
	holdButton.disabled = false;
	setStatus('New game. Player 1 starts.');
}

function switchPlayer(message) {
	currentDisplays[activePlayer].textContent = '0';
	currentScore = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	players.forEach((player, index) => {
		player.classList.toggle('player--active', index === activePlayer);
	});
	setStatus(`${message} Player ${activePlayer + 1}'s turn.`);
}

rollButton.addEventListener('click', () => {
	if (!playing) return;

	const roll = Math.trunc(Math.random() * 6) + 1;
	dice.src = `assets/dice-${roll}.png`;
	dice.alt = `Die showing ${roll}`;
	dice.classList.remove('hidden');

	if (roll === 1) {
		switchPlayer(`Player ${activePlayer + 1} rolled a 1. Their turn score was lost.`);
		return;
	}

	currentScore += roll;
	currentDisplays[activePlayer].textContent = String(currentScore);
	setStatus(`Player ${activePlayer + 1} rolled ${roll}. Turn score: ${currentScore}.`);
});

holdButton.addEventListener('click', () => {
	if (!playing) return;

	scores[activePlayer] += currentScore;
	scoreDisplays[activePlayer].textContent = String(scores[activePlayer]);
	currentScore = 0;
	currentDisplays[activePlayer].textContent = '0';

	if (scores[activePlayer] >= TARGET_SCORE) {
		playing = false;
		players[activePlayer].classList.remove('player--active');
		players[activePlayer].classList.add('player--winner');
		dice.classList.add('hidden');
		rollButton.disabled = true;
		holdButton.disabled = true;
		setStatus(`Player ${activePlayer + 1} wins with ${scores[activePlayer]} points! Start a new game to play again.`);
		return;
	}

	switchPlayer(`Player ${activePlayer + 1} banked their points.`);
});

newGameButton.addEventListener('click', startNewGame);

startNewGame();
