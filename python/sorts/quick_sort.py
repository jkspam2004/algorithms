'''
  Quick Sort
  Sort an array using Quick Sort algorithm.
  Solution: using a partition function and recursion.
  Complexity: O(n logn)

  Approach:
  Partition (divide and conquer) an array into two parts, using a chosen pivot.
  Every element less than the pivot value will be placed to the left of the pivot
  and every element greater the pivot value will be placed on the right.
  The pivot will then be in its rightful sorted position.
  Continue to partition until all elements sorted.
'''

def partition(arr, start, end):
    i = start - 1
    piv = arr[end]

    for j in range(start, end):
      if arr[j] < piv:
        i += 1
        swap(arr, i, j)

    i += 1
    swap(arr, i, end)
    return i

def quick_sort(arr, start=None, end=None):
    if start == None or end == None:
      start = 0
      end = len(arr) - 1
 
    if start < end:
      p = partition(arr, start, end)
      print "p", p
      arr = quick_sort(arr, start, p-1)
      arr = quick_sort(arr, p+1, end)

    return arr

def swap(arr, i, j):
    temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
    return arr

sorted = quick_sort([20, 12, 1, 0, 9, 8, 0])
print sorted
sorted = quick_sort([2, 9, 7, 8, 1, 7])
print sorted
     

