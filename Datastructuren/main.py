from time import time

'''
Speed test for different algorithms for determening if a number is prime.
1. Algorithm
'''

prime_set = { 2 }
prime_list = [2]

def is_prime1(n):
    for x in range(2, n):
        if x * x > n:
            break
        if n % x == 0:
            return False
    return True

def is_prime2(n):
    return n in prime_set

def is_prime3(n):
    for p in prime_list:
        if p > n:
            break
        if p == n:
            return True
    return False

def is_prime4(n):
    for p in prime_set:
        if n % p == 0:
            return False
    return True

def is_prime5(n):
    for p in prime_list:
        if p * p > n:
            return False
        if n % p == 0:
            return False
        return True

for n in range(3, 10**6, 2):
    if is_prime1(n):
        prime_set.add(n)
        prime_list.append(n)

def test_func(f, x):
    t0 = time()
    res = f(x)
    t = time()

    print(f, x, res, t - t0)

while True:
    x = int(input('geef een getal om te checken: '))

    test_func(is_prime1, x)
    test_func(is_prime2, x)
    test_func(is_prime3, x)
    test_func(is_prime4, x)
    test_func(is_prime5, x)
