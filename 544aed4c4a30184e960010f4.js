function divisors(integer) {
    var n_factors = [],
        i;

    for (i = 1; i <= Math.floor(Math.sqrt(integer)); i += 1) {
        if (integer % i === 0) {
            n_factors.push(i);
            if (integer / i !== i) {
                n_factors.push(integer / i);
            }
        }
    }

    n_factors.splice(n_factors.indexOf(1), 1);
    n_factors.splice(n_factors.indexOf(integer), 1);

    if (n_factors.length === 0) {
        return integer + " is prime";
    }

    n_factors.sort(function (a, b) {
        return a - b;
    });

    return n_factors;
}