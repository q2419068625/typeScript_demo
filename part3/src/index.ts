class Person{
    /*
        使用static 开头的属性时静态属性(类属性),可以之间通过类来调用
        Persion.name2

        readonly 开头的属性表示一个只读属性无法修改
    */
    readonly name2: string = '孙悟空'

    age: number = 18

    /*
        定义方法
            如果方法以static关键字可以定义静态方法(类方法)
    */
    sayHello(){
       console.log('hello 大家好');
   }
}

const per = new Person();

console.log(per);

// per.name2 = '333';

// console.log(Person.name2);
// console.log(Person.sayHello);


