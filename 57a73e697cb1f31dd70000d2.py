import math


def chinese_zodiac(year):
    animals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig']
    elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water']
    year = year - 1924

    return elements[math.floor(year / 2) % 5] + ' ' + animals[year % 12]
