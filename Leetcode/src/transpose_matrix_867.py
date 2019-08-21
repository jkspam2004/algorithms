""" 867. Transpose Matrix
Given a matrix A, return the transpose of A.

The transpose of a matrix is the matrix flipped over it's main diagonal,
switching the row and column indices of the matrix.

Example 1:

Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
Example 2:

Input: [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]

https://leetcode.com/problems/transpose-matrix/
"""
from typing import List


class Matrix:
    # noinspection PyMethodMayBeStatic
    def transpose(self, arr: List[List[int]]) -> List[List[int]]:
        """
        Create new array to store.
        First initialize new array to new size. x with column size and y with row size
        Value of new array at y and x coordinates will be orig array's x, y coordinates
        """
        row_len = len(arr)
        column_len = len(arr[0])
        result = [[0 for c in range(0, row_len)] for r in range(0, column_len)]

        for r in range(0, row_len):
            for c in range(0, column_len):
                result[c][r] = arr[r][c]

        return result

