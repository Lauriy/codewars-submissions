Array.isArray = function (value) {
    if (Object.prototype.toString.call(value) === '[object Array]') {
        return true;
    }

    return false;
};