def rake_garden(garden):
    arr = garden.split(' ')
    for i in range(0, len(arr)):
        if arr[i] not in ['rock', 'gravel']:
            arr[i] = 'gravel'

    return ' '.join(arr)
