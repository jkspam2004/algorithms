/* Quick Sort 
  Sort an array using Quick Sort algorithm.
  Solution: using a partition function and recursion. 
  Complexity: O(n logn)

  Approach: 
  Partition (divide and conquer) an array into two parts, using a chosen pivot.
  Every element less than the pivot value will be placed to the left of the pivot 
  and every element greater the pivot value will be placed on the right.
  The pivot will then be in its rightful sorted position.
  Continue to partition until all elements sorted.
*/ 


/* partition array into two, swapping lesser values to the left of the pivot position */
function partition(arr, start, end){
  var i = start - 1;  // i is our swapping index
  var piv = arr[end];

  for(var j = start; j < end; j++){ // j is our comparison index
    if(arr[j] < piv){
      i++;
      swap(arr, i, j);
    }
  }
  i++;
  swap(arr, i, end); // swap pivot with the swapping index
  return i;
}

/* call quickSort recursively until one element in array */
function quickSort(arr, start, end){
  if(start === undefined || end === undefined){
    start = 0;
    end = arr.length - 1;
  }
  if(start < end){
    var p = partition(arr, start, end);
    quickSort(arr, start, p - 1);
    quickSort(arr, p + 1, end);
  }
}

/* swap to elements given their indices */
function swap(arr, i, j){
  var temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

var arr = [20, 12, 1, 0, 9, 8, 0];
quickSort(arr);
console.log(arr);

var arr2 = [2, 9, 7, 8, 1, 7];
quickSort(arr2);
console.log(arr2);
