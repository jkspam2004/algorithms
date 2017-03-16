/*
	Acronyms
	Create a function that, given a string, returns the string's acronym (first letters only, capitalized).
	Given "there's no free lunch - gotta pay yer way", return "TNFL-GPYW".
	Given "Live from New York, it's Saturday Night!", you should return "LFNYISN"
*/

function acronyms(str) {
   var acroStr = "";
   var ready = true;  //pick up first letter of first word

   for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ' && ready) { //pick up first non-space char and if we saw a space earlier 
           acroStr += str[i];
           ready = false;        // wait until next space/word
        } else if (str[i] === ' ')  // find at least one space, but will wait until we see a char
           ready = true;      
   }
   return acroStr.toUpperCase();
}

console.log(acronyms("There is no cow level!"));
console.log(acronyms("Young Men's Christian Association"));
console.log(acronyms("  Live from  New York, it's Saturday Night!  "));