def billboard(name, price=None):
    count = len(name)

    return count * price if price else count * 30
