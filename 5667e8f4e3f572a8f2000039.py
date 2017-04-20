def accum(s):
    ret = []
    s = list(s)
    for i in range(0, len(s)):
        ret.append(s[i].upper() + s[i].lower() * i)

    return '-'.join(ret)
