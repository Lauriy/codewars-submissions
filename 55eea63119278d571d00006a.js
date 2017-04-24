function nextId(ids) {
    for (var i = 0; i < ids.length; i += 1) {
        if (ids[i] > i) {
            return i;
        }
    }
    return ids.length;
}