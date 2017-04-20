map = {
    'add': '+',
    'subtract': '-',
    'multiply': '*',
    'divide': '/'
}


def arithmetic(a, b, operator):
    return eval(''.join([str(a), map[operator], str(b)]))
