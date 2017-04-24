function fleschKincaid(text) {
    var sentences = text.replace(/([.?!])\s*(?=[A-Z])/, "$1|").split("|"),
        words,
        wordCount = 0,
        syllableCount = 0,
        sentenceCount = sentences.length,
        score = 0,
        i,
        j;

    for (i = 0; i < sentences.length; i += 1) {
        words = sentences[i].split(' ');
        wordCount += words.length;
        for (j = 0; j < words.length; j += 1) {
            syllableCount += countSyllables(words[j]);
        }
    }

    return (0.39 * (wordCount / sentenceCount)) + (11.8 * (syllableCount / wordCount)) - 15.59;
}

function countSyllables(word) {
    word = word.toLowerCase();
    if (word.length <= 3) {
        return 1;
    }
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');

    return word.match(/[aeiouy]{1,2}/g).length;
}