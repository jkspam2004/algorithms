import pathmagic
import unittest
from src.transpose_matrix_867 import Matrix


class TestAlgo(unittest.TestCase):
    def test_3by3(self):
        self.assertListEqual(
            [[1, 4, 7], [2, 5, 8], [3, 6, 9]],
            Matrix().transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
        )

    def test_2by3(self):
        self.assertListEqual(
            [[1, 4], [2, 5], [3, 6]],
            Matrix().transpose([[1, 2, 3], [4, 5, 6]])
        )

    def test_3by2(self):
        self.assertListEqual(
            [[1, 4, 7], [2, 5, 8]],
            Matrix().transpose([[1, 2], [4, 5], [7, 8]])
        )


if __name__ == "__main__":
    unittest.main()
