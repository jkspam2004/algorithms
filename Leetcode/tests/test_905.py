import pathmagic
import unittest
from src.sort_array_by_parity_905 import ArraySort


class TestAlgo(unittest.TestCase):
    def test_mix(self):
        self.assertListEqual(
            [2, 4, 3, 1],
            ArraySort().sort_array_by_parity([3, 1, 2, 4])
        )

    def test_mix2(self):
        self.assertListEqual(
            [4, 2, 1, 3],
            ArraySort().sort_array_by_parity([4, 1, 2, 3])
        )

    def test_evens(self):
        self.assertListEqual(
            [8, 6, 2, 4],
            ArraySort().sort_array_by_parity([8, 6, 2, 4])
        )

    def test_odds(self):
        self.assertListEqual(
            [7, 5, 1, 9],
            ArraySort().sort_array_by_parity([7, 5, 1, 9])
        )


if __name__ == "__main__":
    unittest.main()
