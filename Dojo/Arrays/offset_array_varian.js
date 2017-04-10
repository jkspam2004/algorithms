/*  Rotate Array
	Given an arrray and a positive offset value, shift the array values to the right by
    offset number of spaces.  Values that are shifted off the array's end should wrap-around
	to appear at the array's beginning, so no data is lost.
    Likewise, given a negative offset value, shift the array values to the left
    Solution from Varian
*/

function RotateArray(arr, offset) {
    offset %= arr.length;   //always convert to a pos val
    console.log(offset);

    if (offset === 0 || arr.length == 0 || (Math.abs(offset) == arr.length)) {
         return arr;
    }

    // handful of small vars: O(1) memory
    var i = 0;
    var next = arr[0];
    var moving;
    var dejavu = undefined;  // index of an element previously swapped

    // shift each value to offset n times: O(n) execution time
    for (var n = 0; n < arr.length; n++){
        if (dejavu == undefined) {
            dejavu = i; //initialize for first time 
        } else if (i == dejavu) { // back at some index I've swapped before
            i = (i + 1) % arr.length;
            next = arr[i];
            dejavu = i;
        }

        var j = (i + offset + arr.length) % arr.length;
        moving = next;   //value I will shift
        next = arr[j];   //value I will replace/"lose"
        arr[j] = moving; //do the shift

        //set-up for next iteration
        i = j;
     }
     return arr;
}



// Run it with some test cases
var array1 = [1, 5, 7, 9];
var offset1 = 2;
var array2 = [8, 10, -1, 15];
var offset2 = -2;
var array3 = [4, 2, 5, 7, 9];
var offset3 = 3;
var array4 = [0, 8, 5, 7, 9];
var offset4 = -3;


var sets = 4;
var collection = [];
for (var i=1; i<=sets; i++ ) {
    var arr = eval('array' + i);
    var offset = eval('offset' + i);
    collection.push([arr, offset]);
}

console.log('');
for (var i=0; i<collection.length; i++) { // run function until collection of input is empty
    var arr = collection[i][0];
    var offset = collection[i][1];
    console.log('orig: ' + eval(arr) + ' offset: ' + offset);
    var output = RotateArray(arr, offset);
    console.log(output);
    console.log('');
}


/* old solution that breaks when shift by 2?
function ArrayShift(arr, offset) {
    var shiftBy = offset;
    var offset = (arr.length + offset) % arr.length;  //always convert to a pos val

    if (offset === 0 || arr.length == 0) return arr;

    ////shift each value to offset n times: O(1) memory
    var i = 0;
    var next = arr[0];
    var moving;

   //shift each value to offset n times: O(n) execution time
   for (var n = 0; n < arr.length; n++){
       var j = (i + offset) % arr.length;
        moving = next;
        next = arr[j];
        arr[j] = moving;
        i = j;
   }
   return arr;
}

var array = [7,5,1,9];
var offset = 4;

var newArray = ArrayShift(array, offset);
console.log(newArray);
*/
