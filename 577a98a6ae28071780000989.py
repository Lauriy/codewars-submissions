def min(arr):
    smallest = float('inf')
    for element in arr:
        if element < smallest:
            smallest = element

    return smallest


def max(arr):
    biggest = float('-inf')
    for element in arr:
        if element > biggest:
            biggest = element

    return biggest
