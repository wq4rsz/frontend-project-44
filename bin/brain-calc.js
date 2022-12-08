import readlineSync from 'readline-sync'
const correctAnswer = (firstValue, charsValue, secondValue) => {
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

const calculator = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('What is the result of the expression?');
    for (let i = 0; i < 3; i++) {
        const ranFirNumber = Math.floor(Math.random() * 30) + 1;
        const ranSecNumber = Math.floor(Math.random() * 30) + 1;
        const chars = ['+', '-', '*'];
        const charsLength = chars.length;
        const randomChars = chars[Math.floor(Math.random() * charsLength)];
        console.log(`Question: ${ranFirNumber} ${randomChars} ${ranSecNumber}`);
        const yourAnswer = readlineSync.question('Your answer: ');
        if (yourAnswer === correctAnswer(ranFirNumber, randomChars, ranSecNumber)) {
            console.log('Correct!');
        }
        else {
            console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer(ranFirNumber, randomChars, ranSecNumber)}'.\nLet's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
};
calculator();
export default calculator;