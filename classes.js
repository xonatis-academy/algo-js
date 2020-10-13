class User {
    firstname;
    age;

    mentir() {
        this.age = this.age - 10;
    }

    constructor(toto, tata) {
        this.firstname = toto;
        this.age = tata;
    }
}

let a = 'Jean';
let b = 32;
let user = new User(a, b);

console.log(user);
