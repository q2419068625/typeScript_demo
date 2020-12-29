//字面量 限制 变量的值就时该类型的值
let a: 10;
// a = 20; //报错

// any 任意类型 
let b: any;
b = true;
b = '132';
b = 123

//unknown  类型安全的any 
let c: unknown;
c = true;
c = '123';
c = 123

//unknown 和 any 的区别 是 一个可以赋值给变量，一个不可以赋值给变量，会报错。
let s: string;

s = b;
// s = c;
// void 没有值 或 undefined
function fn(): void{
    return undefined
}

function fn2(): never{
    throw new Error('没有值')
}


//object 表示一个js对象

let e: object;

e = {};
e = function fn(){}


/*
{}用来指定对象中可以包含哪些属性
语法：{属性名:属性值,属性名:属性值}
在属性名后边加上一个?表示属性是可选的
*/

let n: {name: string, age?: number}
n = {name:'孙悟空'}

//[propsName:string]: any 表示任意类型的属性
let t : {name: string,[propsName:string]: any};
t = {name:'猪八戒',age:18,gender:'男'}

/*
设置函数结构的类型声明
    语法:(形参:类型,形参:类型 ...)=>返回值
*/

let y :(a: string, b: string)=>string;

// y = function fn(n1: number,n2: number):number{
//     return '123'
// }

//string[]表示字符串数组
let u: string[];
u = ['1','2','3'];

//number[]表示字符串数组
let o:number[];
o = [1,2,3,4]

let g: Array<number>;

/*
元组，元组就是固定长度的数组
    语法:[类型,类型,类型]
*/
let h: [string,number]
h = ['hello',123 ]

/*
enum 枚举
*/

enum Gender{
    Male = 0,
    Female = 1
}
let i: {name:string,gender:Gender}
i = {
    name:'孙悟空',
    gender:Gender.Male
}

// & 表示同时

let j: {name: string} & {age:number}

j = {name:'孙悟空',age:18}


//类型的别名
type myType = 1|2|3|4|5

let k: myType;
let l: myType;

// l = 8


