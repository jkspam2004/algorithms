module.exports = {

    reverseString: function(str) {
        console.log('original string is - ', str);
        //split() returns array of substrings

        /* strings are immutable - cannot change a character within a string */
        /* thus we split the string and assign to new variable array */
        var charArray = str.split("");
        for (var i = 0; i < Math.floor(charArray.length / 2); i++) {
            var temp = charArray[i];
            charArray[i] = charArray[charArray.length - 1 - i];
            charArray[charArray.length - 1 - i] = temp;
        }
        return 'reversed string is - ' + charArray.join("");
    },
    reverseString2: function(str) {
        console.log('original string is - '+ str);
        var newstr = '';
        for (var i = str.length - 1; i >=0; i-- ) {
            newstr += str[i];
        }
        return 'reversed string is - ' + newstr;
    } 
};
