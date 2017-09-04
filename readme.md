# boggle-roll

[![Build Status](https://travis-ci.org/agarrharr/boggle-roll.svg?branch=master)](https://travis-ci.org/agarrharr/boggle-roll)

<a href="https://app.codesponsor.io/link/3owRGftAkghuGdjHaa955zEJ/agarrharr/boggle-roll" rel="nofollow"><img src="https://app.codesponsor.io/embed/3owRGftAkghuGdjHaa955zEJ/agarrharr/boggle-roll.svg" style="width: 888px; height: 68px;" alt="Sponsor" /></a>

## Install

```
$ npm install --save boggle-roll
```

## Usage

```js
const boggleRoll = require('boggle-roll');

boggleRoll();
//=> [
  ['T', 'U', 'S', 'N'],
  ['A', 'A', 'R', 'I'],
  ['E', 'P', 'I', 'U'],
  ['A', 'E', 'B', 'R'],
]
```

## API

### boggleRoll([dice])

Returns the result of a boggle roll.

#### dice `optional`

Type: `2d array of strings`

A representation of all 16 boggle dice. This allows you to use this for different languages, or different distributions of letters. It is an array of x arrays (typically 16 for a 4x4 board). Each of those arrays has y strings (typically 6 to represent a 6 sided die). Each of those stings can be any length (typically 1, but Qu is an example of why you might want it to be longer).

Example:

```js
const dice = [
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
boggleRoll(dice);
```

## License

MIT
