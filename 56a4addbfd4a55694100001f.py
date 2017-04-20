def validate_hello(greetings):
    hellos = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc']
    g = "".join(greetings.split()).lower()
    for h in hellos:
        if h in g:
            return True
        
    return False
