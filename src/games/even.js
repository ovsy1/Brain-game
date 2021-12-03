/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import getRandomNumber from '../getRandomNumber.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const numIsEven = (num) => num % 2 === 0;

const isEvenGame = () => {
  const num = getRandomNumber(1, 100);
  const question = num;
  let correctAnswer = '';
  if (numIsEven(num)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};

export { rule, isEvenGame };
