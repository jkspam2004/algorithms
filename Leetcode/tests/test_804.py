import pathmagic  # noqa
import unittest
from src.unique_morse_codes_804 import MorseCode


class TestAlgo(unittest.TestCase):
    def test1(self):
        words = ["gin", "zen", "gig", "msg"]
        self.assertEqual(2, MorseCode().unique_morse_representations(words))


if __name__ == "__main__":
    unittest.main()
