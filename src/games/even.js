import getRandomNumber from '../getRandomNumber.js';
import startBrainGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const isEvenGame = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startIsEvenGame = () => startBrainGame(rule, isEvenGame);

export default startIsEvenGame;
