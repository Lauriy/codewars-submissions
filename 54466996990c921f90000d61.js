var isMonotone = function (arr) {
    if (arr.length === 0) {
        return true;
    } else {
        var current = arr[0],
            i;
        for (i = 1; i < arr.length; i += 1) {
            if (arr[i] >= current) {
                current = arr[i];
            } else {
                return false;
            }
        }
    }

    return true;
};