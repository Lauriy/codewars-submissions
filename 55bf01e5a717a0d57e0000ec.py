def multiply_digits(n):
    n = str(n)
    mult = 1
    for symbol in n:
        mult *= int(symbol)

    return mult


def digit_length(n):
    return len(str(n))


def persistence(n):
    if digit_length(n) == 1:
        return 0
    times = 1
    while True:
        n = multiply_digits(n)
        if digit_length(n) == 1:
            return times
        times += 1
