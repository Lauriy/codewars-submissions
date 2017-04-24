function SeriesSum(n) {
    var sum = 0.00,
        div;
    if (n > 0) {
        for (var i = 0; i < n; i += 1) {
            div = 3 * i + 1;
            sum += 1 / div;
        }
    }

    return sum.toFixed(2);
}