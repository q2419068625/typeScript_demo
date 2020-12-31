"use strict";
class Dog {
    constructor(name2, age) {
        this.age = age;
        this.name2 = name2;
    }
    dark() {
        console.log('汪汪汪');
    }
}
const dog = new Dog('小黑', 18);
const dog2 = new Dog('小白', 18);
console.log(dog);
console.log(dog2);
