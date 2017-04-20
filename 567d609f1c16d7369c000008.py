from random import randint


def generate(length):
    return ''.join(str(randint(0, 1)) for x in xrange(length))
