def how_much_i_love_you(nb_petals):
    answers = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']

    return answers[nb_petals % 6 - 1]
