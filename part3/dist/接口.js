"use strict";
(function () {
    /*
        在定义类时，可以使类去实现一个接口
            实现接口就是使类满足接口的要求
    
    */
    class Myclass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('汪汪汪');
        }
    }
})();
