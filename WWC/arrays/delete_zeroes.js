// Given a list, remove all zeros

// use splice
function delete_zeroes(list, val) {
    var index = list.length;
    console.log("length", index);
    while (index--) {
        console.log(index);
        if (list[index] == val) {
            list.splice(index,1);
        }
    }
    return list;
}

console.log(delete_zeroes([0, 1, 0, 0, 9, 8, 7, 0, 0], 0));
