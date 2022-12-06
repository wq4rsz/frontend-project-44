import readlineSync from 'readline-sync'
const parityCheck = () => {
    console.log('brain-games\nWelcome to the Brain Games!');
    const username = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${username}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
    console.log(`Question: ${randomNumber}`);
    const yesOrNo = readlineSync.question('Your answer: ');
    if (randomNumber % 2 === 0 && yesOrNo === 'yes') {
        console.log('Correct!');
    } else if (randomNumber % 2 !== 0 && yesOrNo === 'no') {
        console.log('Correct!');
    } else if (yesOrNo === 'yes' && randomNumber % 2 !== 0) {
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${username}!`);
            return;
    } else if (randomNumber % 2 === 0 && yesOrNo === 'no') {
            console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${username}!`);
            return;
    } else {
        console.log(`${yesOrNo} is wrong answer ;(\nLet's try again, ${username}!`)
        return;
    }
   }
  console.log(`Congratulations, ${username}!`);
};
parityCheck();
export default parityCheck;