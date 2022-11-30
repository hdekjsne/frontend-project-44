#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('What number is missing in the progression?');

function progression() {
  let lastWord = `Congratulations, ${name}!`;
  let correctCount = 0;
  while (correctCount < 3) {
    const firstNum = Math.floor(Math.random() * 10);
    const diff = Math.floor(Math.random() * 15);

    const numbers = [];
    numbers.push(firstNum);
    for (let i = 1; i < 10; i += 1) {
      numbers.push(numbers[i - 1] + diff);
    }

    const gapIndex = Math.floor(Math.random() * 10);
    const missing = numbers[gapIndex];
    numbers[gapIndex] = '..';

    console.log(`Question: ${numbers.join(' ')}`);

    const answer = readlineSync.question('Answer: ');

    if (Number(answer) === missing) {
      correctCount += 1;
      console.log('Correct!');
    } else {
      lastWord = `'${answer}' is wrong answer. Correct answer was '${missing}'.\nLet's try again, ${name}!`;
      correctCount = 3;
    }
  }
  console.log(lastWord);
}

progression();
