/*  
  Rotate Array
  Given an array and an offset, shift the array by the offset amount. 
  Values that shift off the array's end should 'wrap-around' to appear on 
  the array's other side, so that no data is lost.  
  Negative offset shifts array to the left. 
*/

/* 
  solution 1: from the web O(n)
  rotate by reversing three times: the two subarrays and then the whole array. 
  
  Let us say we have a function called arr_reverse(arr,i,j) which reverses the elements of the array arr between index i and j using the swap function.

Example:

arr = [1,2,3,4,5] 
i = 0
j = 2

then the function will return:

[3,2,1,4,5]
 ^^^^^

Implementing this function is straight forward and is O(N).

Now let's use this function in rotating the array.

arr     = [1,2,3,4,5] // input array
x       = 2 // amount of right rotation
result  = [4,5,1,2,3] // expected result 
len     = 5 // length of array.



Step 1: Call arr_reverse(arr,0,len-x-1) which is arr_reverse(arr,0,2)
we get [3,2,1,4,5]
        ^^^^^     
        
Step 2: Call arr_reverse(arr,len-x,len-1) which is arr_reverse(arr,3,4)
we get [3,2,1,5,4] 
              ^^^
              
Step 3: Call arr_reverse(arr,0,len-1) which is arr_reverse(arr,0,4)
we get [4,5,1,2,3] 
        ^^^^^^^^^

The entire process makes use of arr_reverse 3 times, making it O(N)
*/
function rotateArray(arr, offset) {
    if(!arr.length || !offset) { return; }

    // handle negative offsets and offsets greater than length
    offset = arr.length + (offset % arr.length); // takes care of big negative offsets
    offset %= arr.length; // makes big offset smaller
    
    arr_reverse(arr, 0, arr.length-offset-1); // reverse first subarray
    arr_reverse(arr, arr.length-offset, arr.length-1); // reverse second subarray
    arr_reverse(arr, 0, arr.length-1); // reverse whole array

    return arr;
} 

function swap(arr, start, end) {
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
}

// reverse head and tail and get closer until meeting somewhere in the middle
function arr_reverse(arr, start, end) {
    for (var i=start; i<=Math.floor((start+end)/2); i++) {
        swap(arr, i, (start+end)-i);
    }
}

// Run it with some test cases
var array1 = [1, 5, 7, 9];
var offset1 = 2;
var array2 = [8, 10, -1, 15];
var offset2 = -2;
var array3 = [4, 2, 5, 8, 9, 31];
var offset3 = 8;
var array4 = [0, 8, 5, 7, 1, 17];
var offset4 = -3;
var array5 = [3, 2, 5, 11, 8, 20];
var offset5 = -8;
var array6 = [20, 18, 95, 10, 84, 36, 82, 90, 10, 12, 11];
var offset6 = 6;

var sets = 6;
var collection = [];
for (var i=1; i<=sets; i++ ) {
    var arr = eval('array' + i);
    var offset = eval('offset' + i);
    collection.push([arr, offset]);
}

console.log('solution 1');
for (var i=0; i<collection.length; i++) { // run function until collection of input is empty
    var arr = collection[i][0];
    var offset = collection[i][1];
    console.log(offset);
    console.log(arr);
    var output = rotateArray(arr, offset);
    console.log(output);
    console.log("\n");
}

/* solution 2: from dojo, in place. O(n^2)*/
function rotateArray2(arr, shiftBy) {
    if( !arr.length || !shiftBy ) { return; }

    // handle negative offsets, add until we are positive
    while(shiftBy < 0) {
        shiftBy += arr.length;
    }
    shiftBy %= arr.length; // for offsets greater than array length

    while (shiftBy--) {
        var temp = arr[arr.length - 1];
        for (var idx = arr.length - 2; idx >= 0; idx-- ) {
            arr[idx + 1] = arr[idx];
        }
        arr[0] = temp;
    }
}

/*
  Solution: not in place. O(n)
  whiteboard 10/5/2016. improved
*/
function rotateArray3(arr, shift) {
  var newarr = [];

  // handles negative offsets and offsets greater than length
  shift = arr.length + (shift % arr.length); // takes care of big negative offsets
  shift %= arr.length; // makes big offset smaller
  //console.log(shift);

  for (var i = 0; i < arr.length; i++) {
    newarr[(i + shift) % arr.length] = arr[i];
  }
  arr = newarr;
  return newarr;
}

console.log("solution 3");

arr1 = [3, 2, 1, 7, 8, 5];
console.log(-8);
console.log(arr1);
arr = rotateArray3(arr1, -8);
console.log(arr);

console.log("\n");
console.log(2);
console.log(arr1);
arr = rotateArray3(arr1, 2);
console.log(arr);

console.log("\n");
console.log(3);
console.log(arr1);
arr = rotateArray3(arr1, 3);
console.log(arr);

console.log("\n");
console.log(6);
console.log(arr1);
arr = rotateArray3(arr1, 6);
console.log(arr);

console.log("\n");
console.log(8);
console.log(arr1);
arr = rotateArray3(arr1, 8);
console.log(arr);


/* 
  Solution: not in place. O(n)
  first change shift to a small positive number
  whiteboard 10/5/2016  
*/
function rotateArray4(arr, shift) {
  var newarr = [];

  while (shift < 0) { // negative shifts
    shift = arr.length + shift; 
  }
  shift = shift % arr.length; // shifts greater than length

  for (var i = 0; i < arr.length; i++) {
    if (i >= arr.length - shift) { // going to be shifted off array -> wrap
      var offset = i - (arr.length - shift);
      newarr[offset] = arr[i];
    } else { 
      newarr[i + shift] = arr[i];
    }
  }
  return newarr;
}


console.log("\n");
console.log("solution 4");

arr1 = [3, 2, 1, 7, 8, 5];
console.log(-8);
console.log(arr1);
arr = rotateArray4(arr1, -8);
console.log(arr);

console.log("\n");
console.log(-2);
console.log(arr1);
arr = rotateArray4(arr1, -2);
console.log(arr);

console.log("\n");
console.log(2);
console.log(arr1);
arr = rotateArray4(arr1, 2);
console.log(arr);

console.log("\n");
console.log(3);
console.log(arr1);
arr = rotateArray4(arr1, 3);
console.log(arr);

console.log("\n");
console.log(6);
console.log(arr1);
arr = rotateArray4(arr1, 6);
console.log(arr);

console.log("\n");
console.log(8);
console.log(arr1);
arr = rotateArray4(arr1, 8);
console.log(arr);

console.log("\n");
console.log(27);
console.log(arr1);
arr = rotateArray4(arr1, 27);
console.log(arr);

