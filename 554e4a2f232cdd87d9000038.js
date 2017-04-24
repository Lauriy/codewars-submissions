function DNAStrand(dna) {
    var ret = '';
    for (var i = 0, l = dna.length; i < l; i += 1) {
        ret += getReplacementSymbol(dna[i]);
    }

    return ret;
}

function getReplacementSymbol(symbol) {
    if (symbol === 'A') {
        return 'T';
    } else if (symbol === 'T') {
        return 'A';
    } else if (symbol === 'C') {
        return 'G';
    } else if (symbol === 'G') {
        return 'C';
    }
}