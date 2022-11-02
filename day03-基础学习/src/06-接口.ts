(function(){

  // 描述一个对象类型
  type myType = {
    name:string,
    age:number
  };

  const obj : myType = {
    name:'lili',
    age:12
  };


  // 接口
  interface myInterface{
    name: string,
    age:number
  }

  interface myInterface {
    gender: string
  }

  const obj2 : myInterface = {
    name: 'zha',
    age:23,
    gender:'男'
  }

  // 接口可以在定义类的时候去限制类的结构
  interface myInter{
    name:string,
    sayHello():void;
  }

  // 定义一个类可以使类去实现一个接口
  class MyClass implements myInter{
    name:string;
    constructor(name:string){
      this.name = name
    }
    sayHello(){
        console.log('hello');
        
    }
  }


})()