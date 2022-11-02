(function() {
  // 定义一个animal类
  // abstract  抽象类是不能实例化对象的
  abstract class Animal{
    name:string;
    age:number;
    constructor(name:string,age:number){
      this.name = name;
      this.age = age;
    }

    abstract sayHello():void;
  }

  class Dog extends Animal{
    sayHello(){
      console.log("汪汪汪");
      
    }
  }

  const dog = new Dog('旺财', 3);
  console.log(dog);
  dog.sayHello();
})()