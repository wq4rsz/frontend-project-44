import readlineSync from 'readline-sync'
import {conclusion, getPrime, bypass, bypass2} from '../index.js'

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