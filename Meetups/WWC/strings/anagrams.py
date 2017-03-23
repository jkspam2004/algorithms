"""
Given two strings, determine if they are anagrams of each other (same characters, different order)
input: steak 
output: stake
"""

# Use hash map to keep occurrence count of characters O(n) time complexity
def is_anagram(str1, str2):
    if len(str1) != len(str2):
        return False

    char_count = {}
    for letter in str1:
        if letter in char_count:
            char_count[letter] += 1
        else:
            char_count[letter] = 1

    for letter in str2:
        if letter in char_count:
            char_count[letter] -= 1
        else:
            return False

    for letter in char_count:
        if char_count[letter] != 0:
            return False

    return True

if __name__ == '__main__':
    str1 = "chair"
    str2 = "cow"
    print is_anagram(str1, str2)

    str1 = "boat"
    str2 = "tubs"
    print is_anagram(str1, str2)

    str1 = "iceman"
    str2 = "cinema"
    print is_anagram(str1, str2)


