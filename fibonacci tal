// CVache över redan uträknade fibonaccital
var fibnums = [ 0, 1, 2 ];


function fib(n) {
  // Debug 
  // x++;
  // console.log("Anropad " + x + " gånger.")
  // Slut debug
  if ( fibnums[n] ) return fibnums[n];
  // Rekursivt anrop
  fibnums[n] = fib(n-1) + fib(n-2);
  return fibnums[n];
}

var x = 0;
var i = 1;
var f = fib(i);
var summa = 0;
while ( f < 4000000 ) {
  if ( f % 2 === 0 ) {
    summa += f;
  }
  i++;
  f = fib(i);
}
console.log("Summan av alla jämna fibonaccital under 4 miljoner är " + summa);
