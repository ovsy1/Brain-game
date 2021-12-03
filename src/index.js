/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import readlineSync from 'readline-sync';

const startBrainGame = (rule, brainGame) => {
  const roundCount = 3;

  console.log('Welcome to the Brain Game!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(rule);

  for (let i = 0; i < roundCount; i += 1) {
    const [questionNum, correctAnswer] = brainGame();
    console.log(`Question: ${questionNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulatios, ${userName}`);
};

export default startBrainGame;