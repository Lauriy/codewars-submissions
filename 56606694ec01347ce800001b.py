def is_triangle(a, b, c):
    s = (a + b + c) / 2
    area = (s * (s - a) * (s - b) * (s - c)) ** 0.5

    return not ((a + b < c) or (a + c < b) or (b + c < a)) and area > 0
