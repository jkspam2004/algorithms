"""
Given an array of integers, return an array with the product of all integers 
except at the index

example:
input: [1, 5, 2, 3]
output: [30, 6, 15, 10] => [5*2*3, 1*2*3, 1*5*3, 1*5*2]
"""


def getProductsOfAllIntsExceptAtIndex(arr):
    """
    Args:
        arr: list
    Returns:
        arr: list (productOfAllIntsExceptIndex)
    """

    if len(arr) < 2:
        raise IndexError("Must have at least 2 integers for product")

    # product of integers before the index
    productInt = 1
    productBeforeArr = []
    for num in arr:
        productBeforeArr.append(productInt)
        productInt *= num

    #print(productBeforeArr) 

    # product of integers after the index
    # walk through the list backwards
    productInt = 1
    productAfterArr = [None] * len(arr) # hold our array
    for idx in range(len(arr) - 1, -1, -1):
        productAfterArr[idx] = productInt
        productInt *= arr[idx]

    #print(productAfterArr)

    # putting it together
    # product of integers except at index = product of ints before index * product of ints after index
    for idx in range(len(arr)):
        arr[idx] = productBeforeArr[idx] * productAfterArr[idx]


    #print(arr)
    return arr


if __name__ == "__main__":
    input_arr = [1, 5, 2, 3]
    print(getProductsOfAllIntsExceptAtIndex(input_arr))
    input_arr = [0, 0, 0, 0]
    print(getProductsOfAllIntsExceptAtIndex(input_arr))
    input_arr = [5]
    print(getProductsOfAllIntsExceptAtIndex(input_arr))


