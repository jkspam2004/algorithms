"""
Given a list of integers and a value, find the pairs of values in the array that sum up to given value

input: [1, 5, 7, 2, 3, 5, 6], k=9
output: [[7, 2], [3,6]]
"""

# brute force O(n^2). loop through list and sum up each pair
def sum_pairs_to_val(arr, val):
    result = []
    for idx in range(0, len(arr)):
        for in_idx in range(idx+1, len(arr)):
            if arr[idx] + arr[in_idx] == val:
                result.append([arr[idx], arr[in_idx]])   

    return result

arr = [1, 5, 7, 2, 3, 5, 6] 
k=9
print sum_pairs_to_val(arr, k)

# O(nlogn). sort first then compare/sum beginning and end of array
def sum_pairs_sort(arr, val):
    lo_idx = 0
    hi_idx = len(arr) - 1
    result = []
   
    arr.sort() # sort the list first
    while lo_idx < hi_idx:
        sum_pairs = arr[lo_idx] + arr[hi_idx]
        if sum_pairs == val:
            result.append([arr[lo_idx], arr[hi_idx]])
            lo_idx += 1
            hi_idx -= 1
        elif sum_pairs < val:
            lo_idx += 1
        elif sum_pairs > val:
            hi_idx -= 1

    return result

print sum_pairs_sort(arr, k)

# O(n). use hash table
def sum_pairs_best(arr, val):
    hash = {}
    result = []
    total_pairs = 0
    for num in arr:
       diff = val - num
       if num in hash:
           result.append([num, diff]) 
           total_pairs += 1
       else:
           hash[diff] = 1

    print "total_pairs", total_pairs

    return result

arr = [1, 5, 7, 2, 3, 5, 6] 
print sum_pairs_best(arr, k)

