import readlineSync from 'readline-sync';
import questionAnswer from '../cli.js';
import {
  randomNumbers, conclusion, task,
} from '../index.js';

export function NOD(x, y) {
  if (y > x) return String(NOD(y, x));
  if (!y) return String(x);
  return String(NOD(y, x % y));
}

const getNOD = () => {
  const name = questionAnswer();
  task('gcd');
  for (let i = 0; i < 3; i += 1) {
    const firRanNumber = randomNumbers(1, 30);
    const secRanNumber = randomNumbers(1, 30);
    console.log(`Question: ${firRanNumber} ${secRanNumber}`);
    const yourAnswer = readlineSync.question('Your amswer: ');
    if (!conclusion(yourAnswer, NOD(firRanNumber, secRanNumber), name)) {
      break;
    }
  }
};

export default getNOD;
