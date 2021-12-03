#!/usr/bin/env node
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { rule, isEvenGame } from '../src/games/even.js';
import startBrainGame from '../src/index.js';

startBrainGame(rule, isEvenGame);
