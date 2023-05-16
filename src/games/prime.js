import readlineSync from 'readline-sync';
import {
  conclusion, bypass, bypass2,
} from '../index.js';

export const getPrime = (number) => {
  if (number === 1) {
    return 'no';
  }
  if (number === 2) {
    return 'yes';
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const prime = () => {
  const name = bypass();
  for (let i = 0; i < 3; i += 1) {
    const ranNumber = bypass2();
    const yourAnswer = readlineSync.question('Your answer: ');
    if (!conclusion(yourAnswer, getPrime(ranNumber), name)) {
      break;
    }
  }
};

export default prime;
