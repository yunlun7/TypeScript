/* 
在定义函数或类的时候，如果遇到类型不确定的就可以使用泛型
*/
function fn<T>(a: T): T{
  return a;
}

// 可以直接调用具有泛型的函数
console.log(fn(10))
console.log(fn<string>('hello')); // 可以指定泛型


function fn2<T, K>(a:T, b:K): T{
  console.log(b);
  return a;
}

fn2<number,string>(123,'sss');

interface Inter{
  length:number;
}

// T extends Inter  表示泛型T必须是Inter实现类(子类)
function fn3<T extends Inter>(a: T): number{
  return a.length;
}

fn3({length:4});

class MyClass<T>{
  name: T;
  constructor(name:T) {
    this.name = name;
  }
}

const mc = new MyClass<string>('悟空');