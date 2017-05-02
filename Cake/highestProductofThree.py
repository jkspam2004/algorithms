"""
Given a list of integers, find the highest product of three integers
"""

def getHighestProductOfThreeInt(arr):
    """
    Args:
        arr: list
    Returns: 
        highestProductOfThreeInts: integer
    """

    if len(arr) < 3:
        raise Exception("Less than 3 items in array")

    highestProductOfThreeInts = 1
    highestProdOfTwoInts = 1
    lowestProdOfTwoInts = 1
    highest = arr[0]
    lowest = arr[0]
   
    # O(n) greedy approach.  keep running track of a few things 
    for currNum in arr:
        # highest product of three integers can be the highest product of two integers
        # times the current number.
        highestProductOfThreeInts = max(
            highestProductOfThreeInts, 
            highestProdOfTwoInts * currNum,
            lowestProdOfTwoInts * currNum,
        )
        # highest product of two integers can be the highest number times the current number
        # or the lowest negative number times a current negative number
        highestProdOfTwoInts = max(
            highestProdOfTwoInts,
            highest * currNum,
            lowest * currNum
        )
        # similarly, lowest product of two integers can be the highest positive number times
        # a current negative number or lowest negative number times a current positive number
        lowestProdOfTwoInts = min(
            lowestProdOfTwoInts,
            highest * currNum,
            lowest * currNum
        )
        # determine the highest and lowest numbers for the next iteration
        highest = max(highest, currNum)
        lowest = min(lowest, currNum)

    return highestProductOfThreeInts

if __name__ == "__main__":
    print(getHighestProductOfThreeInt([-1, -4, 5, 1, 2, 0, 4])) # 40
    print(getHighestProductOfThreeInt([1, 10, -5, 1, -100])) # 5000
    print(getHighestProductOfThreeInt([-10, -10, 1, 3, 2])) # 300

    
