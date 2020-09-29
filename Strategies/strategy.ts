interface MakeSoundStrategy {
    makeSound(): string; //make sound
}

class Animal {
    private soundStrategy: MakeSoundStrategy;

    constructor(soundStrategy: MakeSoundStrategy) {
        this.soundStrategy = soundStrategy
    }

    public setAnimal(soundStrategy: MakeSoundStrategy) {
        this.soundStrategy = soundStrategy
    }

    public makeSound(): string {
        return this.soundStrategy.makeSound()
    }
}

class Dog implements MakeSoundStrategy {
    public makeSound(): string {
        return 'Woof!';
    }
}

class Cat implements MakeSoundStrategy {
    public makeSound(): string {
        return 'Miauw!';
    }
}


class Knight implements MakeSoundStrategy {
    private shrubbery = false;

    public makeSound(): string {
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