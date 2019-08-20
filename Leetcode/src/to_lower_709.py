""" 709. To Lower Case
Implement function ToLowerCase() that has a string parameter str, and returns
he same string in lowercase.

https://leetcode.com/problems/to-lower-case
"""


class ToLower:
    def to_lower_case(self, input_str: str) -> str:
        self.is_not_used()

        upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        lower = "abcdefghijklmnopqrstuvwxyz"
        lowered = ""

        for letter in input_str:
            found_idx = upper.find(letter)
            if found_idx >= 0:
                lowered += lower[found_idx]
            else:
                lowered += letter

        return lowered

    def is_not_used(self):
        pass


""" index of character in string 

find() vs index() 

There are two string methods for this, find() and index(). The difference between
the two is what happens when the search string isn't found.  find() returns -1 and
index() raises ValueError.

"""

""" "method may be static" warning

The warning happens on a member function that doesn't use self.

If you're sure PyCharm is wrong, that the function should not be a @staticmethod,
and if you value zero warnings, you can make this one go away two different ways:

Workaround #1

def bar(self):
    self.is_not_used()
    doing_something_without_self()

def is_not_used(self):
    pass
    
Workaround #2 [Thanks @DavidPärsson]

# noinspection PyMethodMayBeStatic
def bar(self):
    doing_something_without_self()
    
"""