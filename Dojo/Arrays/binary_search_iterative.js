/*
	Binary Search 
  Divide and Conquer algorithm
	Given a sorted array and a value, return whether that value is present in the array.  
  Do not sequentially iterate the entire array.  Instead, 'divide and conquer', taking 
  advantage of the fact that the array is sorted.

  Complexity: 
*/

function binarySearch(arr, val) {
	console.log("arr=", arr, "val=" + val)
	if (arr.length === 0) {
		return false;
	}
	var lo = 0;
	var hi = arr.length - 1;

	// value is out of bounds
	if (val < arr[0] || val > arr[hi]) {
		return false;
	}

	while (lo <= hi) {
		mid = Math.floor((lo + hi)/2);
		console.log("lo=" + lo, "hi=" + hi, "mid=" + mid);
		if (val == arr[mid]) {
			return true;
		} else if (val < arr[mid]) {
			hi = mid - 1;
		} else if (val > arr[mid]) {
			lo = mid + 1;
		}
	}
	return false; // value not in our array
}

console.log(binarySearch([1,3,4,5,7], 5))
console.log(binarySearch([2,5,8,9,10,13,15,17,18], 7))
console.log(binarySearch([12,20,89,100,120,178], 20))
