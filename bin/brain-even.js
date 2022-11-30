#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no"');

let randomNum = Math.round(Math.random() * 1000);
let correctCount = 0;
let lastWord = `Congratulations, ${name}!`;

function isEven() {
  while (correctCount < 3) {
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ', { limit: ['yes', 'no'] });
    const boolean = (randomNum % 2 === 0);
    switch (boolean) {
      case true:
        switch (answer) {
          case 'yes':
            console.log('Correct!');
            randomNum = Math.round(Math.random() * 1000);
            correctCount += 1;
            break;

          default:
            lastWord = `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`;
            correctCount = 3;
            break;
        }
        break;

      default:
        switch (answer) {
          case 'yes':
            lastWord = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`;
            correctCount = 3;
            break;

          default:
            console.log('Correct!');
            randomNum = Math.round(Math.random() * 1000);
            correctCount += 1;
            break;
        }
        break;
    }
  }
  console.log(lastWord);
}

isEven();
