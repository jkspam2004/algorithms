/*
  Selection Sort
  Scan array and find minimum value.  Store that index
  At the end of the iteration, swap the value at the current pointer with minimum value
  Left side is the invariant, sorted side. 
  Time Complexity: O(n^2)
*/
function selectionSort(arr) {
  var n = arr.length;
  for (var k = 0; k < n; k++) {
    var min = k; // min index
    for (var i = k; i < n; i++) {
      if (arr[i] < arr[min]) {
        min = i;
      }
    }
    swap(arr, min, k);
  }

  return arr;
}

function swap(arr, first, second) {
  var temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}

arr = [2, 5, 7, 1, 3, 4];
console.log(arr);
console.log(selectionSort(arr));


function selectionSort2(arr) {
  for(var idx=0; idx<arr.length-1; idx++) {
    var run, lowI=idx;
    for(run=idx+1; run<arr.length; run++) {
      if (arr[run]<arr[lowI]) { lowI=run; }
    }
    if (lowI != idx) {
      var temp = arr[lowI];
      arr[lowI] = arr[idx];
      arr[idx] = temp;
    }
  }
}
