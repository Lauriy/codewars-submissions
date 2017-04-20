def int_rac(n, guess):
    new_guess = guess
    approx = float('inf')
    counter = 0
    while abs(approx - new_guess) >= 1:
        approx = new_guess
        new_guess = int((approx + n / approx) / 2)
        counter += 1

    return counter
