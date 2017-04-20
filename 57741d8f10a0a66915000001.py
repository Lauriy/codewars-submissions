from copy import copy


def int_diff(arr, n):
    counter = 0
    for a in arr:
        subarr = copy(arr)
        del subarr[arr.index(a)]
        for b in subarr:
            if abs(a - b) == n:
                counter += 1

    return counter / 2
