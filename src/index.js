import readlineSync from 'readline-sync';

const roundCount = 3;

const startBrainGame = (brainGame) => {
  const [rule, roundGenerator] = brainGame();
  console.log('Welcome to the Brain Game!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(rule);

  for (let i = 0; i < roundCount; i += 1) {
    const [questionNum, correctAnswer] = roundGenerator();
    console.log(`Question: ${questionNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startBrainGame;
