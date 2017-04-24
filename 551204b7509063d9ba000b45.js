function mainDiagonalProduct(mat) {
    var i, il, sum = 1;
    for (i = 0, il = mat.length; i < il; i += 1) {
        sum *= mat[i][i];
    }

    return sum;
}