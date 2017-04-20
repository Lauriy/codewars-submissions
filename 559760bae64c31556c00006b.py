def climb(n):
    current = n
    ret = [current]
    while current > 1:
        if current % 2 == 0:
            current = current / 2
        else:
            current = (current - 1) / 2
        ret.insert(0, current)

    return ret
