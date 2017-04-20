function countArara(n) {
    var twos = Math.floor(n / 2),
        one = n % 2 === 1,
        ret = '',
        i,
        first = true;
    if (n === 1) {
        return 'anane';
    }
    for (i = 0; i < twos; i += 1) {
        if (first) {
            ret += 'adak';
        } else {
            ret += ' adak';
        }
        first = false;
    }
    if (one) {
        ret += ' anane';
    }

    return ret;
}