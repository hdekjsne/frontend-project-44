#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

let name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Find the greatest common divisor of given numbers.');

function cd(a, b) {
  const dividors1 = [];
  const dividors2 = [];
  let gcd = 0;
  for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
      dividors1.push(i);
    } else {
      continue;
    }
  }
  for (let i = 1; i <= b; i++) {
    if (b % i === 0) {
      dividors2.push(i);
    } else {
      continue;
    }
  }
  for (const num of dividors1) {
    if (dividors2.includes(num)) {
      gcd = num;
    }
  }
  return gcd;
}

function gcd() {
  let lastWord = 'Congratulations, ' + name + '!';
  let correctCount = 0;
  while (correctCount < 3) {
    let first = Math.floor(Math.random() * 50);
    let second = Math.floor(Math.random() * 50);
    let gcd = cd(first, second);
    console.log(`Question: ${first} ${second}`);
    let answer = readlineSync.question('Your answer: ');
    if (Number(answer) === gcd) {
      correctCount++;
      console.log('Correct!');
    } else {
      lastWord = `'${answer}' is wrong answer. Correct answer was '${gcd}'.\nLet's try again, ${name}!`
      correctCount = 3;
    }
  }
  console.log(lastWord);
}

gcd();
