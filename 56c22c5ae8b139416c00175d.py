def match(candidate, job):
    if 'min_salary' not in candidate or 'max_salary' not in job:
        raise Error('Bad data')
    wiggle_salary = candidate['min_salary'] * 0.9

    return wiggle_salary <= job['max_salary']
