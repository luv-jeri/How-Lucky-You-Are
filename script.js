//! Here is a code to generate a random number between 1 and 20.
var luckyNumber = Math.random() * 20; //` * generates a random number between 0 and 1 and multiply it by 20.
luckyNumber = Math.floor(luckyNumber); //` Removing the decimal part.

// ! Here is a variable to store the score.
var scoreNumber = 20;
var highScore = 0;

//! Here we are garbing the input field and the button by ID
var guessing =
  document.getElementById('guessing');
var check = document.getElementById('check');
var message = document.getElementById('message');
var score = document.getElementById('score');
var main = document.getElementById('main');
var highscore =
  document.getElementById('highscore');
var again = document.getElementById('again');

//! Here is a function to check if the number is correct
function checkNumber() {
  var userNumber = guessing.value; //` Here we are grabbing the value of the input field.

  if (luckyNumber < userNumber) {
    message.innerHTML = 'Your number is too high';
    scoreNumber = scoreNumber - 1;
    score.innerHTML = scoreNumber;
    main.style.backgroundColor = '#D82148';
  }
  if (luckyNumber > userNumber) {
    message.innerHTML = 'Your number is too low';
    scoreNumber = scoreNumber - 1;
    score.innerHTML = scoreNumber;
    main.style.backgroundColor = '#D82148';
  }
  if (luckyNumber == userNumber) {
    message.innerHTML = 'You got it!';
    main.style.backgroundColor = '#019267';
    highscore.innerHTML = scoreNumber;
    scoreNumber = 20;
    score.innerHTML = scoreNumber;
  }
}

function startAgain() {
  luckyNumber = Math.random() * 20; //` * generates a random number between 0 and 1 and multiply it by 20.
  luckyNumber = Math.floor(luckyNumber);
  scoreNumber = 20;
  score.innerHTML = scoreNumber;
  console.log(luckyNumber);
  main.style.backgroundColor = '#222';
}

//! Here are running the function when the button is clicked -> checkNumber
check.onclick = checkNumber;
again.onclick = startAgain;

console.log(luckyNumber);
