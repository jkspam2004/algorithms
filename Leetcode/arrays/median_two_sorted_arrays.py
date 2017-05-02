"""
4. Median of Two Sorted Arrays

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
"""

"""
Approach:
1. Find the middle index for the odd length of both arrays (without merging). Floor for even length.
2. Keep a counter
3. Start from beginning of both arrays. Increment index for the array where the value is smaller and update counter.
4. When counter reaches the mid length from step 1, get the value of the incremented index. 
"""
