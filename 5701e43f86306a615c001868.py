def get_issuer(number):
    num_str = str(number)
    if len(num_str) == 15 and num_str.startswith(('34', '37')):
        return 'AMEX'
    elif (len(num_str) == 13 or len(num_str) == 16) and num_str.startswith('4'):
        return 'VISA'
    elif len(num_str) == 16 and num_str.startswith('6011'):
        return 'Discover'
    elif len(num_str) == 16 and num_str.startswith(('51', '52', '53', '54', '55')):
        return 'Mastercard'

    return 'Unknown'
