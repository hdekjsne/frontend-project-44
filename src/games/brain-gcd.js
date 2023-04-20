import readlineSync from 'readline-sync';
import askName from '../cli.js';
import getRandomNum from '../utils.js';

function cd(a, b) {
  let smallest = 0;
  if (a > b) {
    smallest = a;
  } else {
    smallest = b;
  }
  let currentCD = 0;
  for (let i = 1; i <= smallest; i += 1) {
    if (a % i === 0 && b % i === 0) {
      currentCD = i;
    }
  }
  return currentCD;
}

function gcd() {
  const name = askName();
  let lastWord = `Congratulations, ${name}!`;
  console.log('Find the greatest common divisor of given numbers.');
  let correctCount = 0;
  while (correctCount < 3) {
    const first = getRandomNum(50) + 1;
    const second = getRandomNum(50) + 1;
    const greatestD = cd(first, second);
    console.log(`Question: ${first} ${second}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === greatestD) {
      correctCount += 1;
      console.log('Correct!');
    } else {
      lastWord = `'${answer}' is wrong answer. Correct answer was '${greatestD}'.\nLet's try again, ${name}!`;
      correctCount = 3;
    }
  }
  console.log(lastWord);
}

export default gcd;
