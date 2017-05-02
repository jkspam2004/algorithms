"""
258. Add Digits

Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?
"""

# O(n) solution using a loop
def addDigits(num):
    sum = 0
    while num >= 10:
        sum += num % 10 # sum up the remainder from 10
        num = (num - num % 10)//10 # // integer division in python3

        if num < 10:
            sum += num # when our number gets down to 1 digit, add number to the sum
            num = sum  # and reassign the sum to the number to start the loop over
            sum = 0    # reset the sum

    return num

print(addDigits(38)) # 2
"""
num | sum
38  | 0
38  | 8
3   | 11 (after 3 + 8)
11  | 0
11  | 1
1   | 2
2   | 0 

"""

# O(1) solution without a loop
def addDigitsConstantTime(num):
    if num == 0:
        return 0
    return num % 9 if num % 9 != 0 else 9

print(addDigitsConstantTime(285))

"""
(100a + 10b + c) %9 =
(a + 99a + b + 9b + c) %9 =
(a + b + c) % 9

285 = 10 + 5 = 15 = 1 + 5 = 6

(2 + 198 + 8 + 72 + 5) %9 = 
(2 + 8 + 5) %9 = 
15 %9 = 6
"""
