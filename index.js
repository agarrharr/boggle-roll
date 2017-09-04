'use strict';

const arrayShuffle = require('array-shuffle');

const defaultDice = [
  ['A', 'A', 'E', 'E', 'G', 'N'],
  ['E', 'L', 'R', 'T', 'T', 'Y'],
  ['A', 'O', 'O', 'T', 'T', 'W'],
  ['A', 'B', 'B', 'J', 'O', 'O'],
  ['E', 'H', 'R', 'T', 'V', 'W'],
  ['C', 'I', 'M', 'O', 'T', 'U'],
  ['D', 'I', 'S', 'T', 'T', 'Y'],
  ['E', 'I', 'O', 'S', 'S', 'T'],
  ['D', 'E', 'L', 'R', 'V', 'Y'],
  ['A', 'C', 'H', 'O', 'P', 'S'],
  ['H', 'I', 'M', 'N', 'Qu','U'],
  ['E', 'E', 'I', 'N', 'S', 'U'],
  ['E', 'E', 'G', 'H', 'N', 'W'],
  ['A', 'F', 'F', 'K', 'P', 'S'],
  ['H', 'L', 'N', 'N', 'R', 'Z'],
  ['D', 'E', 'I', 'L', 'R', 'X']
];

const randomNumber = max => Math.floor(Math.random() * max);

const getRandom = die => die[randomNumber(die.length)];

const boggleRoll = (dice = defaultDice) => {
  const boardSize = Math.floor(Math.sqrt(dice.length));
  const shuffled = arrayShuffle(dice);
  return shuffled.reduce((a, c, i) => {
    if (a.length) {
      if (a[a.length - 1].length < boardSize) {
        a[a.length - 1].push(getRandom(c));
        return a;
      }
      a.push([getRandom(c)]);
      return a;
    }
    return [[getRandom(c)]]
  }, []);
};

module.exports = dice => boggleRoll(dice);
