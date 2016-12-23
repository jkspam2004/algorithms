module.exports = {
    bracesValid1: function(str){
        var trackerStack1 = [];
        for(var i=0; i<str.length; i++){
            // console.log(i);
            if(str[i] == "}" || str[i] == "]" || str[i] == ")"){
                // console.log(str[i], " ", i);
                if(trackerStack1.length === 0){
                    console.log(str, "is false, stack is - ", trackerStack1);
                    // trackerStack1 = [];
                    return false;
                }
                trackerStack1.pop();
            }
            if(str[i] == "{" || str[i] == "[" || str[i] == "("){
                trackerStack1.push(str[i]);
                // console.log(trackerStack1);
            }
        }
        if(trackerStack1.length === 0){
            console.log(str, "is true, stack is - ", trackerStack1);
            // trackerStack1 = [];
            return true;
        }
        console.log(str, "is false, stack is - ", trackerStack1);
        // trackerStack1 = [];
        return false;
    },
    bracesValid2: function(str) {
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
    }
};
