let luckyNumber = Math.floor(Math.random() * 20);
console.log(luckyNumber);

let userInput = 0;
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
  document.querySelector('.message').innerHTML = message;
};

// DRY -> Don't Repeat Yourself

document
  .querySelector('#check')
  .addEventListener('click', function () {
    userInput = document.querySelector('.guess').value;

    userInput = Number(userInput); // "3" -> 3

    if (userInput === luckyNumber) {
      displayMessage('You Win!');
      document.querySelector('.message').style = 'color : #D67D3E';
      document.querySelector('body').style.backgroundColor =
        '#146356';

      highScore = score;
    } else {
      if (userInput > luckyNumber) {
        displayMessage('Too High');
      }

      if (userInput < luckyNumber) {
        displayMessage('Too Low');
      }

      document.querySelector('.message').style = 'color: red;';
      score--;
    }

    document.querySelector('.score').innerHTML = score;
  });
