function countSheeps(input) {
    var count = 0;
    for (var i = 0, l = input.length; i < l; i += 1) {
        if (input[i]) {
            count += 1;
        }
    }

    return count;
}