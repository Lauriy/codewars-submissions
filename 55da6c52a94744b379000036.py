from re import findall


def sum_from_string(string):
    return sum([int(x) for x in findall(r'\d+', string)])
