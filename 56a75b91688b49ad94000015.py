def abundant_number(num):
    return sum(divisors(num)) > num


def divisors(n):
    return {x for x in range(1, (n + 1) // 2 + 1) if n % x == 0 and n != x}
