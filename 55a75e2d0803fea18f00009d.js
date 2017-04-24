function slope(points) {
    var divisor = points[2] - points[0];
    if (divisor === 0) {
        return "" + undefined;
    }

    return ((points[3] - points[1]) / divisor).toString();
}