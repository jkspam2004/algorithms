#!/bin/python3
'''
    You are given N sticks, where the length of each stick is a positive integer.
    A cut operation is performed on the sticks such that all of them are reduced
    by the length of the smallest stick.
    Print the number of sticks that are left before each subsequent cut operation.

    Input:
    6
    5 4 4 2 2 8

    First line is N number of sticks
    Next line is the length of each of the sticks

    Output:
    6
    4 
    2
    1

    Explanation:
    sticks-length        length-of-cut   sticks-cut
    5 4 4 2 2 8             2               6
    3 2 2 _ _ 6             2               4
    1 _ _ _ _ 4             1               2
    _ _ _ _ _ 3             3               1
    _ _ _ _ _ _           DONE            DONE

    https://www.hackerrank.com/challenges/cut-the-sticks
'''
import sys


n = int(input().strip())
arr = [int(arr_temp) for arr_temp in input().strip().split(' ')]

#for index,num  in enumerate arr

# O(n^2) time complexity
# each time we "cut" a stick, add it to our new list
def cut_sticks(arr):
    while(len(arr)):
        minval = arr[0]

        for num in arr:
            if num < minval:
                minval = num

        print(len(arr))
        newarr = []
        for index in range(len(arr)):
            diff = arr[index] - minval
            if diff > 0:
                newarr.append(diff)

        arr = newarr 

print("cut_sticks")
cut_sticks(arr)

# better solution still O(n^2) in time but constant for space
# utilize the N number of sticks given to us to control our while loop
# solution borrowed from Alex W.
def cut_sticks_better(n, a):
    # list is passed by reference. make a copy of values into new memory space below
    #arr = a[:] # method 1: slice
    arr = list(a)  # method 2: list()

    while(n > 0):
        minval = 1000

        print(n)
        for num in arr:
            if num != 0 and num < minval:
                minval = num

        for index in range(len(arr)):
            if arr[index] > 0:
                arr[index] = arr[index] - minval 
                if arr[index] == 0:
                    n -= 1 


print("cut_sticks_better")        
cut_sticks_better(n, arr)

# best solution: O(n log n) for the sorting up front - from discussion
# sticks = sorted(list(map(int, input().split())))
def cut_sticks_best(n, sticks):
    sticks.sort()

    previous_stick = 0
    for index, stick in enumerate(sticks):
        if stick != previous_stick:
            print(len(sticks) - index)
            previous_stick = stick


print("cut_sticks_best")
cut_sticks_best(n, arr)


'''
input:
8
1 2 3 4 3 3 2 1

output:
8
6
4
1
'''
