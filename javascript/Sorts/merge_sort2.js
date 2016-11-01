/* 
  Merge Sort - divide and conquer algorithm
  Time Complexity: O(n log n);
  Approach: parition the array into left and right until one element array left
  then merge the arrays together comparing the "first" element of each array
*/


function mSort(arr, start, end) {

  if (start === undefined && end === undefined) {
    start = 0;
    end = arr.length-1; 
  }

  console.log("start:", start, "end:", end);
  if (start === end) {
    return arr;
  }

  // working on the same array but subsections using indices
  var mid = Math.floor((start + end)/2);
  mSort(arr, start, mid);
  mSort(arr, mid+1, end);
  console.log("start:", start, "end:", end, "mid:", mid, "arr:", arr);

  merge(arr, start, mid, end);
}

function merge(arr, start, mid, end) {
  var i = start;
  var j = mid + 1;

  var sorted = [];

  if (start === end) {
    return;
  }

  // comparing the "first" elements of left and right sides until either array is empty 
  while (i <=mid && j <= end) {
    if (arr[i] < arr[j]) {
      sorted.push(arr[i++]);
    } else {
      sorted.push(arr[j++]);
    }
  }

  // leftover from left side
  while (i <= mid) {
    sorted.push(arr[i++]);
  }
  // leftover from right side
  while (j <= end) {
    sorted.push(arr[j++]);
  }

 console.log("start=", start);

  for (var n = 0; n < sorted.length; n++) {
    arr[start + n] = sorted[n];
  } 
}

var arr = [6, 5, 3, 1, 8, 7, 2, 4, 10];
console.log(arr);
mSort(arr);
console.log("final", arr);

