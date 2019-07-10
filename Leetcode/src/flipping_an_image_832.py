from typing import List

"""
Given a binary matrix A, we want to flip the image horizontally, then invert it,
and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.
For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.
For example, inverting [0, 1, 1] results in [1, 0, 0].
"""


class FlipAndInvert:
    def flip_and_invert(self, alist: List[List[int]]) -> List[List[int]]:
        for row in alist:
            row_len = len(row)
            midfloor = row_len//2

            for i in range(midfloor):
                self._swap(row, i, row_len)

            """ take care of the middle item if odd elements in list """
            if row_len % 2 == 1:
                row[midfloor] = self._invert(row[midfloor])

        return alist

    """ swap left and right elements """
    def _swap(self, row, i, row_len):
        row[i], row[row_len - 1 - i] = self._invert(row[row_len - 1 - i]), self._invert(row[i])

    """ flip the numbers. if 1, then 0. if 0, then 1 """
    # noinspection PyMethodMayBeStatic
    def _invert(self, num):
        return 0 if num == 1 else 1


""" math and floor without using Math lib
>>> 3/2
1.5
>>> 3//2
1
>>> -(-3//2)
2
"""
