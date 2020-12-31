"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log('汪汪汪');
        }
    }
    class Cat extends Animal {
        constructor(name, age, sex) {
            super(name, age);
            this.sex = sex;
        }
        sayHello() {
            console.log('喵喵喵');
        }
    }
    const dog = new Dog('旺财', 18);
    console.log(dog);
    console.log(dog.sayHello());
    const cat = new Cat('咪咪', 5, '女');
    console.log(cat);
})();
