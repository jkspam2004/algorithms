"""
    Reverse a string in place.
    Strings are immutable in Python. Convert to a list first. Swap values
    at low index with values at high index, coming towards the middle.
    O(n) time
    O(1) space
"""

class Solution(object):
    def reverse_string(self, str):
        str_list = list(str)
        lo = 0
        hi = len(str_list) - 1

        while lo < hi:
            str_list[lo], str_list[hi] = str_list[hi], str_list[lo]
            lo += 1
            hi -= 1

        return "".join(str_list)

if __name__ == "__main__":
    s = Solution()
    str = "hello world to you"
    print(str)
    answer = s.reverse_string(str)
    print(answer)
