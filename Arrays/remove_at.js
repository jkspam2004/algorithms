/*
	Remove At
	Given an array and an index into the array, remove and return the array value at that index.
	Do this without using any built-in methods except for pop().
*/

function RemoveAt(arr, idx) {
	if (idx < 0 || idx >= arr.length) {
		return null;
	}
	
	var ret_val = arr[idx];
	for (var i=idx; i<arr.length-1; i++) {
		arr[i] = arr[i+1];
	}
	arr.pop();

	return ret_val;
}

var array = [56, 2, 9, 35, 8, 40];
var index = 4;
// expected = [56, 2, 9, 35, 40]
console.log(array);
var ret_val = RemoveAt(array, index);
console.log(ret_val);
console.log(array);