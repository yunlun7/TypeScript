"use strict";
// 使用class关键字定义一个类
class Person {
    constructor() {
        // 定义实例属性（使用对象进行访问）
        this.name = '悟空';
        // readonly 表示是一个只读的属性，无法修改
        this.salary = 12000;
    }
    // 定义方法
    sayHello() {
        console.log('hello');
    }
}
// 在属性前使用static关键字可以定义类属性（静态属性，需要通过类进行访问）
Person.age = 18;
const per = new Person();
console.log(per);
console.log(per.name, Person.age);
console.log(per.salary);
per.sayHello();
