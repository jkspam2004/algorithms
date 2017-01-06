/*
   Count the number of pairs that add up to K in an array in less than O(N^2) time.  
   Assume all elements in the array are unique.
   example: 
   var a = [3,6,1,2,-3,-7,-4,23,0,9]
   console.log(countPairs(a, 3)) //3
*/

//var a = [3, 6, 1, 2, 7, -3, -7, -4, 23, 0, 9]; 
var intArr = [3, 6, 1, 2, -3, -7, -4, 23, 0, 9, 5];
var k = 3;
console.log(intArr);

/* O(n^2) solution */
function countPairs(arr, target) {
    var i = 0,
        len = arr.length,
        j = 0,
        count = 0;

    for ( ; i < len; i++) {
        for (j = i+1; j < len; j++) {
            if (arr[i] + arr[j] == target) {
                count++;
            }
        }
    }
    return count;
}

console.log("O(n^2) solution: " + countPairs(intArr, k));

/* O(n) solution: keep track of visited elements in a hash */
function countPairs2(arr, target) {
    var i = 0,
        len = arr.length,
        curr = arr[i],
        dataHash = {},
        count = 0,
        diff;
  
    for ( ; i < len; i++ ) {
        curr = arr[i]; 
        diff = target - curr;

        if (dataHash[diff]) {
            // if the difference is already stored as a key, then we found its matching pair
            // as the current value that adds up to the sum.  thus, increment count
            // i.e. given the sum is 8.  if the previous value stored in the hash is 3
            // and our current value is 5, the diff is 3.  our pair is (3,5)
            console.log("(" + diff + ", " + curr + ")");
            count++;
        } else { 
            // store each element of the array as a key in the hash
            dataHash[curr] = true;
      }
    }

    return count;
}

console.log("O(n) solution: " + countPairs2(intArr, k));


// https://www.youtube.com/watch?v=LGuKqtqXMZk
