import pathmagic
import unittest
from src.defang_ip_address_1108 import DefangIPAddr


class TestAlgo(unittest.TestCase):
    def test1(self):
        self.assertEqual("1[.]1[.]1[.]1", DefangIPAddr().defang_ip_addr("1.1.1.1"))

    def test2(self):
        self.assertEqual("255[.]100[.]50[.]0", DefangIPAddr().defang_ip_addr("255.100.50.0"))


if __name__ == "__main__":
    unittest.main()
