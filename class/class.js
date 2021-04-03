class Person {
    constructor(first, last, age, location) {
        this.name = {
            'first' : first,
            'last' : last
        }
        this.age = age;
        this.location = location;

    }

    greet() {
        console.log(`Hello, I am ${this.name.first}. I am a person.`);
    }
}

class Student extends Person {
    constructor(first, last, age, location, grade) {
        super(first, last, age, location);
        this.grade = grade;

    }
    
    greet() {
        console.log(`My name is ${this.name.first}. I am a student.`);
    }
}

class Teacher extends Person {
    constructor(first, last, age, location, subject) {
        super(first, last, age, location);
        this.subject = subject;
    }

    greet() {
        console.log(`Hello, my name is ${this.name.first}. I am a teacher and I teach ${this.subject}.`);
    }
}

class Principle extends Teacher {
    constructor(first, last, age, location, school) {
        super(first, last, age, location);
        this.school = school;
    }

    greet() {
        console.log(`Hello, my name is ${this.name.first}. I am the Priciple of school ${this.school}.`);
    }
}

let student1 = new Student('Bob', 'Stone', 12, 'New York', 6);
let teacher1 = new Teacher('Rob', 'Bone', 33, 'New York', 'math');
let principle1 = new Principle('Stan', 'Man', 40, 'New York', 'PS.10');

//console.log(student1);
//console.log(teacher1);
delete principle1.subject;
console.log(principle1)

//student1.greet();
//teacher1.greet();
principle1.greet();