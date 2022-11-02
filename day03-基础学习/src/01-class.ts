// 使用class关键字定义一个类
class Person {

  // 定义实例属性（使用对象进行访问）
  name: string = '悟空';
  // 在属性前使用static关键字可以定义类属性（静态属性，需要通过类进行访问）
  static age:number = 18;

  // readonly 表示是一个只读的属性，无法修改
  readonly salary:number = 12000;


  // 定义方法
  sayHello () {
    console.log('hello');
    
  }

}

const per = new Person();
console.log(per);
console.log(per.name, Person.age);
console.log(per.salary);
per.sayHello();


