function sillycase(silly) {
    var mid = Math.round(silly.length / 2);

    return silly.substr(0, mid).toLowerCase() + silly.substr(mid, silly.length).toUpperCase();
}