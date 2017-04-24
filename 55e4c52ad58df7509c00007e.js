function validate(username, password) {
    var database = new Database();
    if (username.indexOf('||') > -1 || username.indexOf('//') < -1
        || password.indexOf('||') > -1 || password.indexOf('//') < -1) {
        return 'Wrong username or password!';
    }

    return database.login(username, password);
}