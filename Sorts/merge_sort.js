/* Merge Sort

*/


function mSort(arr, lo, hi) {

  if (lo === undefined && hi === undefined) {
    lo = 0;
    hi = arr.length-1; 
  }

  console.log("lo:", lo, "hi:", hi);
  if (lo === hi) {
    return arr.slice(lo, hi+1);
  }

//  if (lo < hi) {
    var mid = Math.floor((lo + hi)/2);
    var left = mSort(arr, lo, mid);
    var right = mSort(arr, mid+1, hi);
    console.log("left:", left, "right:", right, "lo:", lo, "hi:", hi, "mid:", mid, "arr:", arr);
    merge(arr, left, right, lo);
    //merge(arr, lo, hi, mid);
//  } else {
//    console.log("else", arr, "lo", lo, "hi", hi, "mid", mid);
//    return arr;
//  }
}

function merge(arr, lo, hi, k) {
  var i = 0;
  var j = 0;
  //var k = arr.indexOf(lo[0]);

  var left = lo;
  var right = hi;
  
  while (i < left.length && j < right.length) {
    if (left[i] < right[i]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }

  return arr;
}

//var arr = [6, 5, 3, 1, 8, 7, 2, 4];
var arr = [6, 5, 3, 1];
console.log(arr);
mSort(arr);
console.log(arr);

