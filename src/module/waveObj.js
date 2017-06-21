class waveObj{
	constructor(){
		this.x = [];
		this.y = [];
		this.alive = [];
		this.r = [];
		this.num = 10;
	}
	init(){
		for(let i=0; i<this.num; i++){
			this.alive[i] = false;
			this.r[i] = 0;
		}
	}
	draw(color1,color2){
		ctx1.save();
		ctx1.lineWidth = 1;
		ctx1.shadowBlur = 6;
		ctx1.shadowColor = color1;
		for(var i=0; i<this.num; i++){
			if(this.alive[i]){
				//draw
				this.r[i] += deltaTime*0.04;
				var alpha = 1-this.r[i]/50;
				if(this.r[i]>50){
					this.alive[i] = false;
					this.r[i] = 0;
					break;
				}
				
				ctx1.strokeStyle = color2+alpha+')';
				
				ctx1.beginPath();
				ctx1.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI);
				ctx1.stroke();
			}
		}
		ctx1.restore();
	}
	born(x,y){
		for(let i=0; i<this.num; i++){
			if(!this.alive[i]){
				//born
				this.alive[i] = true;
				this.r[i] =10;
				this.x[i] = x;
				this.y[i] = y;
				return;
			}
		}
	}
}
export default waveObj;