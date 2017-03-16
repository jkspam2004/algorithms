/*
  Reverse Array
  Given a numerical array, reverse the order of the values.  The reversed array should have the same length,
  with existing elements moved to other indices so that the order of elements is reversed.
*/

function ReverseArray(arr) {
  var left_ptr = 0;
  var right_ptr = arr.length - 1;

  while (left_ptr < right_ptr) {
    var temp = arr[left_ptr];
    arr[left_ptr] = arr[right_ptr];
    arr[right_ptr] = temp;

    left_ptr++;
    right_ptr--;
  }

}

var array = [3, 2, 8, 32, 1, 0];
//expected = [0, 1, 32, 8, 2, 3]

console.log("\n\n");
console.log(array);
ReverseArray(array);
console.log(array);

function ReverseArrayWithSwap(arr) {
  var left_ptr = 0;
  var right_ptr = arr.length - 1;

  while (left_ptr < right_ptr) {
    swap(arr, left_ptr, right_ptr);

    left_ptr++;
    right_ptr--;
  }

}
function swap(arr, start, end) {
  var temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
}


console.log("\n\n");
console.log(array);
ReverseArrayWithSwap(array);
console.log(array);


function ReverseArray2(arr) {
  var start = 0;
  var end = arr.length - 1;
  
  for (var i=start; i<=Math.floor((start+end)/2); i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length-i-1];
    arr[arr.length-i-1] = temp;
  }
}

console.log("\n\n");
console.log(array);
ReverseArray2(array);
console.log(array);

