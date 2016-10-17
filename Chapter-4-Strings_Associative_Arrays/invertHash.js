module.exports = function invertHash(assocArr){
    var newAssocArr = {};
    for(var key in assocArr){
        var value = assocArr[key];
        newAssocArr[value] = key;
    }
    return newAssocArr;
};
