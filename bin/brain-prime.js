#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

function realIsPrime(number) {
    const dividorStock = [];
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            dividorStock.push(i)
        }
    }
    if (dividorStock.length === 1) {
        return true;
    } else {
        return false;
    }
}

function isPrime() {
    let lastWord = `Congratulations, ${name}!`;
    let correctCount = 0;
    while (correctCount < 3) {
        let num = Math.floor(Math.random() * 500);
        console.log(`Question: ${num}`);
        let answer = readlineSync.question('Your answer: ', { limit: ['yes', 'no'] });
        const boolean = realIsPrime(num);
        switch (boolean) {
            case true:
                if (answer === 'yes') {
                    correctCount++;
                    console.log('Correct!');
                } else {
                    lastWord = `'no' is wrong answer. Correct answer was 'yes'.\nLet's try again, ${name}!`
                    correctCount = 3;
                }
                break;

            case false:
                if (answer === 'no') {
                    correctCount++;
                    console.log('Correct!');
                } else {
                    lastWord = `'yes' is wrong answer. Correct answer was 'no'.\nLet's try again, ${name}!`
                    correctCount = 3;
                }
                break
        }
    }
    console.log(lastWord);
}

isPrime();