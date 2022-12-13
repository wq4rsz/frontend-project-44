import readlineSync from 'readline-sync'
export let counter = 0;

export const evenOdd = (number) => {
    if (number % 2 === 0) {
        return 'yes';
    }
    else {
        return 'no';
    }
};

export const task = () => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
}

export const conclusion = (userAnswer, correctAnswer, username) => {
    if (userAnswer === correctAnswer) { 
        console.log('Correct!');
        counter ++;
        if (counter === 3) {
            console.log(`Congratulations, ${username}!`)
        }
        return true;
    } 
    else if (userAnswer !== correctAnswer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
        counter = 0;
        return false;
    }
};

export const randomNumbers = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

export const getExpressions = (firstValue, charsValue, secondValue) => {
    if (charsValue === '+') {
        return String(firstValue + secondValue);
    }
    else if (charsValue === '-') {
        return String(firstValue - secondValue);
    }
    else if (charsValue === '*') {
        return String(firstValue * secondValue);
    }
};

export function NOD (x, y) {
	if (y > x) return String(NOD(y, x));
	if (!y) return String(x);
	return String(NOD(y, x % y));
};

export const randomProgression = (username) => {
    let arrayRanNum = [];
    const ranArrLength = randomNumbers(5, 10);
    let ranFirNumber = randomNumbers(1, 5);
    let step = randomNumbers(1, 5);
    for (let i = 0; i < ranArrLength; i++) {
        arrayRanNum.push(ranFirNumber);
        ranFirNumber += step;
    }
    const ranIndex = randomNumbers(0, arrayRanNum.length);
    const rigthAnswer = arrayRanNum[ranIndex];
    arrayRanNum[ranIndex] = '..';
    console.log(`Question: ${arrayRanNum.join(' ')}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (Number(yourAnswer) - arrayRanNum[ranIndex - 1] === step) {
        console.log('Correct!');
        counter ++;
        return true;
    }
    else {
        console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${rigthAnswer}'.\nLet's try again, ${username}!`);
        counter = 0;
        return false;
    }
};

export const getPrime = (number) => {
    if (number === 1) {
        return 'no';
    }
    if (number === 2) {
        return 'yes';
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return 'no';
        }
    }
    return 'yes';
};