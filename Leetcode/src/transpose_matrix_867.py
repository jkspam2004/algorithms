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
    def transpose2(self, arr: List[List[int]]) -> List[List[int]]:
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

    """ transpose using list comprehension """
    # noinspection PyMethodMayBeStatic
    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
        column_len = len(matrix[0])
        return [[row[i] for row in matrix] for i in range(column_len)]


""" Nested List Comprehensions
Python documentation: https://docs.python.org/2/tutorial/datastructures.html#list-comprehensions

# typically
[[expr_inner_loop for col in matrix] for row in matrix]
# equivalent to:
for row in matrix:
    for col in matrix
        expr_inner_loop

The initial expression in a list comprehension can be any arbitrary expression,
including another list comprehension.

Consider the following example of a 3x4 matrix implemented as a list of 3 lists of length 4:

>>> matrix = [
...     [1, 2, 3, 4],
...     [5, 6, 7, 8],
...     [9, 10, 11, 12],
... ]
The following list comprehension will transpose rows and columns:

>>> [[row[i] for row in matrix] for i in range(4)]
[[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]
As we saw in the previous section, the nested listcomp is evaluated in the context
of the for that follows it, so this example is equivalent to:

>>> transposed = []
>>> for i in range(4):
...     transposed.append([row[i] for row in matrix])
...
>>> transposed
[[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]
which, in turn, is the same as:

>>> transposed = []
>>> for i in range(4):
...     # the following 3 lines implement the nested listcomp
...     transposed_row = []
...     for row in matrix:
...         transposed_row.append(row[i])
...     transposed.append(transposed_row)
...
>>> transposed
[[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]
In the real world, you should prefer built-in functions to complex flow statements.
The zip() function would do a great job for this use case:

>>> zip(*matrix)
[(1, 5, 9), (2, 6, 10), (3, 7, 11), (4, 8, 12)]
"""