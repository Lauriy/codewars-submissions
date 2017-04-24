function solution(number) {
    var n = number - 1,
        amount_of_three = Math.floor(n / 3),
        amount_of_five = Math.floor(n / 5),
        amount_of_fifteen = Math.floor(n / 15);

    return (3 * amount_of_three * (amount_of_three + 1) / 2)
        + (5 * amount_of_five * (amount_of_five + 1) / 2)
        - (15 * amount_of_fifteen * (amount_of_fifteen + 1) / 2);
}