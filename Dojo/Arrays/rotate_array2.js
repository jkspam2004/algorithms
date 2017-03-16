/*
  Solution: not in place. O(n)
  whiteboard 10/5/2016
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
console.log(arr1);
arr = rotateArray3(arr1, -8);
console.log(arr);

console.log("\n");
console.log(arr1);
arr = rotateArray3(arr1, 2);
console.log(arr);

console.log("\n");
console.log(arr1);
arr = rotateArray3(arr1, 3);
console.log(arr);

console.log("\n");
console.log(arr1);
arr = rotateArray3(arr1, 6);
console.log(arr);

console.log("\n");
console.log(arr1);
arr = rotateArray3(arr1, 8);
console.log(arr);

