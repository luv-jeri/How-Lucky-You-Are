// helper function to reset the game
const generateRandomNumber = (max) => {
  // Generate a random number between 1 and 50
  const randomNumber = Math.random() * max + 1;
  const number = Math.floor(randomNumber);
  return number;
};

const resetGame = () => {
  luckyNumber = generateRandomNumber(50);
  console.log(luckyNumber);
  score = 10;
  scoreCard.textContent = score;
  message.textContent =
    'Guess a number between 1 and 50';
  emojiBox.textContent = '🫡';
  userInputFiled.value = 0;
};

let luckyNumber = generateRandomNumber(50);
let score = 10;

let highScore = 0;

console.log(luckyNumber);
//  ------------------------------------------------------------------------------

// Take input from the user
const userInputFiled =
  document.getElementById('user-input');
// grab the button, which is going to call the function to check the number
const checkButton =
  document.getElementById('check');
// grab the message to show the result
const message =
  document.getElementsByClassName('message')[0];
const scoreCard =
  document.getElementsByClassName('score')[0];
scoreCard.textContent = score; // Set the score for the first time
const highScoreCard =
  document.getElementById('high-score');
highScoreCard.textContent = highScore;
const container =
  document.getElementsByTagName('main')[0];
const emojiBox = document.getElementById('emoji');
const resetButton =
  document.getElementById('again');
// Function to check the number
const checkNumber = () => {
  const userNumber = userInputFiled.value;

  if (userNumber > 50 || userNumber < 1) {
    message.textContent =
      'Please enter a number between 1 and 50';
    return;
  }

  if (userNumber == luckyNumber) {
    message.textContent = 'You are correct!';
    container.style.backgroundColor = '#2EB086';
    emojiBox.textContent = '😁';

    if (highScore < score) {
      highScore = score; // Set the high score equal to the score
      highScoreCard.textContent = highScore; // show the high score in the card
    }
  } else {
    // if the number is not correct, show the message too low or too high
    if (luckyNumber < userNumber) {
      message.textContent = 'Too high!';
      score = score - 1;
      scoreCard.textContent = score; // update the score and show it
      container.style.backgroundColor = '#D82148';
    }

    if (luckyNumber > userNumber) {
      message.textContent = 'Too low!';
      score = score - 1;
      scoreCard.textContent = score; // update the score and show it
      container.style.backgroundColor = '#D82148';
    }
  }
};

// Set up the event listener for the button click
checkButton.addEventListener(
  'click',
  checkNumber
);

resetButton.addEventListener('click', resetGame);
