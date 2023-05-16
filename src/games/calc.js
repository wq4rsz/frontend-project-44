import readlineSync from 'readline-sync';
import questionAnswer from '../cli.js';
import {
  randomNumbers, conclusion, task,
} from '../index.js';

const getExpressions = (firstValue, charsValue, secondValue) => {
  let result = '';
  if (charsValue === '+') {
    result += String(firstValue + secondValue);
  } if (charsValue === '-') {
    result += String(firstValue - secondValue);
  } if (charsValue === '*') {
    result += String(firstValue * secondValue);
  }
  return result;
};

const calculator = () => {
  const name = questionAnswer();
  task('calc');
  for (let i = 0; i < 3; i += 1) {
    const ranFirNumber = randomNumbers(1, 30);
    const ranSecNumber = randomNumbers(1, 30);
    const chars = ['+', '-', '*'];
    const charsLength = chars.length;
    const randomChars = chars[Math.floor(Math.random() * charsLength)];
    console.log(`Question: ${ranFirNumber} ${randomChars} ${ranSecNumber}`);
    const yourAnswers = readlineSync.question('Your answer: ');
    if (
      !conclusion(
        yourAnswers,
        getExpressions(ranFirNumber, randomChars, ranSecNumber),
        name,
      )
    ) {
      break;
    }
  }
};

export default calculator;
