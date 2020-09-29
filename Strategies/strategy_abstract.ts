abstract class MakeSoundStrategy_a {
    abstract makeSound(): string;
}

class Animal_a {
    private soundStrategy: MakeSoundStrategy_a;

    constructor(soundStrategy: MakeSoundStrategy) {
        this.soundStrategy = soundStrategy
    }

    public setAnimal(soundStrategy: MakeSoundStrategy): void {
        this.soundStrategy = soundStrategy
    }

    public makeSound(): string {
        return this.soundStrategy.makeSound()
    }
}

class Dog_a extends MakeSoundStrategy_a {
    makeSound(): string {
        return 'woof'
    }
}

class Cat_a extends MakeSoundStrategy_a {
    makeSound(): string {
        return 'Miauw'
    }
}


class Knight_a extends MakeSoundStrategy_a {
    private shrubbery = false;

    makeSound(): string {
        this.shrubbery = !this.shrubbery;
        return this.shrubbery ? 'Ni!' : 'Ecky ecky ecky ecky pikang zoom boing!';
    }
}




window.onload = () => {
    const animal = new Animal_a(new Dog_a());
    console.log(`a dog says ${animal.makeSound()}`);

    animal.setAnimal(new Cat_a());
    console.log(`a cat says ${animal.makeSound()}`);

    animal.setAnimal(new Knight_a());
    console.log(`a cat says ${animal.makeSound()}`);
    console.log(`a cat says ${animal.makeSound()}`);

}