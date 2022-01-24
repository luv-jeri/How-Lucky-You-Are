let luckyNumber = Math.floor(
  Math.random() * 20
);
console.log(luckyNumber);
let userInput = 0;
let score = 20;
let highScore = 0;

document
  .querySelector('#check')
  .addEventListener(
    'click',
    function () {
      userInput =
        document.querySelector(
          '.guess'
        ).value;
      if (userInput == luckyNumber) {
        document.querySelector(
          '.message'
        ).innerHTML = 'You Win!';
        document.querySelector(
          'body'
        ).style.backgroundColor =
          '#146356';
        highScore = score;
      } else {
        if (userInput > luckyNumber) {
          document.querySelector(
            '.message'
          ).innerHTML = 'Too High';
        }
        if (userInput < luckyNumber) {
          document.querySelector(
            '.message'
          ).innerHTML = 'Too Low';
        }

        score--;
      }
      document.querySelector(
        '.score'
      ).innerHTML = score;
    }
  );
