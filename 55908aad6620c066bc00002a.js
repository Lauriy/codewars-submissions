function XO(str) {
    str = str.toLowerCase();
    var xCount = str.split('x').length - 1,
        oCount = str.split('o').length - 1;

    return xCount === oCount;
}