def lowercase_count(strng):
    count = 0
    for c in strng:
        if c.islower():
            count += 1

    return count
