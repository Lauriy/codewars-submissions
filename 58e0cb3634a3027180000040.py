import operator


def sort_by_value_and_index(arr):
    products = map(lambda (i, el): (i + 1) * el, enumerate(arr))
    tuples = zip(arr, products)
    tuples = sorted(tuples, key=operator.itemgetter(1))

    return [x[0] for x in tuples]
