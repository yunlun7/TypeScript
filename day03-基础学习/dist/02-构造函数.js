"use strict";
class Dog {
    // 构造函数
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bark() {
        alert('wang!wang!');
    }
}
// 创建实例对象
const dog = new Dog('旺财', 2);
console.log(dog);
const dog2 = new Dog('二哈', 4);
console.log(dog2);
