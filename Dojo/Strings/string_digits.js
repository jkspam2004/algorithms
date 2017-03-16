/*
	Get String Digits
	Create a function that, given a string, returns the integer made from that string's digits.
	In other words, strip out the the characters and symbols, leaving behind only integers in the string.
	Input: 0s1a3y5w7h9a2t4?6!8?0 Output: 1357924680
*/

function string_digits (str) {
	var newstr = '';
	for (var i=0; i<str.length; i++) {
		var temp = parseInt(str[i]);
		if (temp >= 0 && temp <= 9) {
			newstr += str[i];
		}
	}
	return parseInt(newstr);
}

console.log(string_digits('0s1a3y5w7h9a2t4?6!8?0'));