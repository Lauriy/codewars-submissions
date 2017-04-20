from copy import deepcopy


def get_real_n_value(n):
    str_n = [str(x) for x in str(n)]
    for i in range(0, len(str_n)):
        if str_n[i] == '3':
            str_n[i] = '7'
        elif str_n[i] == '7':
            str_n[i] = '3'

    return int(''.join(str_n))


def weird_cmp_function(a, b):
    aa = get_real_n_value(a)
    bb = get_real_n_value(b)
    if aa > bb:
        return 1
    elif bb > aa:
        return -1

    return 0


def sort_twisted37(arr):
    sorted_arr = deepcopy(arr)
    sorted_arr.sort(weird_cmp_function)

    return sorted_arr
