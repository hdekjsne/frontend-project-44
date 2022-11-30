#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

let name = readlineSync.question('May I have your name? ');
console.log('Hello, ' + name + '!');

console.log(`Answer "yes" if the number is even, otherwise answer "no"`);

let randomNum = Math.round(Math.random() * 1000);
let correctCount = 0;
let lastWord = 'Congratulations, ' + name + '!';

function isEven () {
    while (correctCount < 3) {
        console.log('Question: ' + randomNum);
        let answer = readlineSync.question('Your answer: ', {limit: ['yes', 'no']});
        let boolean = (randomNum % 2 === 0);
        switch (boolean) {
            case true:
                switch (answer) {
                    case 'yes':
                        console.log('Correct!');
                        randomNum = Math.round(Math.random() * 1000);
                        correctCount++;
                        break;

                    case 'no':
                        lastWord = `'no' is wrong answer ;(. Correct answer was 'yes'.`;
                        correctCount = 3;
                        break;
                }
                break;
            
            case false:
                switch (answer) {
                    case 'yes':
                        lastWord = `'yes' is wrong answer ;(. Correct answer was 'no'.`;
                        correctCount = 3;
                        break;

                    case 'no':
                        console.log('Correct!');
                        randomNum = Math.round(Math.random() * 1000);
                        correctCount++;
                        break;
                }
            break;
        }
    }
    console.log(lastWord);
}

isEven();
