def zebulansNightmare(functionName):
    camelCased = ''.join(x.capitalize() or '_' for x in functionName.split('_'))
    
    return camelCased[0].lower() + camelCased[1:]
