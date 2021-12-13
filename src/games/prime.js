import getRandomNumber from '../getRandomNumber.js';
import startBrainGame from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const sqrtNum = Math.sqrt(num);
  for (let i = 2; i < sqrtNum; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const isPrimeGame = () => {
  const num = getRandomNumber(0, 1000);
  const question = num;
  const strQuestion = String(question);
  const correctAnswer = isPrime(strQuestion) ? 'yes' : 'no';
  return [strQuestion, correctAnswer];
};

const startIsPrimeGame = () => startBrainGame(rule, isPrimeGame);

export default startIsPrimeGame;
