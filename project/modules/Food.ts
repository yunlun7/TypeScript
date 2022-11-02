// 定义食物类food
class Food{
  // 定义一个属性表示食物对应的元素

  element:HTMLElement;

  constructor() {
    // 获取页面中的food元素并肩其赋值给element
    this.element = document.getElementById('food')!;
  }

  // 定义一个获取食物x轴坐标的方法
  get X() {
    return this.element.offsetLeft;
  }

  // 定义一个获取食物Y轴坐标的方法
  get Y() {
    return this.element.offsetTop;
  }


  // 修改食物位置的方法
  change() {
    // 生成一个随机的位置
    // 食物的位置最小是0，最大时290
    // 移动一次就是一格，一格的大小就是10，所以要求食物坐标必须是整10
    let left = Math.round(Math.random() * 29) * 10;
    let top = Math.round(Math.random() * 29) * 10;
   


    this.element.style.left = left +'px';
    this.element.style.top = top + 'px';
  }
}

export default Food;

// 测试代码
/* const food = new Food();
console.log(food.X, food.Y);
food.change();
console.log(food.X, food.Y); */