band_values = {
    'black': 0,
    'brown': 1,
    'red': 2,
    'orange': 3,
    'yellow': 4,
    'green': 5,
    'blue': 6,
    'violet': 7,
    'gray': 8,
    'white': 9
}


def decode_resistor_colors(bands):
    bands_arr = bands.split(' ')
    ohms = int((str(band_values[bands_arr[0]]) + str(band_values[bands_arr[1]]))) * (10 ** band_values[bands_arr[2]])
    if ohms >= 1000000:
        ohms = '{0:g}'.format(ohms / 1000000) + 'M'
    elif 1000 <= ohms <= 9999999:
        ohms = '{0:g}'.format(ohms / 1000) + 'k'
    else:
        ohms = str(ohms)
    percentage = '20%';
    if len(bands_arr) > 3:
        if (bands_arr[3] == 'silver'):
            percentage = '10%'
        elif (bands_arr[3] == 'gold'):
            percentage = '5%'

    return '%s ohms, %s' % (ohms, percentage)
