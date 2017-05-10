/*
Given two strings, count the number of deletions needed to make them anagrams of each other

Input:
cde
abc

Output:
4
*/


function makingAnagrams(a, b) {
    let charHash = {};
    let numDeletions = 0;
    a = a.split('');
    b = b.split('');

    a.forEach(function(char) {
        if (!charHash.hasOwnProperty(char)) {
            charHash[char] = 0;
        }
        charHash[char]++;
    })
    b.forEach(function(char) {
        if (!charHash.hasOwnProperty(char)) {
            charHash[char] = 0;
        }
        charHash[char]--;
    })
    Object.keys(charHash).forEach(function(char) {
        numDeletions += Math.abs(charHash[char]);
    })

    console.log(charHash);
    return numDeletions;
}

console.log(makingAnagrams("cde", "abc")); // 4
console.log(makingAnagrams("dde", "abccc")); // 8
