//case-agnostic, and ignores non-alphabetic chars 
// varian's solution
function isPalindrome(str) {
    var charsMap = { "A":1, "a":1, "B":2, "b":2, "C":3, "c":3, "D":4, "d":4, "E":5, "e":5, "F":6, "f":6, "G":7, "g":7, "H":8, "h":8, "I":9, "i": 9, "J":10, "j":10, "K":11, "k":11, "L":12, "l":12, "M":13, "m":13, "N":14, "n":14, "O":15, "o":15, "P":16, "p":16, "Q":17, "q":17, "R":18, "r":18, "S":19, "s":19, "T":20, "t":20, "U":21, "u":21, "V":22, "v":22, "W":23, "w":23, "X":24, "x":24, "Y":25, "y":25, "Z":26, "z":26}
    /*for (var i = 65; i < 26+65; i++) {
        console.log('"' + String.fromCharCode(i) + '":' + (i-64) + ",");
        console.log('"' + String.fromCharCode(i+(97-65)) + '":' + (i-64) + ",");
    }*/
    var i = 0;
    var j = str.length; 
    while (i < j) {
        if (!charsMap[str.charAt(i)]) {
            i++;
            continue;
        }
        if (!charsMap[str.charAt(j)]) {
            j--;
            continue;
        }
        if (charsMap[str.charAt(i)] !== charsMap[str.charAt(j)])
            return false;
        i++;
        j--;
    }  
    return true;
}

console.log(isPalindrome("abccba"));
console.log(isPalindrome("abcCBA"));
console.log(isPalindrome("abcabc"));
console.log(isPalindrome(""));
console.log(isPalindrome("a"));
console.log(isPalindrome("abc@@cba@@"));
console.log(isPalindrome("abc cba "));
