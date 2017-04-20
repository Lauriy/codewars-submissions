import math


def beasts(a, b):
    h = (a - 2 * b) / 3
    d = b - h

    if h >= 0 and d >= 0:
        return [d, h]

    return 'No solutions'
