/*
Rotate an array by 3 positions to the right
*/

function rotate_array(arr, shiftby) {
    arr_len = arr.length

    while (shiftby < 0) // negative offsets
        shiftby += arr_len
    while (shiftby > arr_len) // reduce to small offsets
        shiftby = shiftby % arr_len

    console.log("shiftby", shiftby);
    newarr = [];
    for (var idx = 0; idx < arr.length; idx++) {
        console.log(idx + shiftby);
        if (idx + shiftby > arr_len - 1) {
            newarr[idx + shiftby - arr_len] = arr[idx];
        } else {
            newarr[idx + shiftby] = arr[idx];
        }
    }
    return newarr;
}

arr = [42, 10, 21, 8, 15, 35, 50];
console.log(arr);
console.log(rotate_array(arr, 3));
