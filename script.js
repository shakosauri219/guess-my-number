'use strict';
const buttonCheck = document.querySelector('.check');
const guess = Number(document.querySelector('.guess'));
buttonCheck.addEventListener('click', () => {
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }
});
