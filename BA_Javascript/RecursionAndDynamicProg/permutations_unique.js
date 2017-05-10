/*
    1/11/17
    Permutations without Dupes (Level: Difficult)
    Write a method to compute all permutations of a string of unique characters.

    input: given a string 'abc', getPerms( 'abc' )
    output: [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

    function getPerms( string ) {
       ...
       ...
    } 

    online dev env: https://repl.it/languages/javascript

    Tips:

    1) Building from permutations of all n-1 character substrings
    The only permutations a1 is the string a1. So:
    P(a1) = a1;

    Case: two-character strings:
    P(a1a2) = a1a2 and a2a1
    P(a2a3) = a2a3 and a3a2
    P(a1a3) = a1a3 and a3a1

    Case: three-character strings
    Here is where the cases get more interesting. How can we generate all permutations of three-character strings,
    such as a1a2a3, given the permutations of two-character strings?

    Well, in essence, we just need to 'try' each character as the first character and then append the permutations.
    P(a1a2a3) = {a1 + P(a2a3)} + {a2 + P(a1a3)} + {a3 + P(a1a2)}
       {a1 + P(a2a3)} -> a1a2a3, a1a3a2
       {a2 + P(a1a3)} -> a2a1a3, a2a3a1
       {a3 + P(a1a2)} -> a3a1a2, a3a2a1

    P(a1a2a3a4) = {a1 + P(a2a3a4)} + {a2 + P(a1a3a4)} + {a3 + P(a1a2a4)} + {a4 + P(a1a2a3)}

    http://collabedit.com/t2bya

*/

function getPerms(string, arr) {
    if (!arr) {
        arr = [];
    }

    console.log("string and arr: ", string, arr);
    if (string.length === 0) {
        console.log("zero length string");
        return arr.push('');
    }
    if (string.length === 1) {
        console.log("length 1");
        return arr.push(string);
    }

    if (string.length === 2) {
        console.log("length 2");
        arr.push(string[0] + string[1]);
        arr.push(string[1] + string[0]);

        console.log(arr);
        return arr;
    }
 
    arr.push(string[0] + getPerms(string.substr(1), arr));
    
}

var string = 'abc';
//var result = getPerms(string);
//console.log("typeof result", typeof(result));
//console.log("result: ", result);


function permute(string) {
    function recur(string, prefix) {
        if (string.length === 0) {
            return [prefix];
        } else {
            var out = [];
            for (var i = 0; i < string.length; i++) {
                var pre = string.substring(0, i);
                var post = string.substring(i + 1);
                out = out.concat(recur(pre + post, string[i] + prefix));
            }
            return out;
        }
    }
    var distinct = {};
    recur(string, "").forEach(function(result) {
        distinct[result] = true;
    });
    return Object.keys(distinct);
}

console.log(permute(string));
