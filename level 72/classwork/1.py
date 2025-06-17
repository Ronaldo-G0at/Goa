def is_square(n):    
    if n < 0: return False

    if int(n**0.5)*int(n**0.5)==n: return True
    return False

def get_middle(s):
    if len(s)%2 == 0:
        return s[len(s)//2-1:len(s)//2+1]
    else:
        return s[len(s)//2]

def is_isogram(string):
    string1 = string.lower()
    return len(string1) == len(set(string1))

def xo(s):
    s1 = s.lower()
    return s1.count("o") == s1.count("x")

def to_jaden_case(string):
    string1 = [i.capitalize() for i in string.split(" ")]
    return " ".join(string1)

def find_short(s):
    s = s.split(" ")
    res = 1000000
    
    for i in s:
        if len(i) < res:
            res = len(i)
    return res

def solution(text, ending):
    return text[len(ending)*-1:] == ending

def maskify(cc):
    if len(cc) <= 4:
        return cc
    return "".join(["#" if x < len(cc) - 4 else cc[x] for x in range(len(cc)) ])