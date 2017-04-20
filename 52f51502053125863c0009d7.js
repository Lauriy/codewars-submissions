function calculateOptimalFare(D, T, V1, R, V2) {
    var hours = T / 60;
    var max_distance_on_foot = V2 * hours;
    var max_distance_by_taxi = V1 * hours;
    //Trivial case, the student doesn't need to take a taxi at all
    if (max_distance_on_foot >= D) {
        return "0.00";
        //Trivial case, the student won't make it in any way
    } else if (max_distance_by_taxi < D) {
        return "Won't make it!";
        //Trivial case, the taxi gets her there exactly on time
    } else if (max_distance_by_taxi === D) {
        return (D * R).toFixed(2);
        //Non-trivial, solve the equation for the best balance between walking and taking a taxi
    } else {
        var det = V1 - V2;
        var detx = D - (V2 * hours);
        var x = detx / det;
        return (V1 * x * R).toFixed(2);
    }
}