//Find starting point of palindrome and work inwards to find the longest - use isPalindrome
module.exports = function longestPalindrome2(str, isPalindrome) {
    console.log('str is - ', str);
    var longest = str[0];
    var sub = "";
    //Palindrome is even number of characters
    for (var i = 0; i < str.length; i++) {
        // compare to next character
        var j = i + 1;
        while (i >= 0 && j <= str.length) {
            sub = str.substring(i, j+1);
            if (isPalindrome(sub) && sub.length > longest.length) {
                longest = sub;
                console.log('longest is ', longest);
                //move character 1 index in each direction
                i--;
                j++;
            }
            break;
        }
        console.log('sub is ', sub);
    }
    return longest + " - is the longest Palindrome";
};
