import pathmagic
import unittest
from src.longest_palindromic_substring_9 import Palindrome


class TestAlgo(unittest.TestCase):
    def test_1(self):
        self.assertEqual(
            "bab",
            Palindrome().longest_palindromic_substring("babad")
        )

    def test_2(self):
        self.assertEqual(
            "bb",
            Palindrome().longest_palindromic_substring("cbbd")
        )


if __name__ == "__main__":
    unittest.main()
