var Calculator = {};

Calculator.add = function (a, b) {
    return a + b;
};

Calculator.subtract = function (a, b) {
    return a - b;
;

Calculator.multiply = function (a, b) {
    return a * b;
};

Calculator.divide = function (a, b) {
    if (b === 0) {
        return false;
    }

    return a / b;
};