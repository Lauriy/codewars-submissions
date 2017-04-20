def dont_give_me_five(start, end):
    arr = range(start, end + 1)

    return len([x for x in arr if '5' not in str(x)])
