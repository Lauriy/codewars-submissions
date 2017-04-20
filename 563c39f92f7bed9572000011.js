function isNegativeZero(x) {
    if (x !== 0) {
        return false;
    }
    return !(1 / x === 1 / Math.abs(x));
}