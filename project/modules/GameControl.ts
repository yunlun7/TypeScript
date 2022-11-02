// 引入其他的类
import Snake from "./Snake";
import Food from "./food";
import ScorePanel from "./ScorePanel";


// 游戏控制其,控制其他的所有类
class GameControl{
  // 定义三个属性
  // 蛇
  snake : Snake;
  food : Food;
  scorePanel : ScorePanel;

  // 创建一个属性用来存储蛇的移动方向(也就是按键的方向)
  direction:string = '';
  // 设置一个属性用来记录游戏是否结束
  isLive = true;

  constructor() {
    this.snake = new Snake();
    this.food  = new Food();
    this.scorePanel = new ScorePanel();
    this.init();
  }


  // 游戏初始化方法,调用后游戏开始
  init() {
    // 绑定键盘按下的事件  bind(this)此处指绑定当前的this值
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    // 调用run方法
    this.run();
  }

  // 创建一个键盘按下的响应函数
  keydownHandler(event:KeyboardEvent){

    /* 
    console.log(event.key);
    输出的结果为:
        ArrowRight
        ArrowLeft
        ArrowDown
        ArrowUp
    */

  // 检查用户按下的键是否合法
  //  修改direction值
  this.direction = event.key
  }


  // 太你家一个控制蛇移动的方法
  run() {
    // 获取蛇现在的坐标
    let X = this.snake.X;
    let Y = this.snake.Y;


    // 根据按键的方向修改位置的值
    switch (this.direction) {
      case "ArrowUp":
        Y -= 10;
        break;
      case "ArrowDown":
        Y += 10;
        break;
      case "ArrowLeft":
        X -= 10;
        break;
      case "ArrowRight":
        X += 10;
        break;
    }

    // 检测蛇是否吃到了食物
    this.checkEat(X,Y);
    



    // 修改蛇的x和y的值
    try{
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (e:any) {
      alert(e.message + ',游戏结束');
      this.isLive = false;

    }


    // 开启定时调用
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }


  // 定义方法检测蛇是否吃到食物
  checkEat(X:number, Y:number) {
    if(X === this.food.X && Y === this.food.Y) {
      this.food.change();
      this.scorePanel.addScore();
      this.snake.addBody();
    }
  }
}

export default GameControl;