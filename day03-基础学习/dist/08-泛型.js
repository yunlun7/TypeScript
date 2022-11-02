"use strict";
/*
在定义函数或类的时候，如果遇到类型不确定的就可以使用泛型
*/
function fn(a) {
    return a;
}
// 可以直接调用具有泛型的函数
console.log(fn(10));
console.log(fn('hello')); // 可以指定泛型
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, 'sss');
// T extends Inter  表示泛型T必须是Inter实现类(子类)
function fn3(a) {
    return a.length;
}
fn3({ length: 4 });
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new MyClass('悟空');
