#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

let name = readlineSync.question('May I have your name? ');
console.log('Hello, ' + name + '!');

console.log(`Answer "yes" if the number is even, otherwise answer "no"`);

let randomNum = Math.round(Math.random() * 1000);
let correctCount = 0;

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
                        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.`)
                        randomNum = Math.round(Math.random() * 1000);
                        break;
                }
                break;
            
            case false:
                switch (answer) {
                    case 'yes':
                        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`);
                        randomNum = Math.round(Math.random() * 1000);
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
    console.log(`Congratulations, ` + name + '!');
}

isEven();
