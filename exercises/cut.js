'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
function cutFirst(str)
{
  if (str.length >2)
  {return str.substr(2)}
  else return "Entrez un mot d'au moins 3 lettres"
}
//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof cutFirst, 'function');
assert.strictEqual(cutFirst.length, 1);
assert.strictEqual(cutFirst('abc'), 'c');
assert.strictEqual(cutFirst('ab'), "Entrez un mot d'au moins 3 lettres");
//assert.fail('You must write your own tests');
// End of tests */
