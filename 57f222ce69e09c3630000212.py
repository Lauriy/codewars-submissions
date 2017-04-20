def well(x):
    good_count = x.count('good')
    if 0 < good_count <= 2:
        return 'Publish!'
    elif good_count > 2:
        return 'I smell a series!'

    return 'Fail!'
