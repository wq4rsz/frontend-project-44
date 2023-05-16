import readlineSync from 'readline-sync';
import questionAnswer from '../cli.js';
import { task, randomNumbers } from '../index.js';

export const randomProgression = (username) => {
  const arrayRanNum = [];
  const ranArrLength = randomNumbers(5, 10);
  let ranFirNumber = randomNumbers(1, 5);
  const step = Number(randomNumbers(1, 5));
  for (let i = 0; i < ranArrLength; i += 1) {
    arrayRanNum.push(ranFirNumber);
    ranFirNumber += step;
  }
  const ranIndex = randomNumbers(0, arrayRanNum.length);
  const rigthAnswer = arrayRanNum[ranIndex];
  arrayRanNum[ranIndex] = '..';
  console.log(`Question: ${arrayRanNum.join(' ')}`);
  const yourAnswer = readlineSync.question('Your answer: ');
  if (yourAnswer === String(rigthAnswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `'${yourAnswer}' is wrong answer ;(. Correct answer was '${rigthAnswer}'.\nLet's try again, ${username}!`,
  );
  return false;
};

const progression = () => {
  const name = questionAnswer();
  task('progression');
  for (let i = 0; i < 3; i += 1) {
    if (!randomProgression(name)) {
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
  }
};

export default progression;
