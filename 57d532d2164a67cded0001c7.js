function histogram(results) {
    var ret = [],
        i = 6;
    while (i > 0) {
        if (results[i - 1]) {
            ret.push(i + '|' + '#'.repeat(results[i - 1]) + ' ' + results[i - 1]);
        } else {
            ret.push(i + '|');
        }
        i--;
    }

    return ret.join('\n') + '\n';
}