from collections import deque


def contain_all_rots(strng, arr):
    return set(rotations(strng)).issubset(set(arr))


def rotations(strng):
    d = deque(strng)
    return set([''.join(map(d.rotate(-1), d)) for i in xrange(len(d))])
