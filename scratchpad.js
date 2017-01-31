/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var summa = 0;

for ( var x = 1; x < 1001; x++ ) {
  if ( x % 3 === 0 || x % 5 === 0 ) {
    summa += x;
  }
}

document.body.innerHTML = summa;
