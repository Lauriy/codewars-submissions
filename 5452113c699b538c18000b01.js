Guesser.prototype.getNumber = function () {
    var highest = 1000,
        lowest = 1,
        current = 500,
        response;
    for (var i = 0; i < 10; i += 1) {
        response = this.guess(current);
        if (response === "Too high!") {
            highest = current;
            current = Math.ceil((lowest + highest) / 2);
        } else if (response === "Too low!") {
            lowest = current;
            current = Math.ceil((lowest + highest) / 2);
        } else {
            return current;
        }
    }
};