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

def findMedianSortedArrays(m, n):
    length = len(m) + len(n)
    midpoint = length // 2

    counter = 0
    i = 0
    j = 0

    while i < len(m) and j < len(n):
        if m[i] <= n[j]:
            i += 1
            counter += 1
            if counter == midpoint:
                return m[i]
        elif m[i] > n[j]:
            j += 1
            counter += 1
            if counter == midpoint:
                return n[j]


    while i < len(m):
        if counter == midpoint:
            return m[i]
        else:
            counter += 1
            i += 1

    while j < len(n):
        if counter == midpoint:
            return n[j]
        else:
            counter += 1
            j += 1


#print(findMedianSortedArrays([1, 2], [3, 4, 5]))
#print(findMedianSortedArrays([1, 2, 3], [4, 5, 6, 7, 8, 9]))
print(findMedianSortedArrays([1, 3], [2]))
