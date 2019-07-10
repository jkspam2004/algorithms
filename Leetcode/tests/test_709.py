import pathmagic  # noqa
import unittest
from src.to_lower_709 import ToLower


class TestAlgo(unittest.TestCase):
    def test_mix(self):
        test = ToLower()
        self.assertEqual("hello", test.to_lower_case("HellO"))

    def test_all_lower(self):
        self.assertEqual("here", ToLower().to_lower_case("here"))

    def test_all_caps(self):
        self.assertEqual("lovely", ToLower().to_lower_case("LOVELY"))


if __name__ == "__main__":
    unittest.main()

