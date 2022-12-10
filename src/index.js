export let counter = 0;

export const evenOdd = (number) => {
    if (number % 2 === 0) {
        return 'yes';
    }
    else {
        return 'no';
    }
};

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

export const randomNumbers = () => {
    return Math.floor(Math.random() * 30) + 1;
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