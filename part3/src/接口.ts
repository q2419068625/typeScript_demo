(function(){
    /*
        接口中的所有属性都不能有实际的值
        接口只定义对象的结构，而不考虑实际的值
            在接口中所有的方法都是抽象方法
    */
    interface myInter{
        name: string
        sayHello():void
    }
    /*
        在定义类时，可以使类去实现一个接口
            实现接口就是使类满足接口的要求
    
    */
   class Myclass implements myInter{
        name: string

        constructor(name: string){
            this.name = name
        }
        sayHello(){
            console.log('汪汪汪');
        }
   }
})()