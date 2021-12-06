#!/usr/bin/env node
/* eslint-disable linebreak-style */
import { rule, isPrimeGame } from '../src/games/prime.js';
import startBrainGame from '../src/index.js';

startBrainGame(rule, isPrimeGame);
