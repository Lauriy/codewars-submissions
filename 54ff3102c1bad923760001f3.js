function getCount(str) {
    var count = 0,
        current;
    for (var i = 0, l = str.length; i < l; i += 1) {
        current = str[i];
        if (current == "a" || current == "e" || current == "i" || current == "o" || current == "u") {
            count += 1;
        }
    }

    return count;
}