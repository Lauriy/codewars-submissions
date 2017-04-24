function min(a, b) {
    if (a === null) {
        a = 0;
    }
    if (b === null) {
        b = 0;
    }
    if (typeof a !== "number" || isNaN(a)) {
        return NaN;
    }
    if (typeof b !== "number" || isNaN(b)) {
        return NaN;
    }

    return (a < b) ? a : b;
}