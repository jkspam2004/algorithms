/*
  Problem: Sort an array using quick sort

  Approach:
  1. Initialize: set our start (0 or input). set our end (last index of array or input)
  2. Keep track of comparison point, swapping point
  3. Choose pivot point
  4. Check if comparison point value is less than pivot point value
     yes => a. if pivot going to be swapped, update pivot index to comparison index 
            b. swap comparison point value with swapping point value
            c. increment swap index
     no => do nothing
  5. Increment comparison index
  5. Continue to step 4 until comparison point reaches the end
  6. Swap pivot value with swapping point value
  7. Update pivot index to swap index
  8. Call quicksort on the left and on the right partitions
  8. Return arr
*/

function qSort(arr, start, end) {
  end = end || arr.length - 1;
  start = start || 0;
  var swap_idx = start;
  var comp_idx = start; 
  var pivot_idx = end;
 
  // console.log("start", start , ", end", end);
  if ((end - start) <= 1) {
    return arr;
  }

  while (comp_idx <= end) {
    if (arr[comp_idx] < arr[pivot_idx]) {
      if (pivot_idx === swap_idx) {
        pivot_idx = comp_idx;
      }
      // swap comparison point value with swap point value
      swap(arr, comp_idx, swap_idx);
      swap_idx++;
    }
    comp_idx++;
  }
  swap(arr, pivot_idx, swap_idx);
  pivot_idx = swap_idx;
  // console.log("after qsort", arr);
  // console.log("pivot after qSort=" , pivot_idx);
  qSort(arr, start, pivot_idx -1);
  qSort(arr, pivot_idx + 1, end); 
 
  return; 
}

function swap(arr, first, second) {
  var temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
  return;
}


arr1 = [2, -4, 0, 9, -3, 9, 3, 3, -1];
console.log(arr1);
qSort(arr1);
console.log(arr1);


