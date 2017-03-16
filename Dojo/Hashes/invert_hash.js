/*
	Invert Hash
	Given a hash, convert the hash's keys to values and values to corresponding keys.
*/

// store the new values in an array object as to not lose the ones that would
// have been overwritten if the new keys were not unique
function InvertHash(hash) {
	var newhash = {};

	for (var key in hash) {
		var values = [];
		var tmp = newhash[hash[key]]; // check what was already stored in newhash for new key

		if (tmp == undefined) {
			values = [key]; // first element for that key
		} else {
			tmp.push(key);
			values = tmp;
		}

		newhash[hash[key]] = values;
	}
	return newhash;

}

var hash = {
	first: "mike",
	second: "joe",
	third: "joe",
}

console.log(hash);
var newhash = InvertHash(hash);
console.log(newhash);

/*
var list = [1, 2, 3];
var list2 = [4, 5, 6];
var combined = list.concat(list2)
console.log(combined);
*/