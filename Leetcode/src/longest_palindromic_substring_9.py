"""
Given a string s, find the longest palindromic substring in s. You may assume
that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
"""


class Palindrome:
    def longest_palindromic_substring(self, s: str) -> str:
        # for every letter we expand out left and right from the "center"
        """
        :type s: str
        :rtype: str
        """
        result = ""

        if len(s) < 2:
            return s

        for i in range(len(s)):
            odd = self.helper(s, i, i)  # odd string like aba
            even = self.helper(s, i, i + 1)  # even string like abba

            # get the longest string
            result = max(result, odd, even, key=len)

        return result

    # we keep expanding out so long as the letters at the edges equal
    # noinspection PyMethodMayBeStatic
    def helper(self, string, j, k):
        while j >= 0 and k < len(string) and string[j] == string[k]:
            j -= 1
            k += 1

        return string[j + 1: k]


""" max() - built-in function
max(a, b, c, ...[, key=func]) -> value

With a single iterable argument, return its largest item. With two or more
arguments, return the largest argument.

By default in Python 2 key compares items based on a set of rules based on the
type of the objects (for example a string is always greater than an integer).

To modify the object before comparison, or to compare based on a particular
attribute/index, you've to use the key argument.

https://stackoverflow.com/questions/18296755/python-max-function-using-key-and-lambda-expression
"""
