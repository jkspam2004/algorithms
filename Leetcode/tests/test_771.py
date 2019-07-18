import pathmagic
import unittest
from src.jewels_and_stones_771 import JewelsAndStones


class TestAlgo(unittest.TestCase):
    def test1(self):
        self.assertEqual(3, JewelsAndStones().num_jewels_in_stones("aA", "aAAbbbb"))

    def test2(self):
        self.assertEqual(0, JewelsAndStones().num_jewels_in_stones("z", "ZZ"))


if __name__ == "__main__":
    unittest.main()
