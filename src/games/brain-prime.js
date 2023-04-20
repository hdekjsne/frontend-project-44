import readlineSync from 'readline-sync';
import askName from '../cli.js';
import { getRandomNum } from '../utils.js';

function realIsPrime(number) {
  const dividorStock = [];
  for (let i = 1; i < number; i += 1) {
    if (number % i === 0) {
      dividorStock.push(i);
    }
  }
  if (dividorStock.length === 1) {
    return true;
  }
  return false;
}

function isPrime() {
  const name = askName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let lastWord = `Congratulations, ${name}!`;
  let correctCount = 0;
  while (correctCount < 3) {
    const num = getRandomNum(500);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ', { limit: ['yes', 'no'] });
    const boolean = realIsPrime(num);
    switch (boolean) {
      case true:
        if (answer === 'yes') {
          correctCount += 1;
          console.log('Correct!');
        } else {
          lastWord = `'no' is wrong answer. Correct answer was 'yes'.\nLet's try again, ${name}!`;
          correctCount = 3;
        }
        break;

      default:
        if (answer === 'no') {
          correctCount += 1;
          console.log('Correct!');
        } else {
          lastWord = `'yes' is wrong answer. Correct answer was 'no'.\nLet's try again, ${name}!`;
          correctCount = 3;
        }
        break;
    }
  }
  console.log(lastWord);
}

export default isPrime;
