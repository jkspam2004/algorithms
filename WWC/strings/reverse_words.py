"""
Given a string, reverse the order of the words
input: Hello world
result: world Hello
input: How are you
result: you are How
"""

# helper function to do the reverse/swaps
def reverse(arr, lo, hi):
    #print "reverse {} {}".format(lo, hi) 
    while lo < hi:
        arr[lo], arr[hi] = arr[hi], arr[lo]
        lo += 1
        hi -= 1

def reverse_words(str1):
    if not len(str1) > 1:
        return str1

    arr = list(str1)
    lo = 0
    hi = len(arr) - 1
    reverse(arr, lo, hi) # reverse the entire "string" => dlrow olleH
 
    for idx, char in enumerate(arr):
        if char == ' ':
            reverse(arr, lo, idx - 1) # reverse characters in the word
            lo = idx + 1

    reverse(arr, lo, hi) # final reverse since last char may not be a space

    return "".join(arr)

if __name__ == '__main__':
    word_string = "Hello world"
    print word_string
    print reverse_words(word_string)

    word_string = " How are you"
    print word_string
    print reverse_words(word_string)
