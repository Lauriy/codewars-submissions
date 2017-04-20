def easyline(n):
    line = [1]
    for k in range(n):
        line.append(line[k] * (n - k) / (k + 1))
        
    return sum(x * x for x in line)
