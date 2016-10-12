 function selectionSort(arr) {
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