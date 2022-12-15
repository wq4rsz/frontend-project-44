import questionAnswer from '../cli.js'
import {randomProgression, counter, task} from '../index.js'

const progression = () => {
  const name = questionAnswer();
  task('progression');
  for (let i = 0; i < 3; i += 1) {
    if (!randomProgression(name)) {
      break;
    }
    if (counter === 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
  }
};

export default progression;