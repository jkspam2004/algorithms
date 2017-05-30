"""
    binary_search: Given a sorted array, determine if specified value exists 
    in the array
"""

def binary_search(arr, val):
    lo = 0
    hi = len(arr) - 1

    if len(arr) == 0:
        return False

    if val < arr[lo] or val > arr[hi]:
        return False

    while lo <= hi:
        mid = (lo + hi) // 2

        if val == arr[mid]:
            return True
        elif val < arr[mid]:
            hi = mid - 1
        elif val > arr[mid]:
            lo = mid + 1

    return False

arr = [39, 40, 52, 53, 55, 67, 70, 89]
print("orig:", arr)
answer = binary_search(arr, 45)
print(answer) 
arr = []
print("orig:", arr)
answer = binary_search(arr, 35)
print(answer) 

