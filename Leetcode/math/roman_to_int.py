"""
Convert a given roman numeral string to arabic integer
"""

hash = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

def RtoI(str):
    """
    :type str: str
    :rtype: int
    """
    length = len(str)
    number = 0

    if length == 0:
        return number

    for idx, char in enumerate(str):
        # current character or next character not in hash map
        if not char in hash or (idx < length - 1 and not str[idx + 1] in hash):
            return "invalid character"

        # the integer at idx + 1 is greater than the integer at current index, we 
        # subtract the number. otherwise, keep adding
        if (idx < length - 1) and (hash[str[idx+1]] > hash[char]):
            number -= hash[char]
        else:
            number += hash[char]

    return number

print(RtoI("MMIX"))
