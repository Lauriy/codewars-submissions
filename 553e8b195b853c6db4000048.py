def has_unique_chars(str):
    uniques_dict = {}
    for char in str:
        if char in uniques_dict:
            return False
        uniques_dict[char] = 1

    return True
