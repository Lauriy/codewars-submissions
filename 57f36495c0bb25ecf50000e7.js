function findSum(n) {
    var sum = 0;
    for (var i = 0; i <= n; i += 1) {
        if (i % 3 == 0) {
            sum += i;
        } else if (i % 5 == 0) {
            sum += i;
        }
    }

    return sum;
}