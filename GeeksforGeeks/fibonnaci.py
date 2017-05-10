""" Fibonacci 
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
"""

# tabulation. bottom up. iterative
def fib(n):
    if n == 0:
        return 0

    # array declaration
    f = [0]*(n+1)
    print(f)

    # base case assignment
    f[1] = 1

    # calculating the fibonacci and storing the values
    for i in range(2, n+1):
        f[i] = f[i-1] + f[i-2]

    print(f)
    return f[n]

num = 9
print("tabulated:", fib(num)) # 34


# memoization with lookup list table. top down. recursive
def fib_recursive(n, lookup):
    if n <= 1:
        lookup[n] = n

    if n not in lookup:
        lookup[n] = fib_recursive(n-1, lookup) + fib_recursive(n-2, lookup)

    #print(lookup)
    return lookup[n]

# lookup table up to n = 100
lookup = [None]*(101)
print(type(lookup))
print("memoized:", fib_recursive(num, lookup))

# http://www.geeksforgeeks.org/dynamic-programming-set-1/

# constant space O(1). time: O(n)
def fib_constant_space(n):
    if n <= 1:
        return n

    prevPrev = 0
    prev = 1

    for i in range(2, n+1):
        current = prev + prevPrev
        prevPrev = prev
        prev = current

    return current

print("constant space:", fib_constant_space(num))
