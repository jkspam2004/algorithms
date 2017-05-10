/*
   1/3/17
   Count Spaces in a string. 
   When the string is empty, it cannot have a space so the count of spaces is 0.
   Using recursive call, check character by character by working with substrings of the string,
   and then sum the counts of the string spaces. 

   Like in many recursive problems, the Base Case and Build problem will be very useful. 
   Assume we have a string S represented by the characters a1a2..an

   http://collabedit.com/ushet
*/


var string = "hello world. i am here. can you count the spaces?";
console.log(string); 

/* recursive approach */
function countSpacesRecursive(str) {
    if (str.length === 0) {
        return 0;
    }

    return _countSpacesRecursive(str, 0);
}

function _countSpacesRecursive(str, count) {
    if (str.length === 0) {
        return count;
    }

    if (str[0] == ' ') {
        count++;
    }

    return _countSpacesRecursive(str.substr(1), count);
}

var count = countSpacesRecursive(string);
console.log("recursive count solution: " + count);


/* iterative approach */
function countSpaces(str) {
    if (str.length === 0) {
        return 0;
    }
    var i = 0,
        len = str.length,
        count = 0;

    for ( ; i < len; i++) {
        if (str[i] == ' ') {
            count++;
        }
    }
    return count;
}

var count2 = countSpaces(string);
console.log("iterative solution count: " + count2);


// Jack's solution
function countSpace( string ) {
    if ( string.length === 0 ) {
      return 0;
    }
  
    return ( string[ 0 ] === ' ' ? 1 : 0 ) + countSpace( string.substring(1) );
}
