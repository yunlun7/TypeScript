"use strict";
(function () {
    // 定义一个animal类
    // abstract  抽象类是不能实例化对象的
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log("汪汪汪");
        }
    }
    const dog = new Dog('旺财', 3);
    console.log(dog);
    dog.sayHello();
})();
