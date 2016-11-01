//Find middle of palindrome and work outwards to find the longest - does not use isPalindrome
module.exports = {
    longestPalindrome1: function (str) {
        // console.log('str is - ', str);
        var longest = str[0];
        var sub = "";
        for (var i=0; i<str.length; i++) {
            //preserve i
            var original_i = i;
            //Check for Palindrome with even number of characters
            var even = i + 1;
            while(i>=0 && even<str.length) {
                // console.log('while loop');
                if (str[i] == str[even]) {
                    sub = str.substring(i, even+1);
                    // console.log('found Palindrome - ', sub);
                    //move character 1 index in each direction
                    i--;
                    even++;
                }
                else{
                    // console.log(i, j);
                    break;
                    // return sub;
                }
            }
            //Check for Palindrome with odd number of characters
            var odd = i + 2;
            while(i>=0 && odd<str.length) {
                // console.log('while loop');
                if (str[i] == str[odd]) {
                    sub = str.substring(i, odd+1);
                    // console.log('found Palindrome - ', sub);
                    //move character 1 index in each direction
                    i--;
                    odd++;
                }
                else{
                    // console.log(i, j);
                    break;
                    // return sub;
                }
            }
            // console.log('sub is ', sub);
            if(sub.length > longest.length){
                // console.log('Found new longest');
                longest = sub;
            }
            //reset i to original i
            i = original_i;
        }
        return longest + " - is the longest Palindrome";
    },
    longestPalindrome2: function (str, isPalindrome) {
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
    },

};
