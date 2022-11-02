"use strict";
(function () {
    // 定义一个animal类
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('动物在叫');
        }
    }
    class Dog extends Animal {
        sayHello() {
            super.sayHello();
        }
    }
})();
