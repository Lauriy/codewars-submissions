def stringy(size):
    switch = False
    ret = ''
    for i in range(0, size):
        if not switch:
            ret += '1'
        else:
            ret += '0'
        switch = not switch

    return ret
