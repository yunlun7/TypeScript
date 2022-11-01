// 声明一个变量a，同时指定他的类型为number
let a :number;

// a 的类型设置为了number，在以后的使用过程中a的值只能为数字
a = 10;  // pass
a = 30;  // pass
// a = 'hello';  // 报错


// 声明变量，并同时赋值
let b:boolean = false;


// 如果变量声明和赋值是同时进行的，TS可以自动对变量进行类型检测
let flag = true;
flag = false; // pass 
// flag = '124';  //报错

// JS中的函数是不考虑参数的类型和个数的
function sum(a, b) { 
  return a + b;
}

console.log(sum(123, 456));

