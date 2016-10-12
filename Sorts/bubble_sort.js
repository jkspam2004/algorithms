 function bubbleSort(arr) {
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
} 