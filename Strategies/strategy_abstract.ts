abstract class Strategy_2 {
    abstract makeSoundStrategy(): string;
}

class Animal_2 {
    private soundStrategy: Strategy_2;

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

class Dog_2 extends Strategy_2 {
    makeSoundStrategy() {
        return 'woof'
    }
}

class Cat_2 extends Strategy_2 {
    makeSoundStrategy() {
        return 'Miauw'
    }
}


class Knight_2 extends Strategy_2 {
    private shrubbery = false;

    makeSoundStrategy() {
        this.shrubbery = !this.shrubbery;
        return this.shrubbery ? 'Ni!' : 'Ecky ecky ecky ecky pikang zoom boing!';
    }
}




window.onload = () => {
    const animal = new Animal_2(new Dog_2());
    console.log(`a dog says ${animal.makeSound()}`);

    animal.setAnimal(new Cat_2());
    console.log(`a cat says ${animal.makeSound()}`);

    animal.setAnimal(new Knight_2());
    console.log(`a cat says ${animal.makeSound()}`);
    console.log(`a cat says ${animal.makeSound()}`);

}