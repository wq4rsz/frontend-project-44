#!/usr/bin/env node
import readlineSync from 'readline-sync'
import questionAnswer from '../src/cli.js'
import { getExpressions, randomNumbers, counter, conclusion } from '../src/index.js'
const calculator = () => {
    const name = questionAnswer();
    console.log('What is the result of the expression?');
    for (let i = 0; i < 3; i++) {
        const ranFirNumber = randomNumbers(1, 30);
        const ranSecNumber = randomNumbers(1, 30);
        const chars = ['+', '-', '*'];
        const charsLength = chars.length;
        const randomChars = chars[Math.floor(Math.random() * charsLength)];
        console.log(`Question: ${ranFirNumber} ${randomChars} ${ranSecNumber}`);
        const yourAnswers = readlineSync.question('Your answer: ');
        if (!conclusion(yourAnswers, getExpressions(ranFirNumber, randomChars, ranSecNumber), name)) {
            break;
        }
    }
};
calculator();
export default calculator;