// object 表示一个js对象（实际开发中不常用）
let a : object;
a = {}; // pass
a = function () { 
}; // pass


// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名：属性值，属性名：属性值...}
// 在属性名后面加上?，可以表示属性是可选的
let b : {name: String, age?: number} ;
b = {name:'李华'}; // pass
b = {name: '丽丽', age:18}; // pass


// [proName:String]:any  表示任意类型的属性（实际开发中常用）
// 其中的proName是可以自定义的，且类型也是自定义
let c : {name: String, [proName:string]: any};
c = {name: 'zz'}; //pass
c = {name: 'li', age: 23, gender: '男'}; //pass



/* 
设置函数结构的类型声明：
  语法：
  （形参：类型，形参：类型...） => 返回值

*/
let d : (a:number, b:number) => number
d = function(n1, n2): number {
  return n1 + n2;
}


/* 
数组的类型声明：
  1、类型[]
  2、Array<类型>
*/


// string[] 表示字符串数组
let e :string[];
e = ['a', 'b', 'c']; //pass

// number[] 表示数值数组
let f : number[];
f = [1, 2, 3]; //pass

// 数值数组还可以这样表示
let g: Array<number>;
g = [1, 2, 3]; //pass



/* 
元组：固定长度的数组
  语法：[类型， 类型， 类型...]

*/

let h : [string, string];
h = ['hello', 'world']; // pass
// h = ['hello']; //error
// h = [12, '12']; //error



/* 
枚举：一般是一个变量在几个值之间可选的，比如：性别
*/

enum Gender{
  Male = 0,
  Female = 1
}

let i : {name: string, gender: Gender};
i = {
  name: 'li',
  gender: Gender.Male
}
console.log(i.gender === Gender.Male);


// & 表示同时
let k : {name: string} & {age: number};
k = {name: 'li', age: 13}; //pass


// 类型的别名，也就是自定义类型
type myType = 1 | 2 | 3 | 4;
let l : myType;
let m : myType;

l = 1; // pass
m = 4; // pass

