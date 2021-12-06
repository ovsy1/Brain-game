/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import getRandomNumber from '../getRandomNumber.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const numIsPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const isPrimeGame = () => {
  const num = getRandomNumber(0, 1000);
  const question = num;
  const primeNum = numIsPrime(num);
  const correctAnswer = primeNum ? 'yes' : 'no';
  return [question, correctAnswer];
};

export { rule, isPrimeGame };
