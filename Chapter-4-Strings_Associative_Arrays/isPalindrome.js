module.exports = function isPalindrome(str) {
    for (var i = 0; i <= Math.floor(str.length / 2); i++) {
        //check for false case otherwise it will return true for str1
        if (str[i] !== str[str.length - 1 - i]) {
            return false + " - "+ str + " - is not a Palindrome";
        }
    }
    return true + " - "+ str + " - is a Palindrome";
};
