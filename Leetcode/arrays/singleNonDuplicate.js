/* Single Non Duplicates
 * Given an array of integers, return the number that is not a duplicate
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let lo = 0,
        hi = nums.length - 1;
        
    while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2);
        
        if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
            return nums[mid];
        }
        
        if (nums[mid] === nums[mid - 1] && mid % 2 === 1) {
            lo = mid + 1;
        } else if (nums[mid] === nums[mid + 1] && mid % 2 === 0) {
            lo = mid + 1;
        } else { // 2 other cases, change hi
            hi = mid - 1;
        }
    }
    return nums[lo];
};

arr = [1, 2, 2, 7, 7, 8, 8, 10, 10];
console.log(arr);
console.log(singleNonDuplicate(arr)); // 1


arr = [3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9];
console.log(arr);
console.log(singleNonDuplicate(arr)); // 9


arr = [2, 2, 3, 3, 4, 4, 5, 5, 6];
console.log(arr);
console.log(singleNonDuplicate(arr)); // 6

