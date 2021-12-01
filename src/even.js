/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable eol-last */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';
import { getRandomNumber, userName } from './index.js';

const isEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const countRounds = 3;

  for (let i = 0; i < countRounds; i += 1) {
    const randomNumber = getRandomNumber(1, 50);
    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');
    if (randomNumber % 2 === 0) {
      if (userAnswer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer wan 'yes'`);
        console.log(`Let's try again, ${userName}`);
        return;
      }
    }

    if (randomNumber % 2 !== 0) {
      if (userAnswer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer wan 'yes'`);
        console.log(`Let's try again, ${userName}`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default isEvenGame;