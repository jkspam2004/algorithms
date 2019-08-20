""" 1108. Defanging an IP Address
Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

https://leetcode.com/problems/defanging-an-ip-address/
"""
import re


class DefangIPAddr:
    # noinspection PyMethodMayBeStatic
    def defang_ip_addr(self, address: str) -> str:
        p = re.compile("\\.")
        return p.sub("[.]", address)


""" replace() method
    return address.replace(".", "[.]")
    
replace() is an inbuilt function in Python programming language that returns
a copy of the string where all occurrences of a substring is replaced with
another substring.
    
"""
