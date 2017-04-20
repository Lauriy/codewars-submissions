from math import floor


def duty_free(price, discount, holiday_cost):
    savings_per_bottle = price * discount / 100

    return floor(holiday_cost / savings_per_bottle)
