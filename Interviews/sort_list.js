/*
   Given a csv list, sort by the third column.
*/

'use strict';


var csv = [
    "1, alex, 3.4, 70",
    "3, sally, 5.5, 50",
    "2, bob, 1.2, 30"
];
console.log("input: ", csv);

/* my solution by setting the column to be sorted as the key in an object */
function sortDoctor(input) {
    var obj = {},
        i, j, k, 
        len = input.length, 
        keys,
        pos = 2,
        final = [];

    for (i = 0; i < len; i++) {
        var line = input[i].split(',');
        obj[line[pos]] = input[i];
    } 

    // sort the keys
    keys = Object.keys(obj);
    keys.sort();

    len = keys.length;
    for (j = 0; j < len; j++) {
        k = keys[j];
        //console.log(obj[k]);
        final.push(obj[k]);
    }

    return final;
}
console.log("my sort: ", sortDoctor(csv));

/* compare function will sort the column in ascending order */
function compareByPosition(a, b) {
    var pos = 2;
    var aArr = a.split(',');
    var bArr = b.split(',');
    return aArr[pos] - bArr[pos];
}

console.log("compare: ", csv.sort(compareByPosition));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

