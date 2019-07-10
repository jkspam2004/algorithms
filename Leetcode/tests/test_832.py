import pathmagic
import unittest
from src.flipping_an_image_832 import FlipAndInvert


class TestAlgo(unittest.TestCase):
    def test1(self):
        self.assertListEqual(
            [[1, 0, 0], [0, 1, 0], [1, 1, 1]],
            FlipAndInvert().flip_and_invert([[1, 1, 0], [1, 0, 1], [0, 0, 0]])
        )

    def test2(self):
        self.assertListEqual(
            [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]],
            FlipAndInvert().flip_and_invert([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]])
        )

    def test3(self):
        self.assertEqual(
            [[0]],
            FlipAndInvert().flip_and_invert(([[1]]))
        )


if __name__ == "__main__":
    unittest.main()
