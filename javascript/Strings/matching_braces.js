/*
	Matching Braces
	Create a function that, given an input string, returns a boolean whether the various parentheses, braces, and brackets in that string are valid.  
	They must be nested in proper order.
	w(a{t}s[o(n{c}o)m]e)h[e{r}e]!  --> true
	d(i{a}l[t]o)n{e                --> false
	a(1)s[0(n]O{t)O}k              --> false
*/

/* 
	Approach:
	- walk through string
	- when we see opening symbol, push onto stack/array
	- when we encounter closing symbol, pop off last item in stack
		- compare popped item from stack to current character, which is a closing symbol
			- if open and closing symbols are a pair, continue (break)
			- return false if no match
	- check stack at the end of the loop
		- if it's not empty, we have leftover opening symbols -> false
		- otherwise valid matching braces -> true
*/
function bracesValid(str) {
	var symbols = [];
	for (var i=0; i<str.length; i++) {
		var cur = str[i];
		if (cur == '(' || cur == '[' || cur == '{') {
			symbols.push(cur);
		} else if (cur == ')' || cur == ']' || cur == '}') {
			if (symbols.length == 0) { return false; } // found closing symbol first
			var last = symbols.pop();
			switch(last) {
				case '(':
					if (cur != ')') { return false; }
					break;
				case '{':
					if (cur != '}') { return false; }
					break;
				case '[':
					if (cur != ']') { return false; }
					break;
			} // end switch
		} // end else if
	} // end for
	if (symbols.length > 0) {
		return false;
	}
	return true;

}// end function

console.log(bracesValid('w(a{t}s[o(n{c}o)m]e)h[e{r}e]!'))
console.log(bracesValid('d(i{a}l[t]o)n{e'))
console.log(bracesValid('a(1)s[0(n]O{t)O}k'))