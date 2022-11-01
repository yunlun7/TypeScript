// 也可以 直接使用字面量进行类型声明
let a : 10;
a = 10; // pass
// a = 12 ;  // error


// 可以使用 | 来链接多个类型（联合类型），这样可以限制某个字面量在哪几个类型之间使用
let b :"male" | "female";
b = "male"; // pass
b = "female"; // pass
// b = "boy"; // error

let c : boolean | string;
c = true; // pass
c = 'good'; //pass


// any 表示任意类型，一个变量类型设置为any后，相当于关闭了TS的类型检测
// 使用TS时，开发过程中不建议使用any类型
let d : any; 
d = 1; // pass
d = "hello"; // pass
d = true; // pass


// 如果声明变量不指定类型，则TS会自动判断变量类型为any（这就是隐式的any）
let e; 
e = 1; // pass
e = "hello"; // pass
e = true; // pass


// unknown  表示为止类型
let f : unknown;

// d的类型是any，它可以赋值给任意的变量
// f = d;

// unknown类型的变量不能直接赋值给其他变量，需要进行判断，或者进行类型断言
if(typeof f === 'string'){
  c = f;
}

// 类型断言（验证），用来告诉解析器变量的实际类型
/* 
语法：
    1、变量 as 类型
    2、<类型> 变量
*/
c = e as string;


// void 用来表示空，以函数为例，就是没有返回值
function fn() :void{

}

// never 永远没有返回值
function fn2():never{
  throw new Error('出错了')
}