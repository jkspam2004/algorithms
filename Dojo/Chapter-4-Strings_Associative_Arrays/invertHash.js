module.exports = {
    invertHash: function (assocArr) {
        var newAssocArr = {};
        for(var key in assocArr){
            var value = assocArr[key];
            newAssocArr[value] = key;
        }
        return newAssocArr;
    }
};
