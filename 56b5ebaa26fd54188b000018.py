def amicable_numbers(n1, n2):
    n1_pd = find_proper_divisors(n1)
    n2_pd = find_proper_divisors(n2)

    return sum(n1_pd) == n2 and sum(n2_pd) == n1


def find_proper_divisors(n):
    return {x for x in range(1, (n + 1) // 2 + 1) if n % x == 0 and n != x}
