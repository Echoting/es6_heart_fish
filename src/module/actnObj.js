//摆动的海葵
// const num = 50;
class actnObj {
	constructor(){
		this.x = [];  //每个海葵的起始坐标
		this.len = [];  //海葵的高度 200-250
		this.headx = []; // 海葵的起始x坐标
		this.heady = []; // 海葵的起始y坐标
		this.alpha = 0;  // 透明度
		this.amp = [];  // 50-100
		this.num = 50;
	}
	// 对属性进行初始化
	init(){
		for(let i = 0; i < this.num; i++){
			this.x[i] = i*16+ Math.random()*20;
			this.len[i] = 200+Math.random()*50;
			this.headx[i] = this.x[i];
			this.heady[i] = can_height - 250 +Math.random()*50;
			this.amp[i] = Math.random()*50+50;
		}
	}
	// 开始画海葵 通过dis随机产生正负值，然后改变quadraticCurveTo的控制点
	draw(){
		this.alpha += deltaTime*0.0008;
		let dis = Math.sin(this.alpha);
		ctx2.save();
		ctx2.globalAlpha = 0.6;
		ctx2.lineWidth = 20;
		ctx2.strokeStyle = '#3b1541';
		ctx2.lineCap = 'round';
		for(let j=0; j<this.num; j++){
			ctx2.beginPath();
			ctx2.moveTo(this.x[j],can_height);
			this.headx[j] = this.x[j]+dis*this.amp[j];
			ctx2.quadraticCurveTo(this.x[j],can_height-80,this.headx[j], this.heady[j]);			
			ctx2.stroke();
		}	
		ctx2.restore();
	}
}
export default actnObj;