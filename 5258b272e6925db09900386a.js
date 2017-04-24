function numbers() {
    for (var i = 0; i < arguments.length; i += 1) {
        if (typeof arguments[i] !== "number") {
            return false;
        }
    }

    return true;
}