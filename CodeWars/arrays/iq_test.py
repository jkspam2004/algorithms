"""
Description:

Bob is preparing to pass IQ test. The most frequent task in this test is to find 
out which one of the given numbers differs from the others. Bob observed that 
one number usually differs from the others in evenness. Help Bob — to check his a
answers, he needs a program that among the given numbers finds one that is 
different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means 
indexes of the elements start from 1 (not 0)

##Examples :

iq_test("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers 
are even

iq_test("1 2 1 1") => 2 // Second number is even, while the rest of the numbers
 are odd
"""

# my solution
def iq_test(numbers):
    int_lst = [int(x) for x in numbers.split(" ")]
    odd = []
    even = []
    for i, val in enumerate(int_lst):
        if val % 2 == 1:
            odd.append(i)
        else:
            even.append(i)
        if len(even) > 0 and len(odd) > 0:
            if len(even) > len(odd):
                return odd[0] + 1
            elif len(odd) > len(even):
                return even[0] + 1

numbers = "2 4 7 8 10"
answer = iq_test(numbers)
print(answer) # 3

# other solutions
def iq_test2(numbers):
    e = [int(i) % 2 == 0 for i in numbers.split()]

    return e.index(True) + 1 if e.count(True) == 1 else e.index(False) + 1

# other solutions
def iq_test3(n):
    # list of zeros and ones, depending on even/odd
    n = [int(i) % 2 for i in n.split()]

    if n.count(0) > 1: # more evens
        return n.index(1) + 1  # look at index of odd 
    else: # more odds
        return n.index(0) + 1  # look at index of even

answer = iq_test3(numbers)
print(answer) # 3
