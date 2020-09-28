"use strict";
var Animal = /** @class */ (function () {
    function Animal(soundStrategy) {
        this.soundStrategy = soundStrategy;
    }
    Animal.prototype.setAnimal = function (soundStrategy) {
        this.soundStrategy = soundStrategy;
    };
    Animal.prototype.makeSound = function () {
        return this.soundStrategy.makeSoundStrategy();
    };
    return Animal;
}());
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.makeSoundStrategy = function () {
        return 'Woof!';
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.makeSoundStrategy = function () {
        return 'Miauw!';
    };
    return Cat;
}());
var Knight = /** @class */ (function () {
    function Knight() {
        this.shrubbery = false;
    }
    Knight.prototype.makeSoundStrategy = function () {
        this.shrubbery = !this.shrubbery;
        return this.shrubbery ? 'Ni!' : 'Ecky ecky ecky ecky pikang zoom boing!';
    };
    return Knight;
}());
window.onload = function () {
    var animal = new Animal(new Dog());
    console.log("a dog says " + animal.makeSound());
    animal.setAnimal(new Cat());
    console.log("a cat says " + animal.makeSound());
    animal.setAnimal(new Knight());
    console.log("We are the knights who say " + animal.makeSound());
    console.log("We are the knights who say " + animal.makeSound());
};
