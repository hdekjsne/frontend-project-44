#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

let name = readlineSync.question('May I have your name? ');
console.log('Hello, ' + name + '!');

console.log('What number is missing in the progression?')

function progression () {
    let correctCount = 0;
    while (correctCount < 3) {
        const firstNum = Math.floor(Math.random() * 20);
        const diff = Math.floor(Math.random() * 30);

        let numbers = [];
        numbers.push(firstNum);
        for (let i = 1; i < 4; i++) {
            numbers.push(numbers[i - 1] + diff);
        }
        
        const gapIndex = Math.floor(Math.random() * 4);
        let missing = numbers[gapIndex];
        numbers[gapIndex] = '...'

        console.log('Question: ' + numbers.join(', '));

        const answer = readlineSync.question('Answer: ');

        if (Number(answer) === missing) {
            correctCount++;
            console.log('Correct!');
        } else {
            console.log('Answer was ' + missing + '. Try again, ' + name + '. You can do better!');
        }
    }
    console.log('Congratulation, ' + name + '!');
}

progression();