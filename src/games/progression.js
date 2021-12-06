/* eslint-disable linebreak-style */
import getRandomNumber from '../getRandomNumber.js';

const rule = 'What number is missing in the progression?';

const generatingProgressing = (startNum, stepProgression, progressionLength) => {
  const arrayOfProgression = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    arrayOfProgression.push(startNum + (stepProgression * i));
  }
  return arrayOfProgression;
};

const progressionGame = () => {
  const firstNumber = getRandomNumber(1, 10);
  const randomStep = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(5, 10);
  const progression = generatingProgressing(firstNumber, randomStep, progressionLength);
  const randomIndex = getRandomNumber(0, progressionLength);
  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export { rule, progressionGame };
