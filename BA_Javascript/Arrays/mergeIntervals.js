/*
    Given a set of non-overlapping and sorted intervals, insert a new interval 
    into the intervals (merge if necessary). The list of intervals is sorted by
    the "start", the first integer in the two item list.

    example 1:
    inputs:
    [[1, 3], [6, 9]] and [2, 5]
    output:
    [[1, 5], [6, 9]]

    example 2:
    inputs:
    [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]] and [4, 9]
    output:
    [[1, 2], [3, 10], [12, 16]]
*/

function mergeIntervals(list, interval) {
    let i = 0,
        length = list.length,
        result = [];

    list.forEach(function(current, index) {
        if (current[0] > interval[1]) { // non-overlapping
            result.push(interval);
            interval = current;
        } else if (current[1] < interval[0]) { // non-overlapping
            result.push(current);
        } else { // overlapping
            interval[0] = Math.min(current[0], interval[0]);
            interval[1] = Math.max(current[1], interval[1]);
        }
    });

    result.push(interval);
    return result;
}

list = [[1, 3], [6, 9], [8, 9]];
interval = [2, 5];
console.log(mergeIntervals(list, interval)); // [[1, 5], [6, 9]]

list = [[3, 5]];
interval = [1, 3];
console.log(mergeIntervals(list, interval)); // [[1, 3]]

list = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]
interval = [4, 9]
console.log(mergeIntervals(list, interval)); // [[3, 5], [6, 7], [8, 10]]

function mergeIntervals2(list, interval) {
    let i,
        merged = [],
        len = list.length;

    if (interval[0] < list[0][0]) {
        merged.push(interval);
        i = 0;
    } else {
        merged.push(list[0]);
        i = 1;
    }

    for (; i < len; i++) {
        let last = merged[merged.length - 1];
        let current = list[i];

        if (last[1] >= current[0]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            merged.push(current);
        }
    }

    return merged;

}

list = [[1, 3], [6, 9]];
interval = [2, 5];
console.log(mergeIntervals2(list, interval));

list = [[3, 5]];
interval = [1, 3];
console.log(mergeIntervals2(list, interval));


list = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]
interval = [4, 9]
console.log(mergeIntervals2(list, interval));
