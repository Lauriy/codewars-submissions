function findEmployeesRole(name) {
    var parts = name.split(' '),
        firstName = parts[0],
        lastName = parts[1],
        i,
        l = employees.length;
    for (i = 0; i < l; i += 1) {
        item = employees[i];
        if (item.firstName === firstName && item.lastName === lastName) {
            return item.role;
        }
    }

    return 'Does not work here!';
}