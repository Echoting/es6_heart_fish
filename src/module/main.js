import actnObj from './actnObj';
import fruitObj from './fruitObj';
import momObj from './momObj';
import babyObj from './babyObj';
import scoreObj from './scoreObj';
import waveObj from './waveObj';
import heloObj from './heloObj';
let lastTime;
let bg_pic = new Image();
window.ctx1;
window.ctx2;
window.deltaTime;
window.can_width;
window.can_height;
window.actn;
window.fruit;
window.mom;
window.mouseX = 0;
window.mouseY = 0;
window.momtail = [];
window.momeye = [];
window.baby;
window.babybody = [];
window.score;
window.wave;
window.helo;
document.body.onload = ()=>{
	init();
	lastTime = Date.now();
	window.deltaTime = 0;
	gameloop();
}

function init(){
	let can1 = document.getElementById('canvas1');
	window.ctx1 = can1.getContext('2d');
	let can2 = document.getElementById('canvas2');
	window.ctx2 = can2.getContext('2d');

	can1.addEventListener('mousemove',(e)=>{
		if(e.offSetX||e.layerX&&!score.gameOver){
			window.mouseX = e.offSetX==undefined ? e.layerX: e.offSetX;
			window.mouseY = e.offSetY==undefined ? e.layerY: e.offSetY;
		}
	},false);

	window.can_width = can1.width;
	window.can_height = can1.height;
	bg_pic.src = 'images/background.jpg';

	window.actn = new actnObj();
	window.actn.init();

	window.fruit = new fruitObj();
	window.fruit.init();

	window.mom = new momObj();
	window.mom.init('images/bigEye','images/bigTail');

	window.baby = new babyObj();
	window.baby.init();

	window.score = new scoreObj();
	ctx1.font = "30px Verdana";
	ctx1.textAlign = 'center';

	window.wave = new waveObj();
	window.wave.init();

	window.helo = new heloObj();
	window.helo.init();


}

function gameloop(){
	requestAnimFrame(gameloop);
	let now = Date.now();
	deltaTime = now-lastTime;
	if(deltaTime>40){ deltaTime=40; }
	lastTime = now;
	drawBg();
	window.fruit.fruitMonitor();

	window.ctx1.clearRect(0,0,window.can_width,window.can_height);
	window.mom.draw(window.mouseX,window.mouseY);
	window.baby.draw();
	window.score.draw();
	window.wave.draw('white','rgba(255,255,255,');
	window.helo.draw();

	window.mom.clision();
	window.mom.momBabyClision();
}

function drawBg(){
	ctx2.drawImage(bg_pic,0,0,window.can_width,window.can_height);
	window.actn.draw();
	window.fruit.draw();
}