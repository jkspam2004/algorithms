/* 
  Merge Sort - divide and conquer algorithm
  Time Complexity: O(n log n);
  Approach: partition the array into left and right until one element array left
  then merge the arrays together comparing the "first" element of each array
*/

function mSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var mid = Math.floor(arr.length/2);
  var left = mSort(arr.slice(0, mid)); // slice returns a copy portion into new array, last arg is not inclusive
  var right = mSort(arr.slice(mid, arr.length));
  console.log("left:", left, "right:", right, "arr:", arr);

  var newarr =  merge(left, right);
  return newarr;
}

function merge(left, right) {
  var i = 0;
  var j = 0;

  var newarr = [];

  // compare the "first" values from left and right array until either left or right is empty
  while (i < left.length && j < right.length) {
    newarr.push(left[i] < right[j] ? left[i++] : right[j++] );
  }

  // leftovers from the left?
  while (i < left.length) {
    newarr.push(left[i++]);
  }
  // leftovers from the right?
  while (j < right.length) {
    newarr.push(right[j++]);
  }

  //console.log("left:", left, "right:", right, "newarr:", newarr);
  return newarr;
}

var arr1 = [6, 5, 3, 1, 8, 7, 2, 4, 10];
console.log(arr1);
arr = mSort(arr1);
console.log("output:", arr);



