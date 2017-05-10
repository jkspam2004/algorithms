"""
Given a list of integers, remove all the zeros
"""

# list comprehension
def remove_zeroes(arr, val):
    arr[:] = [i for i in arr if i != val]
    return arr

print remove_zeroes([1, 3, 0, 0, 5, 0, 7, 0, 0, 0, 9], 0)

# remove(). not optimal solution?
def remove_val(arr, val):
    while val in arr:
        arr.remove(val)
    return arr

print remove_val([1, 0, 0, 2, 0, 5], 0)

# lambda and filter
x = [0, 0, 5, 9, 0, 8, 0, 0]
print filter(lambda a: a != 0, x)

