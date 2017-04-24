function strongEnough(earthquake, age) {
    var hp = 1000 * Math.pow(0.99, age),
        shockwave = 1,
        tremors = [],
        i, j, li, lj;
    for (i = 0, li = earthquake.length; i < li; i += 1) {
        tremors[i] = 0;
        for (j = 0, lj = earthquake[i].length; j < lj; j += 1) {
            tremors[i] += earthquake[i][j];
        }
        shockwave *= tremors[i];
    }
    if (shockwave > hp) {
        return "Needs Reinforcement!";
    } else {
        return "Safe!";
    }
}