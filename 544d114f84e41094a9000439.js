function powerOf4(n) {
    if (isNaN(n) || n instanceof Date) {
        return false;
    } else {
        return n > 0 && n % 4 === 0;
    }
}