function BloomFilter(arraySize) {
    this.niceList = [];
    while (arraySize--) {
        this.niceList[arraySize] = false;
    }
    this.hashFunctions = [];
    for (var i = 1; i < arguments.length; i += 1) {
        this.hashFunctions.push(arguments[i]);
    }
}

BloomFilter.prototype.add = function (str) {
    var hash,
        f;
    for (each in this.hashFunctions) {
        f = this.hashFunctions[each];
        hash = f.call(undefined, str);
        this.niceList[hash % this.niceList.length] = true;
    }
};

BloomFilter.prototype.check = function (str) {
    var hash,
        f,
        responses = [];
    for (each in this.hashFunctions) {
        f = this.hashFunctions[each];
        hash = f.call(undefined, str);
        if (this.niceList[hash % this.niceList.length] === false) {
            return false;
        }
    }

    return true;
};