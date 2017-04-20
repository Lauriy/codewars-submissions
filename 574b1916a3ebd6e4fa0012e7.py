def is_opposite(s1, s2):
    if s1 == '' or s2 == '':
        return False

    s2 = ''.join([char.swapcase() for char in s2])

    return s1 == s2
