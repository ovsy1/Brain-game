#!/usr/bin/env node
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { rule, gcdGame } from '../src/games/gcd.js';
import startBrainGame from '../src/index.js';

startBrainGame(rule, gcdGame);
