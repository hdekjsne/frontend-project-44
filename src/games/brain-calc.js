import readlineSync from 'readline-sync';
import askName from '../cli.js';
import getRandomNum from '../utils.js';

function calc() {
  const name = askName();
  console.log('What is the result of the expression?');
  const operators = ['+', '-', '*'];
  let correctCount = 0;
  let lastWord = `Congratulations, ${name}!`;

  while (correctCount < 3) {
    const randomOper = operators[getRandomNum(3)];
    const first = getRandomNum(100);
    const second = getRandomNum(100);
    const expression = `${first} ${randomOper} ${second}`;
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    switch (randomOper) {
      case '+':
        if (Number(answer) === Number(first) + Number(second)) {
          correctCount += 1;
          console.log('Correct!');
        } else {
          lastWord = `'${answer}' is wrong answer. Correct answer was '${Number(first) + Number(second)}'.\nLet's try again, ${name}!`;
          correctCount = 3;
        }
        break;

      case '-':
        if (Number(answer) === Number(first) - Number(second)) {
          correctCount += 1;
          console.log('Correct!');
        } else {
          lastWord = `'${answer}' is wrong answer. Correct answer was '${Number(first) - Number(second)}'.\nLet's try again, ${name}!`;
          correctCount = 3;
        }
        break;

      default:
        if (Number(answer) === Number(first) * Number(second)) {
          correctCount += 1;
          console.log('Correct!');
        } else {
          lastWord = `'${answer}' is wrong answer. Correct answer was '${Number(first) * Number(second)}'.\nLet's try again, ${name}!`;
          correctCount = 3;
        }
        break;
    }
  }
  console.log(lastWord);
}

export default calc;
