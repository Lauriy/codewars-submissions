Array.range = function (start, count) {
    var ret = [],
        j = 0;
    for (var i = start; j < count; j += 1, i += 1) {
        ret.push(i);
    }

    return ret;
};

Array.prototype.sum = function () {
    return this.reduce(function (pv, cv) {
        return pv + cv;
    }, 0);
};