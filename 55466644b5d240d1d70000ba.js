function candies(kids) {
    var l = kids.length,
        i,
        maxCandy = 0,
        sum = 0;
    if (l < 2) {
        return -1;
    }
    for (i = 0; i < l; i += 1) {
        if (kids[i] > maxCandy) {
            maxCandy = kids[i];
        }
    }
    for (i = 0; i < l; i += 1) {
        sum += maxCandy - kids[i];
    }

    return sum;
}