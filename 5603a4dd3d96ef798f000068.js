function sharePrice(invested, changes) {
    for (var i = 0, l = changes.length; i < l; i += 1) {
        invested += (changes[i] / 100) * invested;
    }

    return invested.toFixed(2);
}