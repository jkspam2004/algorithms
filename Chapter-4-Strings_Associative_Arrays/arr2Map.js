module.exports = function arr2MAp(arr1, arr2){
    var map = {};
    for(var i=0; i<arr1.length; i++){
        if(i>=arr2.length){
            break;
        }
        map[arr1[i]] = arr2[i];
    }
    return map;
};
