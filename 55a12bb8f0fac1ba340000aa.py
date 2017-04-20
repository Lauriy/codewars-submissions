def find_function(func, arr):
    for each in func:
        if callable(each):
            return filter(each, arr)
