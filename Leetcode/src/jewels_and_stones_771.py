"""
You're given strings J representing the types of stones that are jewels,
and S representing the stones you have.  Each character in S is a type of stone
you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters.
Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0
"""


class JewelsAndStones:
    def num_jewels_in_stones(self, jewels: str, stones: str) -> int:
        jewel_set = set()
        jewels_count = 0

        for jewel in jewels:
            jewel_set.add(jewel)

        for stone in stones:
            if stone in jewel_set:
                jewels_count += 1

        print(list(map(stones.count, jewels)))
        return jewels_count


""" one-liner solution 
    return sum(map(stones.count, jewels))
    
for each item in jewels, execute count function (map) 
count returns number of times jewel item appears in stones
sum up the count
    
https://leetcode.com/problems/jewels-and-stones/discuss/113574/1-liners-PythonJavaRuby
"""
