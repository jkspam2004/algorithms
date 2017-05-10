"""
Rotate array by given offset
"""

def rotate_array(arr, shiftBy):
    length = len(arr)
    if length < 2:
        return arr

    while shiftBy < 0:
        shiftBy += length

    newarr = [None]*length
    for index, val in enumerate(arr):
        offset = (index + shiftBy) % length
        newarr[offset] = val

    return newarr

arr = [3, 9, 2, 7, 0, 8]
print("orig: ", arr)
print("shift by 3:", rotate_array(arr, 3))
print("shift by -2:", rotate_array(arr, -2))
