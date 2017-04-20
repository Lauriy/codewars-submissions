def process_2arrays(arr1, arr2):
    both = list(set(arr1).intersection(arr2))
    only_one = list(set(arr1) - set(arr2)) + list(set(arr2) - set(arr1))
    arr1_remaining = list(set(arr1) - set(arr2))
    arr2_remaining = list(set(arr2) - set(arr1))

    return [(len(both)), (len(only_one)), (len(arr1_remaining)), (len(arr2_remaining))]
