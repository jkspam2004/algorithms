"""
    Given an arabic integer, convert it to a roman numeral 
"""
number_map = {
    1000: "M",
     900: "CM",
     500: "D",
     400: "CD",
     100: "C",
      90: "XC",
      50: "L",
      40: "XL",
      10: "X",
       9: "IX",
       5: "V",
       4: "IV",
       1: "I",
}
sorted_list = sorted(number_map.keys())

# recursive solution using a hash mapping of arabic to roman numerals
def convert(number):

    if number in number_map:
        return number_map[number]
    
    key = find_largest_key(number)
    return number_map.get(key, '') + convert(number - key)

# walks through keys multiple times
def find_largest_key(number):
    for key in reversed(sorted_list):
        if key <= number:
            return key
    return None

for num in [1, 3, 4, 5, 6, 7, 8, 1001, 1989, 2017]:
    #print(num, convert(num))
    pass


num_list = [
    [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], \
    [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
]

# iterative solution
def convert2(number):
    roman = ""
    i = 0
    while (number >= 1 and len(num_list)):
        arabic = num_list[i][0]
        if arabic == number: # found our key, concatenate to string
            roman += num_list[i][1]
            number -= arabic
            i += 1
        elif arabic > number: # keep walking the list. our number is smaller than the "key"
            i += 1 
        else: # arabic < number, concatenate the string. don't increment i, we may need to add more 
            roman += num_list[i][1]
            number -= arabic

    return roman

for num in [2017]: #[1, 3, 4, 5, 6, 7, 8, 1001, 1989, 2017, 980, 480, 5000, 5001]:
    print(num, convert2(num))
