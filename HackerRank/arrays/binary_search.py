"""
Given a sorted array and a value, find the index of the value
"""

def binary_search(arr, val):
    lo = 0
    hi = len(arr) - 1

    while lo <= hi:
        mid = (lo + hi)// 2
        #print(mid, arr[mid])
        if val == arr[mid]:
            return mid

        if val < arr[mid]:
            hi = mid - 1
        elif val > arr[mid]:
            lo = mid + 1

    return False 

arr = [2, 3, 5, 7, 10, 15, 22, 37]
print(binary_search(arr, 4))
arr = [2, 3, 5, 7, 10, 15, 22]
print(binary_search(arr, 5))

def binary_search_recursive(arr, val, start=0, end=len(arr)-1):
    #print(start, end)
    if val < arr[start] or val > arr[end]:
        return False

    if end < start:
        return False

    mid = (start + end)//2
    if val == arr[mid]:
        return mid
    elif val < arr[mid]:
        return binary_search_recursive(arr, val, start, mid - 1)
    elif val > arr[mid]:
        return binary_search_recursive(arr, val, mid + 1, end)


print(binary_search_recursive(arr, 4))
