/* Sort a Bit Array
* Given a bit array, return it sorted in-place (a bit array is an array containing
* only bits, either 0 or 1)
*
* Solve in O(n) time and O(1) auxiliary space
*
* Input:  [0, 1, 1, 0, 1, 1, 1, 0]
* Output: [0, 0, 0, 1, 1, 1, 1, 1] 
*/

/* Using pointers */
function sortBitArray(arr) {
    let left = 0,
        right = arr.length - 1;

    while (left < right) {
        while(arr[left] === 0) { left++; }
        while(arr[right] === 1) { right--; }

        if (arr[left] > arr[right]) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr;
}

arr = [0, 1, 1, 0, 1, 1, 1, 0];
console.log(sortBitArray(arr));

/* Using frequency counter */
function sortBitArray2(arr) {
    let bitCounter = [0, 0];
    arr.forEach((val) => {
        if (val === 0) {
            bitCounter[0]++;
        } else {
            bitCounter[1]++;
        }
    });
    console.log(bitCounter);

    //arr.fill(0, 0, bitCounter[0]);
    //arr.fill(1, bitCounter[0], bitCounter[0] + bitCounter[1]);

    for (let i = 0; i < arr.length; i++ ) {
        if (bitCounter[0] > 0) {
            arr[i] = 0;
            bitCounter[0]--;
        } else {
            arr[i] = 1;
        }
    }

    return arr;
}

arr = [0, 1, 1, 0, 1, 1, 1, 0];
console.log(sortBitArray2(arr));

/* Another pointer solution */
function bitArraySort(arr) {
    let swap = 0; // swap is the slow pointer
    for (let i = 0; i < arr.length; i++) { // i is the fast pointer
        if (arr[i] === 0) { // pass over the ones. find the zeros and swap
            [arr[swap], arr[i]] = [arr[i], arr[swap]];
            swap++;
        }
    }
    return arr;
}

console.log(bitArraySort([0, 1, 1, 0, 1, 1, 1, 0]));
console.log(bitArraySort([0, 1]));
