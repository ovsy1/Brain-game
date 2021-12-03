/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import getRandomNumber from '../getRandomNumber.js';

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

export { rule, gcdGame };
