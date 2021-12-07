/* eslint-disable linebreak-style */
import getRandomNumber from '../getRandomNumber.js';
import startBrainGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const findGreaterDivisor = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }
  return findGreaterDivisor(secondNumber, firstNumber % secondNumber);
};

const gcdGame = () => {
  const firstRandomNumber = getRandomNumber(0, 50);
  const secondRandomNumber = getRandomNumber(0, 50);

  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const correctAnswer = String(findGreaterDivisor(firstRandomNumber, secondRandomNumber));
  return [question, correctAnswer];
};

const startGcdGame = () => startBrainGame(rule, gcdGame);

export default startGcdGame;
