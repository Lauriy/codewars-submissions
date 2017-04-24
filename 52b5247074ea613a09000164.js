function cookingTime(eggs) {
    var batches,
        extra = 0;
    if (eggs % 8 > 0) {
        extra = 1;
    }

    return (Math.floor(eggs / 8) + extra) * 5;
}