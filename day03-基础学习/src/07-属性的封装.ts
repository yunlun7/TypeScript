(function(){
  class Person{
    /* 
    public
    protect
    private
    */
    private _name:string;
    private _age:number;

    constructor(name:string,age:number){
      this._name = name;
      this._age = age
    }

/*     getAge(){
      return this._age
    }
    setAge(value:number){
      if(value >= 0){
        this._age = value
      }
    } */


    // TS中设置getter方法的方式
    get name(){
      console.log('get name 执行了');
      
      return this._name;
    }
    set name(value: string) {
      this._name = value
    }
  }

  const per = new Person('李华', 23);
  console.log(per.name);
  per.name = '小语';
  console.log(per.name);
  
  
})()