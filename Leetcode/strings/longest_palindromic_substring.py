"""
5. Longest Palindromic Substring

Given a string, return the longest palindromic substring
Input:
babad
Output:
bab (can be aba)

Input:
cbbd
Output:
bb
"""

# for every letter we expand out left and right from the "center"
def longest_palindrome(str):
    result = ""

    if len(str) < 2:
        return str

    for i in range(len(str)):
        odd = helper(str, i, i) # odd string like aba
        even = helper(str, i, i+1) # even string like abba

        # get the longest string
        result = max(result, odd, even, key=len)

    return result


# we keep expanding out so long as the letters at the edges equal
def helper(str, j, k):
    while j >= 0 and k < len(str) and str[j] == str[k]:
        j -= 1
        k += 1

    # we added one to subtracted one from j and added one to k before we failed
    # the loop, adjust below. string start is j+1 and end is k-1
    return str[j+1 : k]

if __name__ == "__main__":

    print(longest_palindrome("babad"))
    print(longest_palindrome("cbbd"))
    print(longest_palindrome("baed"))
    print(longest_palindrome("malayalam"))
    print(longest_palindrome("babab"))
