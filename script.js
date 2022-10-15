const D = document;
const C = console;

//* Messages
const WIN_MESSAGE = 'Wow! You guessed right! 🤯, You are a lucky person!';
const LOW_MESSAGE = 'Your guess is too low! 📉 ';
const HIGH_MESSAGE = 'Your guess is too high! 📈';
const OUT_OF_GUESSES_MESSAGE = 'You have run out of guesses! 😭';
const OUT_OF_RANGE = 'Please enter a number between 0 and 20';

let luckyNumber = Math.floor(Math.random() * 20);
let score = 10;

C.log(luckyNumber);

const checkButton = D.querySelector('#check');
const guessInput = D.querySelector('#guessing');
const messageBox = D.querySelector('#message');
const mainSection = D.querySelector('main');
const leftSection = D.querySelector('.left');
const againButton = D.querySelector('#again');
const scoreSection = D.querySelector('#score');
scoreSection.innerText = score;

const check = (guess) => {
  if (guess > 20 || guess < 0) return OUT_OF_RANGE;
  if (guess === luckyNumber) return WIN_MESSAGE;
  if (guess > luckyNumber) return HIGH_MESSAGE;
  if (guess < luckyNumber) return LOW_MESSAGE;
};

const scoreProcess = (message) => {
  if (message === WIN_MESSAGE) {
    leftSection.style.visibility = 'hidden';
    mainSection.style.backgroundColor = '#367E18';
    return;
  }

  if (message === LOW_MESSAGE || message === HIGH_MESSAGE) {
    score--;
    scoreSection.textContent = score;
    mainSection.style.backgroundColor = '#DD5353';
  }

  if (score === 0) {
    leftSection.style.visibility = 'hidden';
    messageBox.textContent = OUT_OF_GUESSES_MESSAGE;
    mainSection.style.backgroundColor = '#333';
  }
};

checkButton.addEventListener('click', () => {
  const message = check(Number(guessInput.value));
  messageBox.textContent = message;
  scoreProcess(message);
});

againButton.addEventListener('click', () => {
  luckyNumber = Math.floor(Math.random() * 20);
  C.log(luckyNumber);
  score = 10;
  scoreSection.textContent = score;

  mainSection.style.backgroundColor = '#333';

  leftSection.style.visibility = 'visible';
  messageBox.textContent = 'Start guessing...';

  guessInput.value = '';
});
