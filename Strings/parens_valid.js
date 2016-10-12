/*
	Parens Valid
	Create a function that, given an input string, returns a boolean whether parentheses in that string are valid.
	y(3(p)p(3)r)s --> true
	n(0(p)3       --> false
	n)0(t(0)k     --> false
*/

// Approach: Increment count when we see open paren, decrement when we see closing

function parensValid(str) {
	var parens = 0;
	for (var i=0; i<str.length; i++) {
		if (str[i] == ')') {
			parens--;
			if (parens < 0) { // when we have more closing than open
				return false; // also takes care of when we encounter first closing paren
			}
		} else if (str[i] == '(') {
			parens++;
		}
	}
	return (parens === 0);  //if we are left with 0 parens, counts of opening and closing parens match. else false
}

console.log(parensValid('y(3(p)p(3)r)s'));
console.log(parensValid('n(0(p)3'));
console.log(parensValid('n)0(t(0)k'))



