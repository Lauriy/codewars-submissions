class Cat extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }

    speak() {
        return this.name + ' meows.';
    }
}