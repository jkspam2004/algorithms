/*
	Insert At
	Given an array, an index, and an additional value, insert the value into the array at the given index.
	Do this without using any built-in array methods.
*/

function InsertAt(arr, idx, val) {
	if (idx < 0) {
		idx = 0;
	}
	if (idx > arr.length) {
		index = arr.length;
	}

	for (var i=arr.length; i>idx; i--) {
		arr[i] = arr[i-1];
	}
	arr[idx] = val;
}

var array = [3, 5, 8, 9, 12];
var index = 2;
var value = 100;
// expected: [3, 5, 100, 8, 9, 12]

console.log(array);
InsertAt(array, index, value);
console.log(array);


// call InsertAt with index 0 for PushFront
function PushFront2(array, value) {
	InsertAt(array, 0, value);
}