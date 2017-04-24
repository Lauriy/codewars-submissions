function alternateSqSum(arr) {
    var oddSum = 0,
        evenSquareSum = 0,
        l = arr.length;
    if (l === 0) {
        return null;
    }
    for (var i = 0; i < l; i += 1) {
        if (i % 2 !== 0) {
            evenSquareSum += arr[i] * arr[i];
        } else {
            oddSum += arr[i];
        }
    }

    return oddSum + evenSquareSum;
}