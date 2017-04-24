String.prototype.repeat = function (count) {
    var ret = "";
    for (var i = 0; i < count; i += 1) {
        ret += this;
    }

    return ret;
};