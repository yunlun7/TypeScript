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
    // 定义一个cat类
    class Cat extends Animal {
        run() {
            console.log(`${this.name}在跑`);
        }
    }
    // 定义一个dog类
    class Dog extends Animal {
    }
    const dog = new Dog('二哈', 4);
    console.log(dog);
    dog.sayHello();
    const cat = new Cat('皮皮', 4);
    console.log(cat);
    cat.sayHello();
    cat.run();
})();
