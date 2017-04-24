function last(list) {
    if (arguments.length > 1) {
        return arguments[arguments.length - 1];
    }
    if (!list.length) {
        return list;
    }

    return list[list.length - 1];
}