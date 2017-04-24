function addLength(str) {
    var arr = str.split(' '),
        ret = [],
        l = arr.length;
    for (var i = 0; i < l; i += 1) {
        ret[i] = arr[i] + ' ' + arr[i].length;
    }

    return ret;
}