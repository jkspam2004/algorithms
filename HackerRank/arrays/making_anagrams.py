"""
Given two strings, count the number of deletions needed to make them anagrams of each other

Input:
cde
abc

Output:
4
"""

def making_anagrams(a, b):
    char_hash = {}
    num_deletions = 0

    for char in a:
        # initialize value for the key
        if char not in char_hash:
            char_hash[char] = 0
        # add up the frequency of the char
        char_hash[char] += 1

    for char in b:
        if char not in char_hash:
            char_hash[char] = 0
        # subtract from the fequency of the char
        char_hash[char] -= 1

    # go through hash and count up absolute value of frequency
    for char in char_hash:
        num_deletions += abs(char_hash[char])

    return num_deletions

print(making_anagrams("cde", "abc")) # 4
print(making_anagrams("dde", "abccc")) # 8
        
