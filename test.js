import test from 'ava';
import m from './';

test(t => {
	const result = m();
	const firstDie = ['A', 'A', 'E', 'E', 'G', 'N'];

	t.is(result.length, 4);
	t.is(result[0].length, 4);
});

test(t => {
	const dice = [
	  ['A', 'A', 'E', 'E', 'G', 'N'],
	  ['E', 'L', 'R', 'T', 'T', 'Y'],
	  ['A', 'O', 'O', 'T', 'T', 'W'],
	  ['A', 'B', 'B', 'J', 'O', 'O'],
	];
	const result = m(dice);

	t.is(result.length, 2);
	t.is(result[0].length, 2);
});
