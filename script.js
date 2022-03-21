// Generate a random number between 1 and 50
const randomNumber = Math.random() * 50 + 1;

const luckyNumber = Math.floor(randomNumber);
let score = 10;
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
const container =
  document.getElementsByTagName('main')[0];
const emogieBox =
  document.getElementById('emogie');

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
    emogieBox.textContent = '😁';
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
