function _if(bool, func1, func2) {
    if (bool) {
        func1.call();
    } else {
        func2.call();
    }
}