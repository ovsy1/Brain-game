#!/usr/bin/env node
/* eslint-disable linebreak-style */
import { rule, gcdGame } from '../src/games/gcd.js';
import startBrainGame from '../src/index.js';

startBrainGame(rule, gcdGame);
