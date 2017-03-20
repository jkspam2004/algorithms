"""
Given a list of integers, shuffle them
input: [1, 2, 3, 4, 5]
"""
from random import randint

def shuffle_me(arr):
    for idx in range(len(arr) - 1):
        rand_idx = randint(idx, (len(arr)-1)) # starts at idx instead of idx+1 to 
                                              # occasionally keep same number at position
        if idx == rand_idx: # not swapping here, keep same number
            continue
        arr[idx], arr[rand_idx] = arr[rand_idx], arr[idx]

    return arr

# fisher-yates shuffle O(n)
def shuffle(arr):
    for idx in range(len(arr) - 1, 0, -1):
        rand_idx = randint(0, idx)
        if idx == rand_idx:
           continue
        arr[idx], arr[rand_idx] = arr[rand_idx], arr[idx]

    return arr
    
for times in range(20):
    print times, ": ", shuffle_me([1, 2, 3, 4, 5])
    #print times, ": ", shuffle([1, 2, 3, 4, 5])

"""
Fisher-Yates shuffle
To shuffle an array a of n elements (indices 0..n-1):
    for i from n - 1 downto 1 do 
       j <- random integer with 0 <= j <= i
       exchange a[j] and a[i]

Note:
range is non-inclusive: range(5) is 0 .. 4
randint is inclusive: randint(0,2) is 0 .. 2
"""
