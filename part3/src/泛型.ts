function fn<T>(name: T){
    return name;
}

fn<string>('大厦');

interface Inter{
    length: number
}

function fn2<T extends Inter>(a:T): number{
    return a.length
}

