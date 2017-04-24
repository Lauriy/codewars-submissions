function diagonalSum(matrix) {
    var sum = 0;
    for (var i = 0, l = matrix.length; i < l; i += 1) {
        sum += matrix[i][i];
    }

    return sum;
}