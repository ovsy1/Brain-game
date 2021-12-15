import getRandomNumber from '../getRandomNumber.js';

const rule = 'What number is missing in the progression?';

const generateProgression = (startNum, stepProgression, progressionLength) => {
  const arrayOfProgression = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    arrayOfProgression.push(startNum + (stepProgression * i));
  }
  return arrayOfProgression;
};

const progressionGame = () => {
  const firstNumber = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(5, 10);

  const progression = generateProgression(firstNumber, step, progressionLength);
  const hiddenIndex = getRandomNumber(0, progressionLength);

  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const progresGame = () => [rule, progressionGame];
export default progresGame;
