import math


def cheapest_quote(n):
    remainder = n
    sum = 0.00
    if remainder >= 40:
        sum += 3.85 * math.floor(n / 40)
        remainder = n % 40
    if remainder >= 20:
        sum += 1.93
        remainder -= 20
    if remainder >= 10:
        sum += 0.97
        remainder -= 10
    if remainder >= 5:
        sum += 0.49
        remainder -= 5
    if remainder > 0:
        sum += 0.1 * remainder

    return round(sum, 2)
