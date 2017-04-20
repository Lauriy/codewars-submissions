def combine(*args):
    merged = dict()
    for each in args:
        for key in each:
            if key in merged:
                merged[key] += each[key]
            else:
                merged[key] = each[key]

    return merged
