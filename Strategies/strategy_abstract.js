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
var Strategy_2 = /** @class */ (function () {
    function Strategy_2() {
    }
    return Strategy_2;
}());
var Animal_2 = /** @class */ (function () {
    function Animal_2(soundStrategy) {
        this.soundStrategy = soundStrategy;
    }
    Animal_2.prototype.setAnimal = function (soundStrategy) {
        this.soundStrategy = soundStrategy;
    };
    Animal_2.prototype.makeSound = function () {
        return this.soundStrategy.makeSoundStrategy();
    };
    return Animal_2;
}());
var Dog_2 = /** @class */ (function (_super) {
    __extends(Dog_2, _super);
    function Dog_2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog_2.prototype.makeSoundStrategy = function () {
        return 'woof';
    };
    return Dog_2;
}(Strategy_2));
var Cat_2 = /** @class */ (function (_super) {
    __extends(Cat_2, _super);
    function Cat_2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat_2.prototype.makeSoundStrategy = function () {
        return 'Miauw';
    };
    return Cat_2;
}(Strategy_2));
var Knight_2 = /** @class */ (function (_super) {
    __extends(Knight_2, _super);
    function Knight_2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.shrubbery = false;
        return _this;
    }
    Knight_2.prototype.makeSoundStrategy = function () {
        this.shrubbery = !this.shrubbery;
        return this.shrubbery ? 'Ni!' : 'Ecky ecky ecky ecky pikang zoom boing!';
    };
    return Knight_2;
}(Strategy_2));
window.onload = function () {
    var animal = new Animal_2(new Dog_2());
    console.log("a dog says " + animal.makeSound());
    animal.setAnimal(new Cat_2());
    console.log("a cat says " + animal.makeSound());
    animal.setAnimal(new Knight_2());
    console.log("a cat says " + animal.makeSound());
    console.log("a cat says " + animal.makeSound());
};
