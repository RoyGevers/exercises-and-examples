"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MakeSoundStrategy_a = /** @class */ (function () {
    function MakeSoundStrategy_a() {
    }
    return MakeSoundStrategy_a;
}());
var Animal_a = /** @class */ (function () {
    function Animal_a(soundStrategy) {
        this.soundStrategy = soundStrategy;
    }
    Animal_a.prototype.setAnimal = function (soundStrategy) {
        this.soundStrategy = soundStrategy;
    };
    Animal_a.prototype.makeSound = function () {
        return this.soundStrategy.makeSound();
    };
    return Animal_a;
}());
var Dog_a = /** @class */ (function (_super) {
    __extends(Dog_a, _super);
    function Dog_a() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog_a.prototype.makeSound = function () {
        return 'woof';
    };
    return Dog_a;
}(MakeSoundStrategy_a));
var Cat_a = /** @class */ (function (_super) {
    __extends(Cat_a, _super);
    function Cat_a() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat_a.prototype.makeSound = function () {
        return 'Miauw';
    };
    return Cat_a;
}(MakeSoundStrategy_a));
var Knight_a = /** @class */ (function (_super) {
    __extends(Knight_a, _super);
    function Knight_a() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.shrubbery = false;
        return _this;
    }
    Knight_a.prototype.makeSound = function () {
        this.shrubbery = !this.shrubbery;
        return this.shrubbery ? 'Ni!' : 'Ecky ecky ecky ecky pikang zoom boing!';
    };
    return Knight_a;
}(MakeSoundStrategy_a));
window.onload = function () {
    var animal = new Animal_a(new Dog_a());
    console.log("a dog says " + animal.makeSound());
    animal.setAnimal(new Cat_a());
    console.log("a cat says " + animal.makeSound());
    animal.setAnimal(new Knight_a());
    console.log("a cat says " + animal.makeSound());
    console.log("a cat says " + animal.makeSound());
};
