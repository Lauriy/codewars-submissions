function numberToPaddedHex(input) {
    var ret = input.toString(16);
    if (ret.length < 2) {
        ret = '0' + ret;
    }

    return ret;
}

function shadesOfGrey(n) {
    if (n <= 0) {
        return [];
    }
    var ret = [];
    for (var i = 1; i < n + 1; i += 1) {
        ret.push('#' + numberToPaddedHex(i) + numberToPaddedHex(i) + numberToPaddedHex(i));
        if (i > 253) {
            break;
        }
    }

    return ret;
}