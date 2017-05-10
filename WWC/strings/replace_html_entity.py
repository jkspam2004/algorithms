"""
Given a string, replace spaces with %20
input: Mr John Smith
output: Mr%20John%20Smith

"""

def replace(str1):
    newstr = ""
    special_char = "%20"

    for idx, char in enumerate(str1):
        if char == " ":
            newstr += special_char
        else:
            newstr += char

    return newstr

if __name__ == '__main__':
    str1 = "Mr John Smith"
    print replace(str1)

