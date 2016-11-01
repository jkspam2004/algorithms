

function binarySearchRecursive(arr, val, li, hi) {
   //if arr is empty return false
   if (arr.length === 0) {
       console.log("Empty array");
       return false;
   }
   //first call set li and hi at edges of original array
   if (li === undefined && hi === undefined) {
       li = 0;
       hi = arr.length-1;
       if (val < arr[li] || val > arr[hi]) {
           console.log("Out of bounds");
           return false;
       }
   }
   console.log("li is " + li + ", hi is " + hi);
   var mid = Math.floor((hi + li) / 2);
   // if value is found at the mid index
   if (arr[mid] === val) {
       console.log(mid);
       return mid;
   }

   //check if val is on left (lower) side
   if (arr[mid] > val) {
       hi = mid - 1;
       console.log(val + " is lower than " + mid);
       binarySearchRecursive(arr, val, li, hi);
   } else if (arr[mid] < val) { // check if val is on right (higher) side
       li = mid + 1;
       console.log(val + " is higher than " + mid);
       binarySearchRecursive(arr, val, li, hi);
   } else{ //if val not found - return false
       console.log("Not Found");
       return false;
   }
}

arr = [0, 1, 2, 3, 4];
binarySearchRecursive(arr, 4);
