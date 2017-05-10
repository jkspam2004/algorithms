## david@outco.io

#
# most_common_element
#
# Write a function which accepts an input list of
# integers and returns the integer which appears
# most freqently.
#

def most_common_element(input):
    ## your code here
    num_counts = {}
    highest_key = None
    max_frequency = 0
    for num in input:
        if num in num_counts:
            num_counts[num] += 1
        else:
            num_counts[num] = 1
        
        if num_counts[num] > max_frequency:
            max_frequency = num_counts[num]
            highest_key = num
            
    print num_counts
    

    return highest_key
    
## print most_common_element([2,1,9,1,2,3,1,9]) ## 1


#
# reverse_vowels
#
# Write a function which accepts a word in character array
# format and returns that word with all of its vowels reversed.
#

def reverse_vowels(word):
    print word
    lo = 0
    hi = len(word) - 1
    vowels = {'a': 1, 'e': 1, 'i': 1, 'o':1, 'u':1}
    
    while (lo < hi):
        if word[lo] in vowels and word[hi] in vowels:
            (word[lo], word[hi]) = (word[hi], word[lo])
            lo += 1
            hi -= 1
            
        if word[lo] not in vowels:
            lo += 1
            
        if word[hi] not in vowels:
            hi -= 1
            
    return word
    
#print reverse_vowels(['d','a','v','i','d','o','p','e'])
## ['d','e','v','o','d','i','p','a']
## print reverse_vowels(['d','a','o','i','u','b'])

#
# min_steps_to_one
#
# Write a function which accepts an integer and returns
# the minimum steps to 1 from that integer assuming we can 
# perform the following operations:
#
# 1) Divide by 3 if input divisible by 3
# 2) Divide by 2 if input divisible by 2
# 3) Subtract 1
#

# using recursion: going from input number down to 1
def min_steps_to_one(int):
    div_2 = div_3 = decr_1 = int 

    if int <= 1:
        return 0

    if int % 2 == 0:
        div_2 = min_steps_to_one(int / 2)

    if int % 3 == 0:
        div_3 = min_steps_to_one(int / 3)

    decr_1 = min_steps_to_one(int - 1)

    return 1 + min(div_2, div_3, decr_1)

    
print min_steps_to_one(10) ## 3

## 10 (-1) 9 (/3) 3 (/3) 1 = 3
## 10 (/2) 5 (-1) 4 (/2) 2 (/2) 1 = 4

# dynamic programming. iterative approach to save subproblems: from 1 to input number
def min_steps(num):
    result = { 1: 0 }
    steps = { 1: 'no_op' }

    for i in range(2, num+1):
        result[i] = result[i-1] + 1
        steps[i] = 'decr_1'
        if i % 2 == 0:
            if result[i/2] + 1 < result[i]:
                result[i] = result[i/2] + 1 
                steps[i] = 'div_2'

        if i % 3 == 0:
            if result[i/3] + 1 < result[i]:
                result[i] = result[i/3] + 1
                steps[i] = 'div_3'

    print steps

    # print the steps to get to 1
    for j in range(result[num], 0, -1):
        print steps[num]

        if steps[num] == 'decr_1':
            num = num - 1
        elif steps[j] == 'div_2':
            num = num / 2
        else:
            num = num /3 

    # return mininum steps to get to 1
    return result[num]

print min_steps(10)
