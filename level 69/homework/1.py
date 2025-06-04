# 1) Even or Odd
number = int(input("Enter a number: "))
if number % 2 == 0:
    print("The number is even.")
else:
    print("The number is odd.")

# 2) Assign Grade Based on Score
score = int(input("Enter the score: "))
if score >= 90:
    print("Grade A")
elif score >= 80:
    print("Grade B")
elif score >= 70:
    print("Grade C")
elif score >= 60:
    print("Grade D")
else:
    print("Fail")

# 3) Largest Among Three Numbers
a = float(input("Enter first number: "))
b = float(input("Enter second number: "))
c = float(input("Enter third number: "))
if a == b == c:
    print("All numbers are equal.")
elif a >= b and a >= c:
    print("The largest number is:", a)
elif b >= a and b >= c:
    print("The largest number is:", b)
else:
    print("The largest number is:", c)

# 4) Vowel or Consonant
char = input("Enter a single letter: ")
if len(char) == 1 and char.isalpha():
    char = char.lower()
    if char in 'aeiou':
        print("It's a vowel.")
    else:
        print("It's a consonant.")
else:
    print("Invalid input.")

# 5) Divisibility by 3 and 5
num = int(input("Enter a number: "))
if num % 3 == 0 and num % 5 == 0:
    print("Divisible by both 3 and 5.")
elif num % 3 == 0:
    print("Divisible by 3 only.")
elif num % 5 == 0:
    print("Divisible by 5 only.")
else:
    print("Not divisible by either 3 or 5.")

# 6) Age Group Classification
age = int(input("Enter age: "))
if 0 <= age <= 12:
    print("Child")
elif 13 <= age <= 19:
    print("Teenager")
elif 20 <= age <= 59:
    print("Adult")
elif age >= 60:
    print("Senior")
else:
    print("Invalid age.")

# 7) While Loop: 1 to 5
num = 1
while num <= 5:
    print(num)
    num += 1

# 8) While Loop: Even Numbers 2 to 10
num = 2
while num <= 10:
    print(num)
    num += 2

# 9) While Loop: 10 to 1
num = 10
while num >= 1:
    print(num)
    num -= 1

# 10) For Loop: 1 to 10
for num in range(1, 11):
    print(num)

# 11) For Loop: First 5 Multiples of 3
for i in range(1, 6):
    print(i * 3)

# 12) For Loop: 10 to 1
for num in range(10, 0, -1):
    print(num)

# 13) For Loop: Even Numbers from 1 to 20
for num in range(1, 21):
    if num % 2 == 0:
        print(num)

# 14) For Loop: Sum from 1 to 5
total = 0
for num in range(1, 6):
    total += num
print("Sum:", total)