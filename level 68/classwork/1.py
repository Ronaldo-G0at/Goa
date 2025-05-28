#Disemvowel Trolls
def disemvowel(string):
    vowels = "aeiouAEIOU"
    res = ""

    for i in string:
        if i not in vowels:
            res += i

    return 
    
#Square Every Digit
def square_digits(num):
    return int("".join([str(int(d)**2) for d in str(num)]))

#List Filtering
def filter_list(l):
    return [x for x in l if type(x) is not str]