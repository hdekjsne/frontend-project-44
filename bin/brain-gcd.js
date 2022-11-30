#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Find the greatest common divisor of given numbers.');

function cd(a, b) {
  const dividors1 = [];
  const dividors2 = [];
  let result = 0;
  for (let i = 1; i <= a; i += 1) {
    if (a % i === 0) {
      dividors1.push(i);
    }
  }
  for (let i = 1; i <= b; i += 1) {
    if (b % i === 0) {
      dividors2.push(i);
    }
  }
  for (const num of dividors1) {
    if (dividors2.includes(num)) {
      result = num;
    }
  }
  return result;
}

function gcd() {
  let lastWord = `Congratulations, ${name}!`;
  let correctCount = 0;
  while (correctCount < 3) {
    const first = Math.floor(Math.random() * 50 + 1);
    const second = Math.floor(Math.random() * 50 + 1);
    const gcd = cd(first, second);
    console.log(`Question: ${first} ${second}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === gcd) {
      correctCount += 1;
      console.log('Correct!');
    } else {
      lastWord = `'${answer}' is wrong answer. Correct answer was '${gcd}'.\nLet's try again, ${name}!`;
      correctCount = 3;
    }
  }
  console.log(lastWord);
}

gcd();
