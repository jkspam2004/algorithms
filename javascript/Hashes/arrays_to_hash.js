/*
	Arrays to hash
	Given two arrays, create an associative array (map) containing keys of the first
	and values of the second

*/

function ArraysToMap (arr1, arr2) {
	var newarr = {};
	var length = arr1.length;

	if (!arr1.length || !arr2.length) { return; }

	if (arr2.length < length) { // get the shorter array length if unequal length
		length = arr2.length;
	}

	for (var i=0; i<length; i++) {
		newarr[arr1[i]] = arr2[i];
	}

	return newarr;
}

var arr1 = ['name', 'age', 'likes'];
var arr2 = [ 'sam', 18, 'baseball'];

var newarr = ArraysToMap(arr1, arr2);
console.log(newarr);