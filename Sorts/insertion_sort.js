function insertionSort(arr) {
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