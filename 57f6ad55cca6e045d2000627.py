from math import sqrt


def square_or_square_root(arr):
    ret = []
    for nr in arr:
        my_sqrt = sqrt(nr)
        if my_sqrt.is_integer():
            ret.append(my_sqrt)
        else:
            ret.append(nr * nr)

    return ret
