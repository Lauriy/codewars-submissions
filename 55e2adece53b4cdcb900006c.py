from math import floor


def race(v1, v2, g):
    if v1 > v2:
        return None
    velocity_difference = v2 - v1
    hours_to_catch_up = g / velocity_difference
    minutes_remainder = hours_to_catch_up * 60 % 60
    seconds_remainder = hours_to_catch_up * 60 * 60 % 60

    return [int(hours_to_catch_up), int(minutes_remainder), int(seconds_remainder)]
