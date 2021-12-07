/* eslint-disable linebreak-style */
import getRandomNumber from '../getRandomNumber.js';
import startBrainGame from '../index.js';

const mathSigns = ['+', '-', '*'];

const rule = 'What is the result of the expression?';

const calculator = (firstNum, secondNum, mathSign) => {
  switch (mathSign) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      return `${mathSign} is not supported.`;
  }
};

const calculatorGame = () => {
  const countMathSigns = mathSigns.length;
  const firstNum = getRandomNumber(1, 50);
  const secondNum = getRandomNumber(1, 50);
  const randomMathSigh = getRandomNumber(0, countMathSigns);
  const question = `${firstNum} ${mathSigns[randomMathSigh]} ${secondNum}`;
  const correctAnswer = String(calculator(firstNum, secondNum, mathSigns[randomMathSigh]));
  return [question, correctAnswer];
};

const startGameCalculator = () => startBrainGame(rule, calculatorGame);

export default startGameCalculator;
