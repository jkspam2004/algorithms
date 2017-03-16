/*
	Remove Negatives
	Implement a function removeNegatives() that accepts an array and removes any values that are less than zero.
*/

function removeNegatives(arr) {
	if (arr.length === 0) {
		return;
	}
	for (var x=0; x<arr.length-1; x++) {
		if (arr[x] < 0) {
			for (var y=x; y<arr.length-1; y++) {
				arr[y] = arr[y+1];
			}
			arr.pop();
			x--; // decrement to get us back to the current element (for consecutive negatives) 
		}
	}
	arr.pop();
	return arr;
}

console.log(removeNegatives([-2,3,5,0,-4]));
console.log(removeNegatives([-7,-8,9,45,10]));
console.log(removeNegatives([-100,-3,-7,-8]));