function diffBig2(arr) {
    var biggest = arr.max(),
        index = arr.indexOf(biggest);
    arr.splice(index, 1);

    return biggest - arr.max();
}

Array.prototype.max = function () {
    return Math.max.apply(Math, this);
};