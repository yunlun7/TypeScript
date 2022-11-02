"use strict";
(function () {
    const obj = {
        name: 'lili',
        age: 12
    };
    const obj2 = {
        name: 'zha',
        age: 23,
        gender: '男'
    };
    // 定义一个类可以使类去实现一个接口
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('hello');
        }
    }
})();
