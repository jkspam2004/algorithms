"""
    Remove vowels from a given string

    test.assert_equals(disemvowel("This website is for losers LOL!"),
                                  "Ths wbst s fr lsrs LL!")
"""

# my solution
def disemvowel(s):
    vowels = ("a", "e", "i", "o", "u")

    newstr = ""
    for char in s:
        if char.lower() not in vowels:
            newstr += char
    
    return newstr

s = "This website is for losers LOL!"
newstr = disemvowel(s)
print(newstr)

# someone else's sleek solution
def disemvowel2(string):
    return "".join(c for c in string if c.lower() not in "aeiou")

newstr = disemvowel2(s)
print(newstr)


