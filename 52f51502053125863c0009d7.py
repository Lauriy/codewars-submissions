def calculate_optimal_fare(d, t, v1, r, v2):
    hours = t / 60.00
    max_distance_on_foot = v2 * hours
    max_distance_by_taxi = v1 * hours
    # Trivial case, the student doesn't need to take a taxi at all
    if max_distance_on_foot >= d:
        return "0.00"
    # Trivial case, the student won't make it in any way
    elif max_distance_by_taxi < d:
        return "Won't make it!"
    # Trivial case, the taxi gets her there exactly on time
    elif max_distance_by_taxi == d:
        return "%.2f" % (d * r)
    # Non-trivial, solve the equation for the best balance between walking and taking a taxi
    else:
        det = v1 - v2
        detx = d - (v2 * hours)
        x = detx / det
        return "%.2f" % (v1 * x * r)
