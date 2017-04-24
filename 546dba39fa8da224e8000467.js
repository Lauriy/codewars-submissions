var runLengthEncoding = function (str) {
    var last,
        parts = str.split(''),
        i,
        currentStreak = 1,
        ret = [];
    last = parts[0];
    for (i = 1; i < parts.length; i += 1) {
        if (parts[i] !== last) {
            ret.push([currentStreak, last]);
            currentStreak = 1;
        } else {
            currentStreak += 1;
        }
        if (i === (parts.length - 1)) {
            ret.push([currentStreak, parts[i]]);
        }
        last = parts[i];
    }

    return ret;
};