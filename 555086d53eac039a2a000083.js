function lovefunc(flower1, flower2) {
    var firstOdd = flower1 % 2 === 1,
        secondOdd = flower2 % 2 === 1;
    if ((firstOdd && !secondOdd) || (!firstOdd && secondOdd)) {
        return true;
    }

    return false;
}