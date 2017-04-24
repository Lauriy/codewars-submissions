function Warrior(n) {
    this.name = function (n) {
        if (n) {
            this.nameProp = n;
        }
        return this.nameProp;
    };
    this.name(n);
}

Warrior.prototype.toString = function () {
    return "Hi! my name's " + this.name();
};