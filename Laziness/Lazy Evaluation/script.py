from random import random
from math import sqrt
from time import time

def get_random_numbers(n):
    return [random() * 100 for _ in range(n)]

def eager():
    global xs, ys

    t_start = time()

    x_squared = [x * x for x in xs]
    y_squared = [y * y for y in ys]
    summed = [x + y for x, y in zip(x_squared, y_squared)]
    lengths = [sqrt(s) for s in summed]

    t_end = time()

    print(f'Eager evaluation took {t_end - t_start} seconds')

    return lengths

def lazy():
    global xs, ys
    
    t_start = time()

    lengths = [sqrt(x * x + y * y) for x, y in zip(xs, ys)]

    t_end = time()

    print(f'Lazy evaluation took {t_end - t_start} seconds')

    return lengths


n = 500000
xs = get_random_numbers(n)
ys = get_random_numbers(n)
# eager()
# lazy()

x_squared = map(lambda x: x * x, xs)
print(x_squared)