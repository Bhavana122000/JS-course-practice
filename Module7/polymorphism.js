//poly - many, morph - forms, ism - behaviour

class Animal {
    sound() {
        console.log("Animals make different sound")
    }
}

class Dog {
    sound() {
        console.log("Dog Barks")
    }
}

class Cat {
    sound() {
        console.log("Cat mews")
    }
}

let Dog1 = new Dog();
Dog1.sound()

let Cat1 = new Cat();
Cat1.sound()