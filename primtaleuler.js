var num = 600851475143;
var root = Math.floor(Math.sqrt(num));
var test = num / 2;
if (test === Math.floor(test)) {
  var svar = test;
} else {
  for (var i = 3; i <= root; i += 2) {
    test = num / i;
    if (isPrime(test)) {
      svar = test;
      break;
    }
  }
}

funtion isPrime(num) {
  if( num %== 0){
    return false;
  }
    
   
 
  // Är det delbart med 2
  if (num %==0){
    return false; 
  }
  // Loop 3, 5, 7 etc Stopp vid ruten ur num
 var x = 3
if (x<root){
  if( num/x%==0){
    return false; 
} 
       if (num/x %==1) {
         x+1;
       }
}
}
  return true;
    console.log;
  // Om det är delbart return false (bryter loopen)
  
  // delbart med loopvar?
  
  
  // Annars return true
  


/*
Exception: SyntaxError: missing ; before statement
@Scratchpad/1:16
*/
/*
Exception: SyntaxError: missing ; before statement
@Scratchpad/1:16
*/
/*
undefined
*/
/*
undefined
*/
/*
undefined
*/
/*
undefined
*/
/*
Exception: SyntaxError: missing ; before statement
@Scratchpad/1:16
*/
/*
Exception: SyntaxError: missing ; before statement
@Scratchpad/1:16
*/
/*
Exception: SyntaxError: missing ; before statement
@Scratchpad/1:16
*/