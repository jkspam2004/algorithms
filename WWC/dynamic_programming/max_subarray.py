"""
Given an array of integers, return the contiguous subset with the maximum
sum of the integers
"""
def max_subarray(arr):
    min_index = 0
    max_index = 0
    curr_sum = 0 
    max_sum = 0

    for i in range(len(arr)):
        if arr[i] > curr_sum + arr[i]:
            min_index = i
            curr_sum = arr[i]
        else:
            curr_sum += arr[i]

        if curr_sum > max_sum:
            max_sum = curr_sum
            max_index = i

    return arr[min_index: max_index + 1]


#print(max_subarray([]))
print(max_subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) # [4, -1, 2, 1]
