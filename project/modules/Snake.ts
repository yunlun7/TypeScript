class Snake{
  // 表示蛇的元素
  head : HTMLElement;
  // 蛇的身体
  bodies : HTMLCollection;
  // 获取蛇的容器
  element: HTMLElement;


  constructor() {
    this.element = document.getElementById('snake')!
    this.head = document.querySelector('#snake > div')! as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
  }

  // 设置蛇的坐标（蛇头）
  get X() {
    return this.head.offsetLeft;
  }

  // 获取蛇的y轴坐标
  get Y() {
    return this.head.offsetTop;
  }

  // 设置蛇头坐标
  set X(value:number) {
    if (this.X === value) {
      return;
    }

    // 修改X的值时,是在修改水平坐标,蛇在左右移动,蛇在左移动的时候,不能向又掉头,反之亦然
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value ){
      // console.log("水平方向发生了掉头");
      // 如果发生了掉头,让蛇向反方向继续移动
      if(value > this.X){
        // 如果新值value大于旧值X, 则说明蛇在向右走,此时发生掉头,应该使蛇继续向左走
        value = this.X -10;
      } else {
        value = this.X + 10;
      }
      
    }
    // x 的合法范围0-290之间
    if (value < 0 || value > 290){
      throw new Error("蛇撞墙了")
    }
    this.head.style.left = value + 'px';

    // 移动身体
    this.moveBody();

    // 检查有没有撞到自己
    this.checkHeadBody();
  }


  set Y(value:number) {
    if (this.Y === value) {
      return;
    }
    
    // 修改y的值时,是在修改垂直坐标,蛇在上下移动,蛇上移动的时候,不能向又掉头,反之亦然
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value ){
      if(value > this.Y){
          value = this.Y -10;
      } else {
          value = this.Y + 10;
      }
    // 判断Y的合法范围
    if(value < 0 || value > 290){
      throw Error('蛇撞墙了')
    }
    
    this.head.style.top = value + 'pax';

    // 移动身体
    this.moveBody();

    // 检查有没有撞到自己
    this.checkHeadBody();
  }

}

  // 蛇增加身体对方法
  addBody(){
    // 向element中添加一个div
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }


  // 添加蛇身体移动的方法
  moveBody(){
    /* 
    将后面的身体设置为前身体的位置
    也就是:
    第4节 = 第3节的位置
    第3节 = 第2节的位置
    第2节 = 蛇头的位置
    */

    // 遍历获取所有的身体
    for(let i = this.bodies.length - 1; i > 0; i--) {
      // 获取身体前的位置
      let X =  (this.bodies[i-1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

      // 将这个值设置到当前的身体上
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top =  Y + 'px';
    }
  }

  checkHeadBody() {
    // 获取所有的身体,检查是否和蛇头的坐标发生了重叠
    for(let i = 1; i <this.bodies.length; i++){
      let bd = this.bodies[i] as HTMLElement;
      if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
        // 进入判断说明蛇头撞到了身体
        throw new Error('撞到自己了')
      }
    }
  }
}

export default Snake;