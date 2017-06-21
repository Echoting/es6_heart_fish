// const num = 20;
//果实类
class fruitObj{
	constructor(){
		this.alive = [];
		this.orange = new Image();  //两种类型的果实 orange blue
		this.blue = new Image();
		this.x = []; //果实生政的坐标
		this.y = [];
		this.size = [];
		this.spd = []; // 果实上升的速度
		this.fruitType = []; //果实的类型
		this.actnNum = [];  //海葵的数量
		this.num = 20;
	}
	init(){
		for(let i=0; i<this.num; i++){
			this.alive[i] = false; 
			this.x[i] = 0;
			this.y[i] = 0;
			this.spd[i] = Math.random()*0.02+0.005;
			this.actnNum[i] = 0;
			this.born(i);
		}
		this.orange.src = 'images/fruit.png';
		this.blue.src = 'images/blue.png';
	}
	draw(){
		let pic ;
		for(let i=0; i<this.num; i++){
			if(this.alive[i]){
				let no = this.actnNum[i];
				if(this.fruitType[i] == 'orange'){
					pic = this.orange;
				}else{
					pic = this.blue;
				}
				if(this.size[i]<=16){
					this.x[i] = actn.headx[no];
					this.y[i] = actn.heady[no];
					this.size[i] += this.spd[i]*deltaTime;
				}else{
					this.y[i]-= this.spd[i]*deltaTime;
				}

				if(this.y[i]<=10){
					this.alive[i] = false;
				}
			// console.log(pic);

				ctx2.drawImage(pic,this.x[i]-this.size[i]*0.5,this.y[i]-this.size[i]*0.5,this.size[i],this.size[i]);
				
			}
			
		}
	}
	born(i){
		this.actnNum[i] = Math.floor(Math.random()*actn.num);
		this.size[i] = 0;
		this.alive[i] = true;
		var ran = Math.random();
		if(ran<0.2){
			this.fruitType[i] = 'blue';
		}else{
			this.fruitType[i] = 'orange';
		}		
	}
	// 检测屏幕上的果实，如果少于15个 就出生新的果实
	fruitMonitor(){
		let count = 0;
		for(let i=0; i<fruit.num; i++){
			if(fruit.alive[i]) count++;
		}
		if(count < 15){
			this.sendFruit();
			return;
		}
	}
	sendFruit(){
		for(let i=0; i<fruit.num; i++){
			if(!fruit.alive[i]){
				fruit.born(i);
				return;
			}
			
		}
	}
}
export default fruitObj;