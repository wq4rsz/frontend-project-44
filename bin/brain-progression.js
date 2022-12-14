#!/usr/bin/env node
import readlineSync from 'readline-sync'
import questionAnswer from '../src/cli.js'
import { randomProgression, randomNumbers, counter } from '../src/index.js'
const progression = () => {
    const name = questionAnswer();
    console.log('What number is missing in the progression?');
    for (let i = 0; i < 3; i++) {
        if (!randomProgression(name)) {
            break;
        }
        if (counter === 3) {
            console.log(`Congratulations, ${name}!`);
            return;
        }
    }
};
progression();
export default progression;