import readlineSync from 'readline-sync';
import askName from '../cli.js';
import getRandomNum from '../utils.js';

function isEven() {
  const name = askName();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let randomNum = getRandomNum(1000);
  let correctCount = 0;
  let lastWord = `Congratulations, ${name}!`;

  while (correctCount < 3) {
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ', { limit: ['yes', 'no'] });
    const boolean = (randomNum % 2 === 0);
    switch (boolean) {
      case true:
        switch (answer) {
          case 'yes':
            console.log('Correct!');
            randomNum = getRandomNum(1000);
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
            randomNum = getRandomNum(1000);
            correctCount += 1;
            break;
        }
        break;
    }
  }
  console.log(lastWord);
}

export default isEven;
