// let a:string;
//声明了变量的类型为string，不能将number的类型赋值给string。会报错
// a = 123;

// a = '123';

//如果变量的声明和赋值时同时进行的，TS可以自动对变量进行类型检测
// let b = false;

// b = 123;

//函数的参数类型和返回值类型
function sum(a: number,b: number): number{
    return a+b;
}
sum(11,22)