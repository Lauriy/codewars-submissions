def find_next_square(sq):
    if is_square(sq):
        while True:
            sq += 1
            if is_square(sq):
                return sq
    return -1


def is_square(n):
    x = n // 2
    seen = set([x])
    while x * x != n:
        x = (x + (n // x)) // 2
        if x in seen:
            return False
        seen.add(x)

    return True
