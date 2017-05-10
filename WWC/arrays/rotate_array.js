/*
Rotate an array by 3 positions to the right
*/

function rotate_array(arr, shiftby) {
    var arr_len = arr.length,
        offset;

    while (shiftby < 0) // negative offsets
        shiftby += arr_len
    while (shiftby > arr_len) // reduce to small offsets
        shiftby = shiftby % arr_len

    console.log("shiftby", shiftby);
    newarr = [];
    for (var idx = 0; idx < arr_len; idx++) {

        /*  below code is not needed, do modulus of length to get offset
        offset = idx + shiftby
        if (idx + shiftby > arr_len - 1) {
            offset = idx + shiftby - arr_len 
        }
        */

        offset = (idx + shiftby) % arr_len // mod by array length will adjust the wrap-around index
        newarr[offset] = arr[idx]

    }
    return newarr;
}

arr = [42, 10, 21, 8, 15, 35, 50];
console.log(arr);
console.log(rotate_array(arr, 3));
