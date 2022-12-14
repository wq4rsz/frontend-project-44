#!/usr/bin/env node
import readlineSync from 'readline-sync'
import questionAnswer from '../src/cli.js'
import { randomNumbers, evenOdd, conclusion, counter } from '../src/index.js'
const parityCheck = () => {
    const name = questionAnswer();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i++) {
        const randomNumber = randomNumbers(1, 30);
        console.log(`Question: ${randomNumber}`);
        const yesOrNo = readlineSync.question('Your answer: ');
        if (!conclusion(yesOrNo, evenOdd(randomNumber), name)) {
            break;
        }
    }
};
parityCheck();
export default parityCheck;