import readlineSync from 'readline-sync'
import questionAnswer from '../src/cli.js'
import { randomNumbers, conclusion, counter, getPrime } from '../src/index.js'
const prime = () => {
    const name = questionAnswer();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    for (let i = 0; i < 3; i++) {
        const ranNumber = randomNumbers(1, 50);
        console.log(`Question: ${ranNumber}`);
        const yourAnswer = readlineSync.question('Your answer: ');
        if (!conclusion(yourAnswer, getPrime(ranNumber), name)) {
            break;
        }
    } 
};
prime();
export default prime;