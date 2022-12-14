import readlineSync from 'readline-sync';
import questionAnswer from './cli.js';

let counter = 0;

export const evenOdd = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const task = (gameName) => {
  if (gameName === 'even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  } else if (gameName === 'calc') {
    console.log('What is the result of the expression?');
  } else if (gameName === 'gcd') {
    console.log('Find the greatest common divisor of given numbers.');
  } else if (gameName === 'progression') {
    console.log('What number is missing in the progression?');
  } else if (gameName === 'prime') {
    console.log(
      'Answer "yes" if given number is prime. Otherwise answer "no".',
    );
  }
};

export const bypass = () => {
  const name = questionAnswer();
  task('prime');
  return name;
};

export const conclusion = (userAnswer, correctAnswer, username) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    counter += 1;
    if (counter === 3) {
      console.log(`Congratulations, ${username}!`);
    }
    return true;
  } if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
    counter = 0;
  }
  return false;
};

export const randomNumbers = (min, max) => {
  const number = Math.floor(Math.random() * (max - min) + min);
  return number;
};

export const getExpressions = (firstValue, charsValue, secondValue) => {
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

export function NOD(x, y) {
  if (y > x) return String(NOD(y, x));
  if (!y) return String(x);
  return String(NOD(y, x % y));
}

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
    counter += 1;
    return true;
  }
  console.log(
    `'${yourAnswer}' is wrong answer ;(. Correct answer was '${rigthAnswer}'.\nLet's try again, ${username}!`,
  );
  counter = 0;
  return false;
};

export const bypass2 = () => {
  const ranNumber = randomNumbers(1, 50);
  console.log(`Question: ${ranNumber}`);
  return ranNumber;
};

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
