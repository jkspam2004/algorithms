module.exports = function bracesValid2(str) {
    var trackerStack2 = [];
    for (var i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "(":
            case "[":
            case "{":
                trackerStack2.push(str[i]);
                // console.log(trackerStack2);
                break;
            case ")":
                if (trackerStack2.pop() != "(" || trackerStack2.pop() === undefined) {
                    // console.log(str, "is false ), stack is - ", trackerStack2);
                    return false;
                }
                break;
            case "]":
                if (trackerStack2.pop() != "[" || trackerStack2.pop() === undefined) {
                    // console.log(str, "is false ], stack is - ", trackerStack2);
                    return false;
                }
                break;
            case "}":
                if (trackerStack2.pop() != "{" || trackerStack2.pop() === undefined) {
                    // console.log(str, "is false }, stack is - ", trackerStack2);
                    return false;
                }
                break;
        }
    }
    if(trackerStack2.length === 0){
        // console.log(str, "is true, stack is - ", trackerStack2);
        return true;
    }
};
