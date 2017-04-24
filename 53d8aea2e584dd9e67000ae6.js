function solveQuadratic(a, b, c) {
    if (a === 0) {
        if (b === 0) {
            return undefined;
        }

        return [-c / b];
    }
    var d = (b * b) - (4 * a * c);
    if (d < 0) {
        return undefined;
    } else if (d === 0) {
        var root1 = (-b) / (2 * a);
        if (isNaN(root1)) {
            return undefined;
        }

        return [root1];
    } else {
        var sqrtD;
        if (c === 0) {
            sqrtD = b;
        } else {
            sqrtD = Math.sqrt(d);
        }
        var root1 = (-b + sqrtD) / (2 * a);
        var root2 = (-b - sqrtD) / (2 * a);

        return [root1, root2];
    }
}