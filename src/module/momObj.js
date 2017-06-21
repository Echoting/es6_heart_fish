//鱼妈妈类 
import { lerpDistance,lerpAngle,calLength2 } from './commonFunctions';
class momObj{
	constructor(){
		this.x;  //鱼妈妈的坐标
		this.y;
		this.angle;
		this.eye = new Image();
		this.body = new Image();
		this.tail = new Image();

		this.bigtailTimer = 0;    //鱼尾巴的摆动的速度
		this.bigtailCounter = 0;
	}
	init(bigEye,bigTail){
		this.x = can_width*0.5;
		this.y = can_height*0.5;
		this.angle = 0;
		this.body.src = 'images/big.png';

		this.bigeyeTimer = 0;
		this.bigeyeCounter = 0;
		this.bigeyeInterval = 2000;     //间隔多少秒鱼眨一次眼睛
		//初始化鱼眼睛
		for(let i=0; i<2; i++){
			momeye[i] = new Image();
			momeye[i].src = bigEye+i+'.png';
		}
		//鱼尾巴的初始化
		for(var i=0; i<8 ;i++){
			momtail[i] = new Image();
			momtail[i].src = bigTail+i+'.png';
		}
	}
	draw(mouseX,mouseY){
		// 让鱼跟着鼠标走
		// 通过鼠标的坐标点和鱼妈妈的坐标点算出夹角 然后旋转
		// 如果游戏结束，就不能跟着动 gameOver
		if(mouseX!=undefined&&mouseY!=undefined){

			this.x = lerpDistance(mouseX, this.x, 0.98);
			this.y = lerpDistance(mouseY, this.y, 0.98);

			let deltaX = this.x - mouseX;
			let deltaY = this.y - mouseY ;
			let beta = Math.atan2(deltaY,deltaX);

			this.angle = lerpAngle(beta,this.angle,0.6);
		}
		// 隔50ms鱼尾巴动起来……主要是依次绘制momtail数组里面的图片，
		// 这里是在每隔多少秒更新数组里面的i值，从而让鱼动起来
		this.bigtailTimer += deltaTime;
		if(this.bigtailTimer>=50){
			this.bigtailCounter = (this.bigtailCounter+1)%8;
			this.bigtailTimer = this.bigtailTimer%50;
		}
		// 让鱼眨眼睛，原理与鱼尾巴动起来是一样的，
		//但是眨眼睛的时间给了个随机数，让眨眼睛的间隔更随机
		//bigeye
		this.bigeyeTimer+=deltaTime;
		if(this.bigeyeTimer>this.bigeyeInterval){
			this.bigeyeCounter = (this.bigeyeCounter+1)%2;
			this.bigeyeTimer%=this.bigeyeInterval;
			if(this.bigeyeCounter==0){
				this.bigeyeInterval = Math.random()*1500+2000;
			}else{
				this.bigeyeInterval = 200;
			}
		}
		ctx1.save();
		ctx1.translate(this.x,this.y);
		ctx1.rotate(this.angle);
		ctx1.drawImage(momtail[this.bigtailCounter], -momtail[this.bigtailCounter].width*0.5+30, -momtail[this.bigtailCounter].height*0.5);		
		ctx1.drawImage(this.body, -this.body.width*0.5, -this.body.height*0.5);
		ctx1.drawImage(momeye[this.bigeyeCounter], -momeye[this.bigeyeCounter].width*0.5, -momeye[this.bigeyeCounter].height*0.5);
		ctx1.restore();
	}
	clision(){
		if(!score.gameOver){
			for(let i=0; i<fruit.num; i++){
				if(fruit.alive[i]){
					var dis = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
					if(dis<900){
						fruit.alive[i] = false;
						score.fruitNum ++;
						if(fruit.fruitType[i] == 'blue'){
							score.doub = 2;
						}
						wave.born(fruit.x[i],fruit.y[i]);
					}
				}
			}
		}
	}
	//大鱼碰小鱼
	momBabyClision(){
		if(!score.gameOver){
			var dis = calLength2(baby.x,baby.y,mom.x,mom.y);
			if(dis<900){
				if(score.fruitNum>0){
					baby.babybodyCounter = 0;
				}
				
				mom.mombodyCounter = 0;
				score.addScore();
				helo.born(baby.x,baby.y);
			}
		}
	}
}
export default momObj;