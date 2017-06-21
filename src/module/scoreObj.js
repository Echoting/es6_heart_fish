class scoreObj{
	constructor(){
		this.fruitNum = 0;
		this.doub = 1;
		this.score = 0;
		this.gameOver = false;
	}
	draw(){
		ctx1.fillStyle = 'white' ;
		ctx1.fillText('score: ' +this.score,can_width*0.5,can_height-100);
		if(this.gameOver){
			ctx1.fillText('GAMEOVER',can_width*0.5,can_height*0.5);
		}
	}
	addScore(){
		this.score += this.fruitNum*100*this.doub;
		this.fruitNum = 0;
		this.doub = 1;
	}
}
export default scoreObj;