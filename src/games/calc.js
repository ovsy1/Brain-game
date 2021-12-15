import getRandomNumber from '../getRandomNumber.js';

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
      return null;
  }
};

const mathSigns = ['+', '-', '*'];

const calculatorGame = () => {
  const firstNum = getRandomNumber(1, 50);
  const secondNum = getRandomNumber(1, 50);
  const MathSigh = getRandomNumber(0, mathSigns.length - 1);

  const question = `${firstNum} ${mathSigns[MathSigh]} ${secondNum}`;
  const correctAnswer = String(calculator(firstNum, secondNum, mathSigns[MathSigh]));
  return [question, correctAnswer];
};

const calcGame = () => [rule, calculatorGame];
export default calcGame;
