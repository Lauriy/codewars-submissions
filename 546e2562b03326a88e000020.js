function squareDigits(num) {
    var parts = num.toString().split(''),
        i,
        ret = '';
    for (i = 0; i < parts.length; i += 1) {
        ret += (Number(parts[i]) * Number(parts[i]));
    }

    return Number(ret);
}