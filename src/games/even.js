import readlineSync from 'readline-sync';
import questionAnswer from '../cli.js';
import {
  randomNumbers, conclusion, task,
} from '../index.js';

export const evenOdd = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const parityCheck = () => {
  const name = questionAnswer();
  task('even');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = randomNumbers(1, 30);
    console.log(`Question: ${randomNumber}`);
    const yesOrNo = readlineSync.question('Your answer: ');
    if (!conclusion(yesOrNo, evenOdd(randomNumber), name)) {
      break;
    }
  }
};

export default parityCheck;
