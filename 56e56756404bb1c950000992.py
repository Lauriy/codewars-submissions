def sum_differences_between_products_and_LCMs(pairs):
    sum = 0
    for each in pairs:
        sum += each[0] * each[1] - lcm(each[0], each[1])

    return sum


def gcd(x, y):
    while (y):
        x, y = y, x % y

    return x


def lcm(x, y):
    gcd_xy = gcd(x, y)
    if gcd_xy > 0:
        lcm = (x * y) // gcd(x, y)

        return lcm

    return 0
