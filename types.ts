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