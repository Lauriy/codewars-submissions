var sing = function () {
    var res = [];
    for (var i = 99; i > 2; i--) {
        res.push(i + " bottles of beer on the wall, " + i + " bottles of beer.");
        res.push("Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.");
    }
    res.push("2 bottles of beer on the wall, 2 bottles of beer.");
    res.push("Take one down and pass it around, 1 bottle of beer on the wall.");
    res.push("1 bottle of beer on the wall, 1 bottle of beer.");
    res.push("Take one down and pass it around, no more bottles of beer on the wall.");
    res.push("No more bottles of beer on the wall, no more bottles of beer.");
    res.push("Go to the store and buy some more, 99 bottles of beer on the wall.");

    return res;
};