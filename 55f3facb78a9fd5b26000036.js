function checkRoot(string) {
    var parts = string.split(','),
        l = parts.length,
        product = 1,
        last;
    if (l !== 4) {
        return 'incorrect input';
    }
    for (var i = 0; i < l; i += 1) {
        parts[i] = parseInt(parts[i], 10);
        if (!isNumeric(parts[i])) {
            return 'incorrect input';
        }
        if (last && (last + 1) !== parts[i]) {
            return 'not consecutive';
        }
        product *= parts[i];
        last = parts[i];
    }
    product += 1;

    return product + ', ' + Math.sqrt(product);
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}