"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`hello ${this.name}.I am ${this.age}`);
        this.explainJob();
    }
}
Person.species = 'homo sapiences';
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    explainJob() {
        console.log(`i am a teacher and i teach ${this.subject}`);
    }
    get subject() {
        if (!this._subject) {
            throw new Error('there is no subject');
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error('there is no subject');
        }
        this._subject = value;
    }
    static getInstance() {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher('Quill', 38, 'Math');
        return Teacher.instance;
    }
}
const teacher = Teacher.getInstance();
const teacher2 = Teacher.getInstance();
console.log(teacher, teacher2);
