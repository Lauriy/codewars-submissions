def fake_bin(x):
    x = list(x)
    for i in range(len(x)):
        if int(x[i]) < 5:
            x[i] = '0'
        else:
            x[i] = '1'

    return ''.join(x)
