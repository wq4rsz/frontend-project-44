import readlineSync from 'readline-sync'
import questionAnswer from '../cli.js'
import { randomNumbers, evenOdd, conclusion, counter, task } from '../index.js'
const parityCheck = () => {
    const name = questionAnswer();
    task('even');
    for (let i = 0; i < 3; i++) {
        const randomNumber = randomNumbers(1, 30);
        console.log(`Question: ${randomNumber}`);
        const yesOrNo = readlineSync.question('Your answer: ');
        if (!conclusion(yesOrNo, evenOdd(randomNumber), name)) {
            break;
        }
    }
};
export default parityCheck;