// ==================== Generically and Dynamically import all Algorithm files from current directory ==================
var fs = require('fs'); //included in express or node - reading file system
var path = require('path'); //included in express or node - reading file system

//Define path to strings directory to read and require all functions
//console.log(__dirname);
var functions_path = path.join(__dirname, './');
var regex = new RegExp(".js$", "i"); // regex to catch files with .js extensions

//Load all functions
var exports;
fs.readdirSync(functions_path).forEach(function(file) {
    // console.log(file);
    // console.log(file.slice(0, file.indexOf('.')));
    //if (file.indexOf('.js') >= 0 && file !=='tests.js') {
    if ( regex.test(file) && file !== 'tests.js' ) {
        var name = file.replace('.js', ''); // get the filename minus the js extension
console.log(name);
        exports[name] = require(functions_path + file);
    }
});
console.log(exports);
// ==================== End import ==================


// =========================== reverseString Test ======================================
console.log('\n--------------------- reverseString Tests --------------------');
var reverseString = "long";
console.log(exports.reverseString.reverseString(reverseString));
var reverseString = "apple";
console.log(exports.reverseString.reverseString2(reverseString));

// =========================== parensValid Test ======================================
console.log('\n--------------------- parensValid Tests --------------------');
var parens = "sadfdsf()"; //true
var parens1 = ")()"; //false
var parens2 = "sadfdsf())"; //false
var parens3 = "(sadfdsf()"; //false
console.log(exports.parensValid.parensValid(parens));
console.log(exports.parensValid.parensValid(parens1));
console.log(exports.parensValid.parensValid(parens2));
console.log(exports.parensValid.parensValid(parens3));

// =========================== bracesValid Test ======================================
console.log('\n--------------------- bracesValid1 Tests --------------------');
var braces = "[{()}]"; //true
var braces1 = "[]({})"; //true
var braces2 = "[({})"; //false - missing
var braces3 = "]({})"; //false - first encounter is closing brace

exports.bracesValid.bracesValid1(braces);
exports.bracesValid.bracesValid1(braces1);
exports.bracesValid.bracesValid1(braces2);
exports.bracesValid.bracesValid1(braces3);

console.log('\n--------------------- bracesValid2 Tests --------------------');
//Not working
exports.bracesValid.bracesValid2(braces);
exports.bracesValid.bracesValid2(braces1);
exports.bracesValid.bracesValid2(braces2);
exports.bracesValid.bracesValid2(braces3);


// =========================== isPalindrome ======================================
console.log('\n--------------------- isPalindrome Tests --------------------');
var palindrome = "anana";
var palindrome1 = "ananaa";

console.log(exports.isPalindrome.isPalindrome(palindrome));
console.log(exports.isPalindrome.isPalindrome(palindrome1));

console.log('\n--------------------- isPalindrome2 Tests --------------------');
//console.log(exports.isPalindrome.isPalindrome2(palindrome));
//console.log(exports.isPalindrome.isPalindrome2(palindrome1));

// =========================== longestPalindrome ======================================
console.log('\n--------------------- longestPalindrome Tests --------------------');

var longestPalindrome1 = "JnAAnJtRt"; // JnAAnJ - even number of characters in Palindrome
var longestPalindrome2 = "JnBnJtRt"; // JnBnJ - odd number of characters in Palindrome

console.log(exports.longestPalindrome.longestPalindrome1(longestPalindrome1));
console.log(exports.longestPalindrome.longestPalindrome1(longestPalindrome2));

console.log('\n--------------------- longestPalindrome2 Tests --------------------');
console.log(exports.longestPalindrome.longestPalindrome2(longestPalindrome1, exports.isPalindrome.isPalindrome));
console.log(exports.longestPalindrome.longestPalindrome2(longestPalindrome2, exports.isPalindrome.isPalindrome));
