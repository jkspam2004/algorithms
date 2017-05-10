"""
Reverse a list in place
"""

def reverse_list(arr):
    lo = 0
    hi = len(arr) - 1

    while lo < hi:
        arr[lo], arr[hi] = arr[hi], arr[lo]
        lo += 1
        hi -= 1

    return arr

print reverse_list([1, 2, 3, 4, 5])
