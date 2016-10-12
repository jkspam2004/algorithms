// "Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again"
// In other words, we use computer memory as a tradeoff to improve runtime. 
// Memoization implementation of recursive Tribonacci function: rTrib(0) = rTrib(1) = 0; rTrib(2) = 1; rTrib(n) = rTrib(n-3) + rTrib(n-2) + rTrib(n-1).
// Using this technique, the recursive call will use a remembered result (via associate array "myApp.myTrib") if possible to avoid re-evaluating past values of n. Runtime is greatly improved for large values of n.
// Remove console.log statements inside the rTribMem function to disable execution tracing. 
var myApp = myApp || {};
myApp.myTrib = {};
myApp.rTribMem = function(n) {
    //console.log("rTrib(" + n + ") called ...");
    if (myApp.myTrib[n]) {
        return myApp.myTrib[n];
    }
        
    if (n <= 1) myApp.myTrib[n] = 0;
    else if (n == 2) myApp.myTrib[2] = 1;
    else
        myApp.myTrib[n] = myApp.rTribMem(n-3) + myApp.rTribMem(n-2) + myApp.rTribMem(n-1);
    //console.log("Returning result for rTrib(" + n + ")=" + myApp.myTrib[n]);
    return myApp.myTrib[n];
}

myApp.n = 30;
myApp.rTribMem(myApp.n);
myApp.rTribStr = "";
for (var i = 0; i <= myApp.n; i++)
{
    myApp.rTribStr += myApp.myTrib[i];
    if (i !== myApp.n) myApp.rTribStr += ", ";
}
console.log(myApp.rTribStr); //nice one line print
console.log(myApp.myTrib);   //print out memoized associative array we built

// Memoization (to make a memo or "to be remembered") is an optimization technique in which we use
// computer memory to remember past results to improve runtime.
