interface Strategy {
    makeSoundStrategy(): string;
}

class Animal {
    private soundStrategy: Strategy;

    constructor(soundStrategy: Strategy) {
        this.soundStrategy = soundStrategy
    }

    public setAnimal(soundStrategy: Strategy) {
        this.soundStrategy = soundStrategy
    }

    public makeSound(): string {
        return this.soundStrategy.makeSoundStrategy()
    }
}

class Dog implements Strategy {
    public makeSoundStrategy(): string {
        return 'Woof!';
    }
}

class Cat implements Strategy {
    public makeSoundStrategy(): string {
        return 'Miauw!';
    }
}


class Knight implements Strategy {
    private shrubbery = false;

    public makeSoundStrategy(): string {
        this.shrubbery = !this.shrubbery;
        return this.shrubbery ? 'Ni!' : 'Ecky ecky ecky ecky pikang zoom boing!';
    }
}


window.onload = () => {
    const animal = new Animal(new Dog());
    console.log(`a dog says ${animal.makeSound()}`);

    animal.setAnimal(new Cat());
    console.log(`a cat says ${animal.makeSound()}`);

    animal.setAnimal(new Knight());
    console.log(`We are the knights who say ${animal.makeSound()}`);
    console.log(`We are the knights who say ${animal.makeSound()}`);
}