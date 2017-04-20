from collections import Counter


def most_frequent_item_count(collection):
    if len(collection) == 0:
        return 0
    data = Counter(collection)

    return data.most_common()[0][1]
