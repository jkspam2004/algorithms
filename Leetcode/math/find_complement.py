"""
476. Number Complement

Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

Note:
The given integer is guaranteed to fit within the range of a 32-bit signed integer.
You could assume no leading zero bit in the integer's binary representation.

input: 5
output: 2

input: 1
output: 0
"""


def findComplement(num):
    i = 1
    while i <= num:
        i = i << 1
        print(i)
    return (i - 1) ^ num

#print(findComplement(1)) # 0
print(findComplement(5)) # 2

"""
num = 5
i | i << 1
1 | 001 << 1 = 010 = 2
2 | 010 << 1 = 100 = 4
4 | 100 << 1 = 1000 = 8

i - 1
8 - 1 = 7 = 111

(i - 1) ^ num
7 xor 5

  111
^ 101
-----
  010 = 2

"""
