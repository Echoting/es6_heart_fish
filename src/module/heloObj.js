import waveObj from './waveObj';
class heloObj extends waveObj{
	constructor(){
		super();
		this.num = 3;
	}
	init(){
		super.init();
	}
	draw(){
		super.draw('rgba(203,91,0,1)','rgba(203,91,0,');
	}
	born(x,y){
		super.born(x,y);
	}
}
export default heloObj;
