def duck_duck_goose(players, goose):
    goose -= 1
    try:
        return players[goose].name
    except IndexError:
        return players[goose % len(players)].name
