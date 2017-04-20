function twoOldestAges(ages) {
    var max = Math.max.apply(null, ages),
        secondMax;
    ages.splice(ages.indexOf(max), 1);
    secondMax = Math.max.apply(null, ages);

    return [secondMax, max];
}