/*
	Reverse String
	Given a string, return a string of the same length but with characters reversed.
	Do not use the built-in reverse() function
	Example: "creature" -> "erutaerc"
*/

function ReverseString(str) {
	var newstr = '';
	for (var i = str.length-1; i >= 0; i--) {
		newstr += str[i];
	}
	return newstr;
}

var str = 'creature';
console.log(str);
var newstr = ReverseString(str);
console.log(newstr);

// using split
function ReverseString2(str) {
	var arr = str.split('');
	for (var i = 0; i <= Math.floor(arr.length/2); i++) {
		var temp = arr[i];
		arr[i] = arr[arr.length - 1 -i];
		arr[arr.length - 1 -i] = temp;
	}
	var newstr = arr.join('');
	return newstr;
}

str = 'fruits'
console.log(str)
newstr = ReverseString2(str)
console.log(newstr)


function ReverseString3(str) {
    var arr = str.split('');
    var lo = 0;
    var hi = arr.length-1;
    while (lo < hi) {
        var temp = arr[lo];
        arr[lo] = arr[hi];
        arr[hi] = temp;
        lo++;
        hi--;
    }

    return arr.join('');
}

str = 'apple';
console.log(str);
console.log(ReverseString3(str));

