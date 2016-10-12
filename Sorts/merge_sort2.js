/* Merge Sort

*/


function mSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var newarr = [];
  var mid = Math.floor(arr.length/2);
  var left = mSort(arr.slice(0, mid)); // slice returns a copy portion into new array, last arg is not inclusive
  var right = mSort(arr.slice(mid, arr.length));
  console.log("left:", left, "right:", right, "arr:", arr);
  merge(left, right, newarr);

  return newarr;
}

function merge(left, right, newarr) {
  var i = 0;
  var j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[i]) {
      newarr.push(left[i]);
      i++;
    } else {
      newarr.push(right[i]);
      j++;
    }
  }

  while (i < left.length) {
    newarr.push(left[i]);
    i++;
  }
  while (j < right.length) {
    newarr.push(right[i]);
    j++;
  }

  return newarr;
}

//var arr = [6, 5, 3, 1, 8, 7, 2, 4];
var arr = [6, 5, 3, 1];
console.log(arr);
arr = mSort(arr);
console.log("output:", arr);

