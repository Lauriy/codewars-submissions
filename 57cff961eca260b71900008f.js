function isVow(a) {
    var vowels = 'aeiou'.split(''),
        ret = [],
        currentSymbol;
    for (each of a) {
        currentSymbol = String.fromCharCode(each);
        if (vowels.indexOf(currentSymbol) !== -1) {
            ret.push(currentSymbol);
        } else {
            ret.push(each);
        }
    }

    return ret;
}