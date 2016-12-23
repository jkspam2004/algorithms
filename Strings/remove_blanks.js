/* 
	Remove Blanks
	Create a function that, given a string, returns that string, without blanks.
	Given " play that Funky Music ", return "playthatFunkyMusic"
*/

// without using split, walk through the string itself
function remove_blanks(str) {
	var newstr = ''

	for (var i=0; i<str.length; i++) {
		if (str[i] !== ' ') {
			newstr += str[i];
		}
	}
	return newstr;
}

console.log(remove_blanks(' play that Funky Music '));

// using split
function remove_blanks2(str) {
	var arr = str.split(' ');
	var newstr = arr.join('');
	return newstr;
}