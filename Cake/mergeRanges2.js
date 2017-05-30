/*
    mergeRanges
    Given an unsorted list of 2 item (start, end) lists, return a list of condensed ranges
    Merge the overlaps
*/

function mergeRanges(list) {
    let sorted = list.slice().sort(function(a, b) {
        return a[0] < b[0] ? -1 : 1;
    });
    let merged = [sorted[0]],
        i = 1,
        len = sorted.length;

    for (; i < len; i++) {
        let current = sorted[i];
        let last = merged[merged.length - 1];
        if (last[1] >= current[0]) {
            //merged[merged.length - 1][1] = Math.max(last[1], current[1]);
            last[1] = Math.max(last[1], current[1]);
        } else {
            merged.push(current);
        }
    }

    return merged;
}

list = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
console.log(mergeRanges(list));
list = [[1, 10], [2, 6], [3, 5], [7, 9]];
console.log(mergeRanges(list));

