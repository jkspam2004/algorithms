/*
  Insertion Sort
  Variant is the left side of array
  Scan array, look back at neighbor to the left.  If left neighbor is greater than me, swap.
  Keep looking to the left until we reach beginning of the array
  Time Complexity: O(n^2)
*/

function insertionSort(arr) {
  for (var k = 1; k < arr.length; k++) {
    console.log(k);
    for (var i = k; i >= 1; i--) {
      if (arr[i] < arr[i-1]) {
        swap(arr, i, i-1);
      } else {
        break;
      }
    }
  }
  return arr;
}

function swap(arr, first, second) {
  var temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}

arr = [2, 3, 1, 6, 5, 9 , 4, -1];
console.log(arr);
console.log(insertionSort(arr));


function insertionSort2(arr) {
  for (var idx=1; idx<arr.length; idx++) {
    var lowVal = arr[idx];
    var changed = false;
    for (var run = idx-1; run>=0; run--) {
      if (arr[run] > lowVal) {
        arr[run + 1] = arr[run];
        changed = true;
      }
      else { break; }
    }
    if (changed) { arr[run + 1] = lowVal; }
  }
}
