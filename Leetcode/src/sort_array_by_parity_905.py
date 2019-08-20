""" 905. Sort Array by Parity
Given an array A of non-negative integers, return an array consisting of all the
even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

https://leetcode.com/problems/sort-array-by-parity/
"""
from typing import List


class ArraySort:
    # noinspection PyMethodMayBeStatic
    def sort_array_by_parity(self, arr: List[int]) -> List[int]:
        even_arr = []
        odd_arr = []

        for val in arr:
            if val % 2 == 0:
                even_arr.append(val)
            else:
                odd_arr.append(val)

        even_arr.extend(odd_arr)
        """
        even_arr += odd_arr  # concatenating the arrays also works
        """

        return even_arr


""" Best solutions
    # Iterate over array and swap in place
    # https://leetcode.com/problems/sort-array-by-parity/discuss/171606/Python-2-pointer-in-place-swap-beats-99
    def sortArrayByParity(self, A):
        # :type A: List[int]
        # :rtype: List[int]
        start, end = 0, len(A) - 1
        # [3, 1, 2, 4]
        # start = 0, end = 3
        while start < end:
            m, n = A[start], A[end]
            if m % 2 == 1 and n % 2 == 0: # if start value odd and end value even, then swap
                A[start], A[end] = n, m
            elif m % 2 == 1: # if start value odd and end value odd (not caught by first if), move end pointer
                end -= 1
            elif n % 2 == 0: # if start val even and end value even, move start pointer (start val in right place)
                start += 1
            else: # if start val even and end value odd, move both pointers inward
                start += 1
                end -= 1
        return A

    # Iterate over array and swap in place O(n) which also will not use extra memory
    # https://leetcode.com/problems/sort-array-by-parity/discuss/188658/One-line-Python-beats-87
    def sort_array_by_parity(self, A: List[int]) -> List[int]:
        i, j = 0, len(A) - 1
        # [3, 1, 2, 4]
        # i = 0, j = 3
        while i <= j:
            if A[i] % 2 != 1: # even
                i += 1
                continue

            if A[j] % 2 != 0: # odd
                j -= 1
                continue

            A[i], A[j] = A[j], A[i]
            i += 1
            j -= 1

        return A
"""

