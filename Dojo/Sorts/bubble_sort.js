/* 
  Bubble Sort
  invariant: the section of the array which is sorted
  As you walk through the array, compare the current element with element to the right
  If current value is greater than value to the right, swap the values
  Iterate until all sorted
  Greater numbers will bubble to the right of the array (the invariant section)
  Complexity: O(n^2) worst case time.  O(n) best case if all sorted 
*/
function bubbleSort(arr) {
  var n = arr.length;
  for (var k = 0; k < n-1; k++) {
    var swapped = false;
    console.log("k:", k);
    // k goes from 0 to n-1; better: k <= n-i-1 since right side will get sorted
    for (var i = 0; i < n-k-1; i++) { 
      console.log("i:", i);
      if (arr[i] > arr[i+1]) {
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped = true;
      }
    }
    // if we didn't do any swap, array must be sorted. break out of looping of k
    if (swapped == false) {
      break;
    }
  }
  return arr;
}

var arr = [2, 5, 7, 1, 3, 4];
console.log(arr);
console.log(bubbleSort(arr));

function bubbleSort2(arr) {
  for(var end=0; end<arr.length-1; end++) {
    var run, lowV = arr[arr.length - 1];
    var swappedElements = false;
    for(run=arr.length-1; run>end; run--) {
      if (lowV < arr[run - 1]) { 
        arr[run] = arr[run - 1]; 
        arr[run - 1] = lowV;
        swappedElements = true;
      }
      else { lowV = arr[run - 1]; }
    }
    if (!swappedElements) { break; }
  }
  return arr;
} 





