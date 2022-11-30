#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

let name = readlineSync.question('May I have your name? ');
console.log('Hello, ' + name + '!');

console.log('What is the result of the expression?');

function calc () {
    const operators = ['+', '-', '*'];
    let correctCount = 0;
    let lastWord = 'Congratulations, ' + name + '!';

    while (correctCount < 3) {
        let randomOper = operators[Math.floor(Math.random() * 3)];
        let first = Math.round(Math.random() * 100);
        let second = Math.round(Math.random() * 100);  
        let expression = first + ' ' + randomOper + ' ' + second; 
        console.log('Question: ' + expression);
        let answer = readlineSync.question('Your answer: ');
        switch (randomOper) {
            case '+':
                if (Number(answer) === Number(first) + Number(second)) {
                    correctCount++;
                    console.log('Correct!');
                } else {
                    lastWord = answer + ' is wrong answer ;(. Correct answer was ' + (Number(first) + Number(second));
                    correctCount = 3;
                }        
                break;

            case '-':
                if (Number(answer) === Number(first) - Number(second)) {
                    correctCount++;
                    console.log('Correct!');
                } else {
                    lastWord = answer + ' is wrong answer ;(. Correct answer was ' + (Number(first) - Number(second));
                    correctCount = 3;
                }
                break;

            case '*':
                if (Number(answer) === Number(first) * Number(second)) {
                    correctCount++;
                    console.log('Correct!');
                } else {
                    lastWord =  answer + ' is wrong answer ;(. Correct answer was ' + (Number(first) * Number(second));
                    correctCount = 3;
                }
                break;
        }
    }
    console.log(lastWord)
}

calc();