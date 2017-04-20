def partlist(arr):
    ret = []
    for i in range(1, len(arr)):
        ret.append((' '.join(arr[0:i]), ' '.join(arr[i:])))

    return ret
