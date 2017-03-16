/*
	Push Front
	Given an array and an additional value, insert this value at the beginning of the array.  
	Do this without using any built-in array methods.
*/

// increase array by adding one to the end.  shift array values to the right by making copies.
function PushFront (arr, Y) {
	for (var i=arr.length; i>0; i--) {
		arr[i] = arr[i-1];
	}
	arr[0] = Y;
}

var array = [ 3, 5, 7, 8];
// expected: [6, 3, 5, 7, 8]
var n = 6;

console.log(array);
PushFront(array, n);
console.log(array);

