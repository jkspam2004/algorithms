/*
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphanumeric characters, including digits, uppercase and lowercase alphabets.

Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabbcdeB" -> 2 # 'a' and 'b'
"indivisibility" -> 1 # 'i'
"Indivisibilities" -> 2 # 'i' and 's'
"aa11" -> 2 # 'a' and '1'
*/


function duplicateCount(text){
    text = text.toLowerCase().split("");    
    let numDuplicates = 0;
    if (text.length) {
        let charFrequency = text.reduce((memo, char) => {
            memo[char] = (memo[char] || 0) + 1;
            return memo;
        }, {});
        Object.keys(charFrequency).forEach((char) => {
                if (charFrequency[char] > 1) {
                    numDuplicates++;
            }
        });
    }
    return numDuplicates; 
}

let answer = duplicateCount("aabbcde");
console.log(answer);

// a more clever solution
function duplicateCount2(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
        //return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
        console.log(i, val, arr.indexOf(val));
        return arr.indexOf(val) !== i;
    //}).length;
    });
}

answer = duplicateCount2("aabbcde");
console.log(answer);

/*
Test.assertEquals(duplicateCount(""), 0);
Test.assertEquals(duplicateCount("abcde"), 0);
Test.assertEquals(duplicateCount("aabbcde"), 2);
Test.assertEquals(duplicateCount("aabBcde"), 2,"should ignore case");
Test.assertEquals(duplicateCount("Indivisibility"), 1)
Test.assertEquals(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
*/

