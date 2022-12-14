#!/usr/bin/env node
import readlineSync from 'readline-sync'
import questionAnswer from '../src/cli.js'
import { randomNumbers, NOD, conclusion, task } from '../src/index.js'
const getNOD = () => {
    const name = questionAnswer();
    task('gcd');
    for (let i = 0; i < 3; i++) {
        const firRanNumber = randomNumbers(1, 30);
        const secRanNumber = randomNumbers(1, 30);
        console.log(`Question: ${firRanNumber} ${secRanNumber}`);
        const yourAnswer = readlineSync.question('Your amswer: ');
        if (!conclusion(yourAnswer, NOD(firRanNumber, secRanNumber), name)) {
            break;
        }
    }
};
getNOD();
export default getNOD;