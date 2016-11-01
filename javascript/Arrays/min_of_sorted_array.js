/* Find Rotation Point or Find Min Value of Sorted then Rotated Array
   Given a numerical array that has first been sorted, then rotated by an unknown amount,
   find and return the minimum value in that array.
*/

function MinValSortedRotatedArr(arr) {
    var start_idx = 0;
    var end_idx = arr.length;

	while ( end_idx - start_idx > 1) {
		var mid_idx = Math.ceil((start_idx + end_idx)/2);

        if (arr[mid_idx] > arr[start_idx]) {
			start_idx = mid_idx;
        } else {
		    end_idx = mid_idx;
		}
    }

    return end_idx;
}

var array1 = [7, 8, 9, 4, 5];
var array2 = [7, 8, 2, 3, 4, 5, 6];
var array3 = [1, 3, 4, 5, 6];
var array4 = [6, 7, 8, 9, 10, 3];

var collection = [array1, array2, array3, array4];

console.log('');
console.log('MinValSortedRotatedArr');
console.log('');
for (var i=0; i<collection.length; i++) {
    var array = collection[i];
    console.log(array);
    var min_idx = MinValSortedRotatedArr(array);
    console.log('min index: ' + min_idx);
    console.log('min value: ' + array[min_idx]);
    console.log('');
}

// solution from interviewcake.com
function findRotationPoint(arr) {
    const first_val = arr[0];

    var lo_idx = 0;
    var hi_idx = arr.length - 1;

    // array wasn't rotated
    if (first_val < arr[hi_idx]) {
        return lo_idx; 
    }

    while (lo_idx < hi_idx) {

        // guess a point halfway between floor and ceiling
        var guess_idx = Math.floor(lo_idx + ((hi_idx - lo_idx) / 2));

        // if guess comes after first value
        if (arr[guess_idx] > first_val) {
            // go right
            lo_idx = guess_idx;
        } else {
            // go left
            hi_idx = guess_idx;
        }

        // if floor and ceiling have converged
        if (lo_idx + 1 === hi_idx) {

            // between floor and ceiling is where we flipped to the beginning
            // so ceiling is alphabetically first
            break;
        }
    }

    return hi_idx;
}

console.log('findRotationPoint');
console.log('');
for (var i=0; i<collection.length; i++) {
    var array = collection[i];
    console.log(array);
    var min_idx = findRotationPoint(array);
    console.log('min index: ' + min_idx);
    console.log('min value: ' + array[min_idx]);
    console.log('');
}
