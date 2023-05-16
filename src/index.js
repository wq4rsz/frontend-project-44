import questionAnswer from './cli.js';

let counter = 0;

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

export const bypass2 = () => {
  const ranNumber = randomNumbers(1, 50);
  console.log(`Question: ${ranNumber}`);
  return ranNumber;
};
