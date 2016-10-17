module.exports = function bracesValid1(str){
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
};
