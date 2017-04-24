function search(budget, prices) {
    return prices.filter(function (value) {
        return value <= budget;
    }).sort(function (a, b) {
        return a - b
    }).join();
}