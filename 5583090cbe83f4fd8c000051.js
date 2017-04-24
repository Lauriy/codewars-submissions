function digitize(n) {
    return n.toString().split('').reverse().map(function (item) {
        return parseInt(item, 10);
    });
}