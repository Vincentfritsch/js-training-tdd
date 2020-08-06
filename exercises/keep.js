'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
function keepFirst(str)
{
  if (str.length>2)
  {return str.substr(0,2)}
  else {return "Entrer un mot de plus de 2 lettres"}
}

function keepLast(str)
{
  if (str.length>2)
  {return str.substr(str.length -2,2)}
  else {return "Entrer un mot de plus de 2 lettres"}
}

function keepFirstLast(str)
{
  if (str.length>4)
  {return keepFirst(str) + keepLast(str)}
  else {return "ENtrer un mot de plus de 4 lettres"}
}
//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof keepFirst, 'function');
assert.strictEqual(keepFirst.length, 1);
assert.strictEqual(keepFirst('abc'), 'ab');
assert.strictEqual(keepFirst('ab'), "Entrer un mot de plus de 2 lettres");
assert.strictEqual(typeof keepLast,'function')
assert.strictEqual(keepLast.length, 1)
assert.strictEqual(keepLast('abc'), 'bc')
assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirstLast.length, 1)
assert.strictEqual(keepFirstLast('abcde'), 'abde')
//assert.fail('You must write your own tests');
// End of tests */
