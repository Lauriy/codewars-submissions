def to_freud(sentence):
    if sentence:
        return ' '.join('sex' for x in sentence.split())

    return ''
