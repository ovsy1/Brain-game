import getRandomNumber from '../getRandomNumber.js';

const rule = 'Find the greatest common divisor of given numbers.';

const findGreaterDivisor = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }
  return findGreaterDivisor(secondNumber, firstNumber % secondNumber);
};

const gcdGame = () => {
  const firstNumber = getRandomNumber(0, 50);
  const secondNumber = getRandomNumber(0, 50);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(findGreaterDivisor(firstNumber, secondNumber));
  return [question, correctAnswer];
};

const nodGame = () => [rule, gcdGame];
export default nodGame;
