let luckyNumber = Math.floor(Math.random() * 20); // Generates a random number between 0 and 19

let score = 20;
let highScore = 0;

let scoreEl = document.querySelector('.score');
const message = document.querySelector('.message');
let highScoreEl = document.querySelector('.highscore');
let guessEl = document.querySelector('.guess');
let body = document.querySelector('body');

scoreEl.innerHTML = score;
highScoreEl.innerHTML = highScore;

console.log(luckyNumber);

const onClick = function () {
  const userInput = guessEl.value;

  if (luckyNumber == userInput) {
    message.innerHTML = 'You guessed the correct number!';

    body.style = 'background-color: #219F94';
    if (score > highScore) {
      highScore = score;
      highScoreEl.innerHTML = highScore;
    }
  } else {
    score--;

    scoreEl.innerHTML = score;

    if (score == 0) {
      document.querySelector('#idtitle').innerHTML =
        'You have lost try again!';
      body.style = 'background-color: #E84855';
    }

    if (userInput < luckyNumber) {
      message.innerHTML = 'Too low!';
      message.style = 'color: #B8405E';
    }
    if (userInput > luckyNumber) {
      message.style = 'color: #B8405E';
      message.innerHTML = 'Too high!';
    }
  }
};

document.querySelector('#check').addEventListener('click', onClick);

document
  .querySelector('#again')
  .addEventListener('click', function () {
    document.querySelector('#idtitle').innerHTML =
      'How lucky are you?';
    luckyNumber = Math.floor(Math.random() * 20);
    console.log(luckyNumber);
    score = 20;
    scoreEl.innerHTML = score;
    message.innerHTML = 'Start guessing!';
    guessEl.value = 0;
    document.querySelector('body').style = 'background-color: #222';
  });
