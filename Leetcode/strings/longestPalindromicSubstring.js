/*
5. Longest Palindromic Substring
 
Given a string, return the longest palindromic substring
Input:
babad
Output:
bab (can be aba)

Input:
cbbd
Output:
bb
*/

let lo, maxLen = 0;
function longestPalindrome(str) {
    if (str.length < 2) {
        return str;
    }

    for (let i = 0; i < str.length - 1; i++) {
        helper(str, i, i);
        helper(str, i, i + 1);
    }

    // start at lo and go until maxLen+1
    // substring(start, end). non-inclusive end
    console.log(lo, lo + maxLen);
    return str.substring(lo, lo + maxLen);
}

function helper(str, j, k) {
    while (j >= 0 && k < str.length && str[j] == str[k]) {
        j--;
        k++;
    }

    // we added one to subtracted one from j and added one to k before we failed
    // the loop, adjust below. string start is j+1 and end is k-1
    // maxLen is length of substring
    if (k - j - 1 > maxLen) {
        lo = j + 1;
        maxLen = k - j - 1;
    }
}

console.log(longestPalindrome("babad"));
lo, maxLen = 0;
console.log(longestPalindrome("cbbd"))
lo, maxLen = 0;
console.log(longestPalindrome("baed"))
lo, maxLen = 0;
console.log(longestPalindrome("malayalam"))
lo, maxLen = 0;
console.log(longestPalindrome("babab"))



