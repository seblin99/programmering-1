/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function fak(n) {
    if(n===1) return 1;
    if (n===2) return 2;
    let produkt=2;
    for (let i=3; i<=n;i++){
       produkt=produkt*i;
    }
    return produkt;
}
alert (fak(1000));
