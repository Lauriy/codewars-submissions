def convert(t):
    return ','.join(
        [':'.join(str(each).zfill(2) for each in [t.hour, t.minute, t.second]), str(t.microsecond / 1000).zfill(3)])
