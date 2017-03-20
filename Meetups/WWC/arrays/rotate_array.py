"""
Rotate an array by 3 positions to the right
"""

# O(n) in time complexity, O(n) for extra space
def rotate_array(arr, shiftby):
    arr_len = len(arr)

    while shiftby < 0: # negative offsets
        shiftby += arr_len
    while shiftby > arr_len: # reduce to small offsets
        shiftby = shiftby % arr_len

    print "shiftby", shiftby
    newarr = []
    for idx, item in enumerate(arr):
        print idx + shiftby
        if idx + shiftby > arr_len - 1: # going to wrap, adjust the index
            newarr.insert(idx + shiftby - arr_len, arr[idx])
        else:
            newarr.insert(idx + shiftby, arr[idx])

    return newarr

arr = [42, 10, 21, 8, 15, 35, 50]
print arr
print rotate_array(arr, -2) 

    
