// 定义表示记分牌的类
class ScorePanel{
  score = 0;
  level = 1;
  scoreEle : HTMLElement;
  levelEle : HTMLElement;

  // 设置一个变量来限制等级
  maxLevel : number;
  // 设置一个变量来设置多少分时升级
  upScore:number;

  constructor(maxLevel:number = 10, upScore:number = 10) {
    this.scoreEle = document.getElementById("score")!;
    this.levelEle = document.getElementById("level")!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  // 设置加分的方法
  addScore(){
    this.scoreEle.innerHTML = ++this.score + '';
    // 判断分数是多少，进行升级
    if (this.score % this.upScore === 0){
      this.levelup();
    }
  }

  // 设置提升等级的方法
  levelup(){
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + ''
    }

  }

}


export default ScorePanel;

/* const scorePanel = new ScorePanel();
for (let i = 0; i < 100; i++){
  scorePanel.addScore();
} */