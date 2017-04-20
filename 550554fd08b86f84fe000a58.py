def in_array(array1, array2):
    solution = {}
    for a1_str in array1:
        for a2_str in array2:
            if a1_str in a2_str:
                solution.setdefault(a1_str, None)

    return sorted(solution)
