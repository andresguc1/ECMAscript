class user {
    // Methods
    greeting() {
        return 'Hello';
    }
};

const andres = new user();
console.log(andres.greeting());
const susana = new user();
console.log(susana.greeting());

// Constructor

class user {
    // constructor
    constructor() {
        console.log('New User');
    }
    greeting() {
        return 'Hello';
    }
}

// this

class user {
    constructor(name) {
        this.name = name;
    }
    // methods
    speak() {
        return 'Hello';
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

// Setters and getters

class user {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // methods
    #speak() {
        return 'Hello';
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    // getter
    get #uAge() {
        return this.age;
    }

    // Setter
    set #uAge(n) {
        this.uAge = n;
    }
 
}