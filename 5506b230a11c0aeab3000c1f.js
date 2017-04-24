function evaporator(content, evap_per_day, threshold) {
    var day = 0,
        start = 100;
    while (start > threshold) {
        start -= start * (evap_per_day / 100);
        day += 1;
    }

    return day;
}