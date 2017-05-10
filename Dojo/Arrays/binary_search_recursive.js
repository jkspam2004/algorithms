

function binarySearchRecursive(arr, val, start, end) {
   //if arr is empty return false
   if (arr.length === 0) {
       console.log("Empty array");
       return false;
   }
   //first call set start and end at edges of original array
   if (start === undefined && end === undefined) {
       start = 0;
       end = arr.length-1;
   }

   if (val < arr[start] || val > arr[end]) {
       console.log("Out of bounds");
       return false;
   }
   console.log("start is " + start + ", end is " + end);
   var mid = Math.floor((end + start) / 2);
   // if value is found at the mid index
   if (arr[mid] === val) {
       console.log(mid);
       return mid;
   }

   //check if val is on left (lower) side
   if (arr[mid] > val) {
       end = mid - 1;
       console.log(val + " is lower than " + mid);
       binarySearchRecursive(arr, val, start, end);
   } else if (arr[mid] < val) { // check if val is on right (higher) side
       start = mid + 1;
       console.log(val + " is higher than " + mid);
       binarySearchRecursive(arr, val, start, end);
   } else{ //if val not found - return false
       console.log("Not Found");
       return false;
   }
}

arr = [0, 1, 2, 5, 7];
binarySearchRecursive(arr, 3);
