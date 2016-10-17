module.exports = function parensValid(str){
    var parens = 0;
    for(var i=0; i<str.length; i++){
        // console.log(i + " " + str[i]);

        // Check closing parenthesis
        if(str[i] == ")"){
            //subtract from parens
            parens--;

        }
        // Check opening parenthesis
        if(str[i] == "("){
            // console.log('parens - ',parens);
            parens++;
        }
    }
    // positive parens means not enough closing parens
    // negative parens means extra closing parens
    if(parens === 0){
        return true + " : " + parens;
    }
    return false + " : " + parens;
};
