"""
Fibonacci:
 0, 1, 2, 3, 4, 5, 6, 7,  8,  9, ..
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ..]
"""

# top down
# recursive without memoization
# time: O(2^n), space: O(1)
# n is the level. each fib call has 2 nodes. 2^n
def fib_r(n):
    if n <= 1:
        return n

    return fib_r(n - 1) + fib_r(n - 2)

num = 9
print("recursive: ", fib_r(num))

# recursive with memoization, using list for the lookup table
# time: O(n), space: O(n)
def fib_r_memo(n, lookup):
    if n <= 1:
        lookup[n] = n

    if n not in lookup:
        lookup[n] = fib_r_memo(n - 1, lookup) + fib_r_memo(n - 2, lookup)

    return lookup[n]

lookup = [0]*(num + 1)
print("recursive with memo: ", fib_r_memo(num, lookup))

# bottom up
# iterative with caching, using list for lookup table
# time: O(n), space: O(n)
def fib_i_memo(n):
    if n < 1:
        return 0

    lookup = [0] * (n + 1)
    lookup[1] = 1

    for i in range(2, n + 1):
        lookup[i] = lookup[i - 1] + lookup[i - 2]

    return lookup[n]

print("iterative with memo: ", fib_i_memo(num))        

# iterative without memoization
# time: O(n), space: O(1)
def fib_i(n):
    if n == 0 or n == 1:
        return n

    prevPrevious = 0
    previous = 1
    for i in range(2, n + 1):  
        current = previous + prevPrevious
        prevPrevious = previous
        previous = current

    return current

print("iterative without memo:", fib_i(num))

# short solution from stackoverflow
def fib_short(n):
    a, b = 0, 1
    for i in range(0, n):
        a, b = b, a + b
    return a # returns previous previous (n - 2)

print("short solution: ", fib_short(num))


