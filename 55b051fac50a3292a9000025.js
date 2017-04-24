var FilterString = function (value) {
    return parseInt(value.split('').filter(function (item) {
        if (!isNaN(item)) {
            return item;
        }
    }).join(''), 10);
};