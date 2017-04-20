Number.prototype.times = function (f) {
    for (var i = 0; i < this; i += 1) {
        f(i);
    }
};