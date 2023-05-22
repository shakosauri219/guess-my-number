'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const buttonCheck = document.querySelector('.check');
const resetButton = document.querySelector('.again');
const displayMessage = function (text) {
  document.querySelector('.message').textContent = text;
};

buttonCheck.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  // if no number
  if (!guess && score > 0) {
    displayMessage('No number');
  }

  // if correct guess
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // if guess is too high
  } else if (guess !== secretNumber) {
    if (score >= 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lose the game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.guess').value = '';
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
});
