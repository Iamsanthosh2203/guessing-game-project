'use strict';

// ALL DOCUMENT MANUPULATION
let randNum = Math.trunc(Math.random() * 20 + 1);

const message = document.querySelector('.message');

const checkBtn = document.querySelector('.btn.check');

const score = document.querySelector('.score');

const number = document.querySelector('.number');

const input = document.querySelector('input');

const body = document.querySelector('body');

const again = document.querySelector('.again');

let highScore = document.querySelector('.highscore');

// SETTING NUMBER
score.innerHTML = Number(20);
highScore.innerHTML = Number(0);

// FUNCTIONS
checkBtn.addEventListener('click', () => {
  // UPDATING INPUT VALUE
  number.innerHTML = input.value;

  // GAME LOGIC
  if (input.value == randNum) {
    message.textContent = '🏆 YOU WON !!!';
    highScore.innerHTML = Number(highScore.innerHTML) + Number(score.innerHTML);
    body.style.backgroundColor = 'green';
  } else if (input.value == '') {
    message.textContent = '❌ No Number';
    number.innerHTML = '?';
  } else if (input.value < 0 || input.value > 20) {
    message.textContent = '❕ Enter number between 1 to 20';
  } else if (input.value < randNum) {
    message.textContent = '🤦‍♀️ Lesser Number';
    score.innerHTML = Number(score.innerHTML - 1);
    body.style.backgroundColor = 'red';
  } else if (input.value > randNum) {
    message.textContent = '🤦‍♀️ Higher Number';
    score.innerHTML = Number(score.innerHTML - 1);
    body.style.backgroundColor = 'red';
  }
});

// RESET FUNCTION
again.addEventListener('click', () => {
  randNum = Math.trunc(Math.random() * 20 + 1);
  body.style.backgroundColor = 'black';
  number.innerHTML = '?';
  return (score.innerHTML = 20);
});
