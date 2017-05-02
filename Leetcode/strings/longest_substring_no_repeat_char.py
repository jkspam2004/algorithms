"""
3. Longest Substring Without Repeating Characters

Find the longest substring without repeating characters
Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
"""

# sliding window technique
def longestSubstr(s):
    """ 
    Args:
        s : string
    Returns:
        longestSubstr : string
    """
    seenHash = {}
    start = 0
    longestSubstr = ""

    for i, char in enumerate(s):
        # if we have seen the character already, our new start will be one character 
        # after the occurence of the duplicate character
        if char in seenHash and start <= seenHash[char]:
            start = seenHash[char] + 1
        else: 
            # compare to our longest substring to the substring starting at "start" until current index
            if (i - start + 1) > len(longestSubstr):
                longestSubstr = s[start: i+1] 

        seenHash[char] = i # store the character and its current position

    return longestSubstr

str = "abcabcbb"
print(str)
print("longest", longestSubstr(str))
str = "bbbbb" 
print(str)
print("longest", longestSubstr(str))
str = "pwwkew"
print(str)
print("longest", longestSubstr(str))
str = "dvdf"
print(str)
print("longest", longestSubstr(str))
str = "tmmzuxt"
print(str)
print("longest", longestSubstr(str))

class Solution:
    # @return an integer
    def lengthOfLongestSubstring(self, s):
        start = maxLength = 0
        seenChar = {}
        longestSubstr = ""

        for i, char in enumerate(s):
            if char in seenChar and start <= seenChar[char]:
                start = seenChar[char] + 1
            else:
                if (i - start + 1) > maxLength:
                    longestSubstr = s[start:i+1]
                    maxLength = i - start + 1

            seenChar[char] = i

        print(longestSubstr)
        return maxLength

x = Solution()
print(x.lengthOfLongestSubstring("pwwkew"))
print(x.lengthOfLongestSubstring("bbbbb"))
print(x.lengthOfLongestSubstring("abcabcbb"))

            
