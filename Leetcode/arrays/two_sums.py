"""
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
"""

class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        dict = {}
        for idx, value in enumerate(nums):
            diff = target - nums[idx]
            if diff in dict:
                return [dict[diff], idx]
            else:
                dict[value] = idx
                
        return []

    # Using set does not work if duplicate values in list
    def twoSumSet(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        numSet = set()
        for idx, value in enumerate(nums):
            diff = target - nums[idx]
            if nums.index(diff) in numSet:
                return [nums.index(diff), idx]
            else:
                numSet.add(idx)
                
        return []


if __name__ == "__main__":
    x = Solution()
    print(x.twoSum([2, 7, 11, 15], 9))
    print(x.twoSum([3, 2, 3], 6))

    print(x.twoSumSet([2, 7, 11, 15], 9))
    #print(x.twoSumSet([3, 2, 3], 6)) # ValueError
