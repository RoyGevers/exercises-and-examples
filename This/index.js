"use strict";
// In classes
class SayHello {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
    introduce() {
        console.log('Hi, my name is ');
        return this; // To chain methods, return this (i.e., the class)
    }
}
const hi = new SayHello('Slim Shady').introduce().introduce().introduce().sayName(); // To chain methods, return this in the method
const person = {
    name: 'Henk de Vries',
    greeting: 'Hallo, ik ben de broer van ',
    farewell: 'Tschüß',
    whoIsThis,
    //whatsUp: () => console.log(this) // The containing arrow function captures the global value of 'this'!
    sayBye: function bye() {
        console.log(this.farewell);
        // function sayItTwice(this: any) { // using an normal function, its 'this' refers to itself, so is undefined. We need to create const self = this, and use that or use an arrow function instead
        //     console.log(this.farewell); 
        // };
        const sayItTwice = () => console.log(this.farewell); // An arrow function's 'this' refers to the parent.
        sayItTwice();
    }
};
// Another function in the person obj
function whoIsThis() {
    console.log(this.greeting + this.name);
}
person.whoIsThis();
// bind() makes this refer to the object that's passed in (i.e., person)
function shout() {
    return this.name.toUpperCase() + '!!';
}
const excuseMe = shout.bind(person);
console.log(excuseMe()); // See also console.log(shout.call(person)) or console.log(shout.apply(person))
person.sayBye();
