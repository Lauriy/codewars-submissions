var makeBackronym = function (string) {
    var ret = [];
    for (var i = 0, l = string.length; i < l; i += 1) {
        ret.push(dict[string[i].toUpperCase()]);
    }

    return ret.join(' ');
};