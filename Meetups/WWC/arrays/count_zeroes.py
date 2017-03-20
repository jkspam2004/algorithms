"""
    Given a sorted list, count the number of zeroes
    input: [0, 0, 0, 1, 1, 1]
    output: 3
    input: [0, 1, 1, 1, 1, 1]
    output: 1
    input: [0, 0, 0, 0, 0, 1]
    output: 5
"""

# linear solution, walking the list and count when number equals 0
def count_zeroes(arr):
    count_zeroes = 0
    for num in arr:
        if num == 0:
            count_zeroes += 1

    return count_zeroes

arr = [0, 0, 0, 1, 1, 1]
#print count_zeroes(arr)

# binary search, O(log n) 
def count_zeroes_best(arr):
    lo_idx = 0
    hi_idx = len(arr) - 1

    while lo_idx < hi_idx:
        mid_idx = (lo_idx + hi_idx)/2
        if arr[mid_idx] == 0 and arr[mid_idx + 1] > 0:
            return mid_idx + 1
        elif arr[mid_idx] > 0 and arr[mid_idx - 1] == 0:
            return mid_idx
        elif arr[mid_idx] == 0:
            lo_idx = mid_idx + 1
        elif arr[mid_idx] > 0:
            hi_idx = mid_idx - 1

    return -1

arr = [0, 0, 0, 1, 1, 1]
print count_zeroes_best(arr)
arr = [0, 1, 1, 1, 1, 1]
print count_zeroes_best(arr)
arr = [0, 0, 0, 0, 0, 1]
print count_zeroes_best(arr)
