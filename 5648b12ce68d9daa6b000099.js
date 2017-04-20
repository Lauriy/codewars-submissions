var number = function (busStops) {
    var people = 0;
    busStops.forEach(function (item) {
        people += item[0];
        people -= item[1];
    });

    return people;
};