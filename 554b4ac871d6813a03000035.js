function highAndLow(numbers) {
    numbers = numbers.split(' ').map(function (i) {
        return parseInt(i, 10);
    });

    return Math.max.apply(Math, numbers) + ' ' + Math.min.apply(Math, numbers);
}