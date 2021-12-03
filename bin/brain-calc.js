#!/usr/bin/env node
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { rule, calculatorGame } from '../src/games/calc.js';
import startBrainGame from '../src/index.js';

startBrainGame(rule, calculatorGame);
