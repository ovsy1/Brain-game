#!/usr/bin/env node
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { rule, progressionGame } from '../src/games/progression.js';
import startBrainGame from '../src/index.js';

startBrainGame(rule, progressionGame);
