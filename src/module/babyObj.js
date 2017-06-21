
// 鱼宝宝的绘制，继承自鱼妈妈
import momObj from './momObj';
class babyObj extends momObj{
	// 调用鱼妈妈的构造函数  然后不同的是身体的变化，单独拿出来特有的变量
	constructor(){
		super();
		this.babybodyTimer = 0;
		this.babybodyCounter = 0;
	}
	init(){
		//调用鱼妈妈的init函数，将不同的点提出来放进了参数中
		super.init('images/babyEye','images/babyTail');
		this.x = can_width*0.5 + 60;
		this.body.src = 'images/baby.png';
		// 对特有的鱼身子进行初始化
		for(let i=0; i<20;i++){
			babybody[i] = new Image();
			babybody[i].src = 'images/babyFade'+i+'.png';
		}
	}
	draw(){
		//绘制函数，前一部分相同，就提取了参数，继承了父类的draw函数
		// 自己特有的身子的绘制，进行了重写
		super.draw(mom.x,mom.y);
		this.babybodyTimer+=deltaTime;
		if(this.babybodyTimer>160){
			this.babybodyTimer %= 160;
			this.babybodyCounter = this.babybodyCounter+1;
			if(this.babybodyCounter>=19) 
			{
				this.babybodyCounter = 19;
				score.gameOver=true;
			}
		}
		ctx1.save();
		ctx1.translate(this.x,this.y);
		ctx1.rotate(this.angle);
		
		ctx1.drawImage(momtail[this.bigtailCounter], -momtail[this.bigtailCounter].width*0.5+30, -momtail[this.bigtailCounter].height*0.5);
		ctx1.drawImage(babybody[this.babybodyCounter], -babybody[this.babybodyCounter].width*0.5, -babybody[this.babybodyCounter].height*0.5);
		ctx1.drawImage(momeye[this.bigeyeCounter], -momeye[this.bigeyeCounter].width*0.5, -momeye[this.bigeyeCounter].height*0.5);

		ctx1.restore();
	}
}
export default babyObj;