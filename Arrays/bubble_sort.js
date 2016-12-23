/*
	Bubble Sort
	Implement the bubble sort algorithm
*/

// Approach: Iterate through the loop at most array.length - 1 times.
// Compare the current element to the element of adjacent right neighbor
function bubbleSort(arr) {
	for (var i=1; i<arr.length; i++) {
		for (var j=0; j<arr.length-1; j++) {
			if (arr[j] > arr[j+1]) {
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}

console.log(bubbleSort([6,5,3,1,8,7,2,4]))
console.log(bubbleSort([20,19,18,17,16,15,14,13,12,11,10,9,8,7]))
console.log(bubbleSort([98,233,45,3,234,74,0,35,84,2,3]))
console.log(bubbleSort([9,8,7,6,5,4,3,2,1]))