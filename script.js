const rollADice = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const assignDice = (name) => {
  document.querySelector('#player').innerHTML = name;
};

let player1 = 0;
let player2 = 0;

let turn = true;

const findWinner = () => {
  if (player1 > 50 || player2 > 50) {
    assignDice(`Player ${turn ? '1' : '2'} wins!`);
  }
};

document.querySelector('#btn').addEventListener('click', () => {
  console.log('turn', turn);
  const dice = rollADice();
  if (turn) {
    player1 = player1 + dice;
    assignDice(`turn Player 1: ${dice}`);
  } else {
    player2 = player2 + dice;
    assignDice(`turn Player 2: ${dice}`);
  }
  turn = !turn;
  findWinner();

  document.querySelector('#p1').innerHTML = `Player 1: ${player1}`;
  document.querySelector('#p2').innerHTML = `Player 2: ${player2}`;
});
