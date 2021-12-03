/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import getRandomNumber from '../getRandomNumber.js';

const mathSigns = ['+', '-', '*'];

const rule = 'What is the result of the expression?';

const calculator = (firstNum, secondNum, mathSign) => {
  let result = 0;
  if (mathSign === '+') {
    result = (firstNum + secondNum);
  } else if (mathSign === '-') {
    result = (firstNum - secondNum);
  } else if (mathSign === '*') {
    result = (firstNum * secondNum);
  }
  return result;
};

const calculatorGame = () => {
  const countMathSigns = 2;
  const firstNum = getRandomNumber(0, 100);
  const secondNum = getRandomNumber(0, 100);
  const randomMathSigh = getRandomNumber(0, countMathSigns);
  const question = `${firstNum} ${mathSigns[randomMathSigh]} ${secondNum}`;
  const correctAnswer = String(calculator(firstNum, secondNum, mathSigns[randomMathSigh]));
  return [question, correctAnswer];
};

export { rule, calculatorGame };
