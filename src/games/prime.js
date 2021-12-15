import getRandomNumber from '../getRandomNumber.js';

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
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [num, correctAnswer];
};

const primeGame = () => [rule, isPrimeGame];
export default primeGame;
