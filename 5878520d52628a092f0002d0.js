function stringTransformer(str) {
    var reverseOrderOfWords = str.split(' ').reverse().join(' ');

    return reverseCase(reverseOrderOfWords);
}

var reverseCase = function (str) {
    return str.split("").map(function (x) {
        return x == x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()
    }).join("");
};