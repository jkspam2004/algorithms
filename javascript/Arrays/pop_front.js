/*
	Pop Front
	Given an array, remove and return the value at the beginning of the array.  
	Do this without using any built-in array methods except pop().
*/

var array = [9, 0, 11, 39, 5, 6];
console.log(array);
var first_elem = PopFront(array);
console.log(first_elem);
console.log(array);

// shift elements to the left. pop off last element that has already been copied
function PopFront(arr) {
	var ret_val = arr[0];

	for (var i=0; i<arr.length-1; i++) {
		arr[i] = arr[i+1];
	}

	arr.pop();

	return ret_val;
}

