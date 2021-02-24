class Dog {
    constructor(name) {
        this._name = name;
    }

    introduce() {
        console.log(" This is " + this._name + " !");
    }

    //A static method
    static bark() {
        console.log("Wolf");
    }
}
    //create object myDog
    const myDog = new Dog("Buster");
    myDog.introduce();

    const mySecDog = new Dog("God");
    mySecDog.introduce();

    // Calling the static method
    Dog.bark();

// node staticmethod.js