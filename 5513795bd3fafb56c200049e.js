function countBy(x, n) {
    var z = [];
    for (var i = x; i <= x * n; i += x) {
        z.push(i);
    }

    return z;
}