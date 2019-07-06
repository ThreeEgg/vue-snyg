<template>
    <div class="notfound">
        <canvas id="canvas" style="height:100%;display: block;margin: 0 auto;"></canvas>
    </div>
</template>

<script>
var digit =
    [
        [
            [0,0,1,1,1,0,0],
            [0,1,1,0,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,0,1,1,0],
            [0,0,1,1,1,0,0]
        ],//0
        [
            [0,0,0,1,1,0,0],
            [0,1,1,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [1,1,1,1,1,1,1]
        ],//1
        [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,0,0,0],
            [0,1,1,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,0,0,0,1,1],
            [1,1,1,1,1,1,1]
        ],//2
        [
            [1,1,1,1,1,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,1,0,0],
            [0,0,0,0,1,1,0],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//3
        [
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,1,0],
            [0,0,1,1,1,1,0],
            [0,1,1,0,1,1,0],
            [1,1,0,0,1,1,0],
            [1,1,1,1,1,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,1,1]
        ],//4
        [
            [1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,1,1,1,1,0],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//5
        [
            [0,0,0,0,1,1,0],
            [0,0,1,1,0,0,0],
            [0,1,1,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,0,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//6
        [
            [1,1,1,1,1,1,1],
            [1,1,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0]
        ],//7
        [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//8
        [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,1,1,0,0,0,0]
        ],//9
        [
            [0,0,0,0],
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0],
            [0,0,0,0]
        ]//:
    ];
var WINDOW_WIDTH = 1024;
var WINDOW_HEIGH = 468;
var RADIOS = 8;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;

var balls = [];

var curShowTimeSeconds = 0;

window.onload = function(){

	WINDOW_WIDTH = document.documentElement.clientWidth - 100;
	WINDOW_HEIGH = document.documentElement.clientHeight - 100;

	MARGIN_LEFT = Math.round(WINDOW_WIDTH / 10);
	RADIOS = Math.round(WINDOW_WIDTH * 4 / 5 / 108) - 1;

	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');

	canvas.width = WINDOW_WIDTH;
	canvas.height = WINDOW_HEIGH;
	curShowTimeSeconds = getCurrentShowTimeSeconds();

	setInterval(()=>{
		
		render(context);
		update();
		
	},50)
	
}
function getCurrentShowTimeSeconds(){
	var curTime = new Date();
	var ret = curTime.getHours() * 3600 + curTime.getMinutes() * 60 + curTime.getSeconds();

	return ret;
}
function update(){
	var nextShowTimeSeconds = getCurrentShowTimeSeconds();
	var nextHours = parseInt(nextShowTimeSeconds / 3600);
	var nextMinutes = parseInt((nextShowTimeSeconds - nextHours * 3600) / 60);
	var nextSeconds = nextShowTimeSeconds % 60;

	var curHours = parseInt(curShowTimeSeconds / 3600);
	var curMinutes = parseInt((curShowTimeSeconds - curHours * 3600) / 60);
	var curSeconds = curShowTimeSeconds % 60;

	if(nextSeconds != curSeconds){
		if(parseInt(curHours/10) != parseInt(nextHours/10)){
			addBalls(MARGIN_LEFT + 0, MARGIN_TOP, parseInt(curHours / 10));
		}
		if(parseInt(curHours%10) != parseInt(nextHours%10)){
			addBalls(MARGIN_LEFT + 15*(RADIOS+1), MARGIN_TOP, parseInt(curHours / 10));
		}

		if(parseInt(curMinutes/10) != parseInt(nextMinutes/10)){
			addBalls(MARGIN_LEFT + 39*(RADIOS+1), MARGIN_TOP, parseInt(curHours / 10));
		}
		if(parseInt(curMinutes%10) != parseInt(nextMinutes%10)){
			addBalls(MARGIN_LEFT + 54*(RADIOS+1), MARGIN_TOP, parseInt(curHours % 10));
		}

		if(parseInt(curSeconds/10) != parseInt(nextSeconds/10)){
			addBalls(MARGIN_LEFT + 78*(RADIOS+1), MARGIN_TOP, parseInt(curHours / 10));
		}
		if(parseInt(curSeconds%10) != parseInt(nextSeconds%10)){
			addBalls(MARGIN_LEFT + 90*(RADIOS+1), MARGIN_TOP, parseInt(curHours % 10));
		}
		curShowTimeSeconds = nextShowTimeSeconds;
	}
	updateBalls();
}
function updateBalls(){
	for(var i = 0; i < balls.length; i++){
		balls[i].x += balls[i].vx;
		balls[i].y += balls[i].vy;
		balls[i].vy += balls[i].g;

		if(balls[i].y >= WINDOW_HEIGH - RADIOS){
			balls[i].y = WINDOW_HEIGH - RADIOS;
			balls[i].vy = -balls[i].vy*0.65;
		}
	}
	var cnt = 0;
	for(var i = 0; i < balls.length ; i++){
		if(balls[i].x + RADIOS > 0 && balls[i].x - RADIOS < WINDOW_WIDTH){
			balls[cnt++] = balls[i];
		}
	}
	while( balls.length > Math.min(cnt,300)){
		balls.pop();
	}
}
function addBalls(x, y, num){
	for(var i = 0; i < digit[num].length; i++){
		for(var j = 0; j < digit[num][i].length; j++){
			if(digit[num][i][j] == 1){
				var aBall = {
					x: x + j * 2 *(RADIOS + 1) + (RADIOS + 1),
					y: y + i* 2 *(RADIOS + 1) + (RADIOS + 1),
					g: 1.5+Math.random(),
					vx: Math.pow(-1, Math.ceil(Math.random()*1000)) * 7,
					vy:-5,
					color: randomColor()
				};
				balls.push(aBall);
			}
		}
	}
}
function render(ctx){
	ctx.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGH);
	/*var date = new Date()
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();*/
	var hours = parseInt(curShowTimeSeconds / 3600);
	var minutes = parseInt((curShowTimeSeconds - hours * 3600) / 60);
	var seconds = curShowTimeSeconds % 60;

	renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hours / 10), ctx);
	renderDigit(MARGIN_LEFT + 15 * (RADIOS + 1),MARGIN_TOP,parseInt(hours % 10), ctx);
	renderDigit(MARGIN_LEFT + 30 * (RADIOS + 1),MARGIN_TOP,10, ctx);
	renderDigit(MARGIN_LEFT + 39 * (RADIOS + 1),MARGIN_TOP,parseInt(minutes / 10), ctx);
	renderDigit(MARGIN_LEFT + 54 * (RADIOS + 1),MARGIN_TOP,parseInt(minutes % 10), ctx);
	renderDigit(MARGIN_LEFT + 69 * (RADIOS + 1),MARGIN_TOP,10, ctx);
	renderDigit(MARGIN_LEFT + 78 * (RADIOS + 1),MARGIN_TOP,parseInt(seconds / 10), ctx);
	renderDigit(MARGIN_LEFT + 93 * (RADIOS + 1),MARGIN_TOP,parseInt(seconds % 10), ctx);


	for(var i = 0; i < balls.length; i++){
		ctx.fillStyle = balls[i].color;

		ctx.beginPath();
		ctx.arc(balls[i].x,balls[i].y,RADIOS,0,2*Math.PI,true);
		ctx.closePath();

		ctx.fill();
	}
}
function renderDigit(x,y,num,ctx){
	ctx.fillStyle = "rgb(0,102,153)";

	for(var i = 0; i < digit[num].length; i++){
		for(var j = 0; j < digit[num][i].length; j++){
			if(digit[num][i][j] == 1){
				var centerX = x + j * 2 *(RADIOS + 1) + (RADIOS + 1);
				var centerY = y + i* 2 *(RADIOS + 1) + (RADIOS + 1);
				ctx.beginPath();
				ctx.arc(centerX, centerY, RADIOS,0,2*Math.PI);
				ctx.closePath();
				ctx.fill()
			}
		}
	}
}
function randomColor(){//随机颜色
	var str =" rgba(" + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256)+",1)";
	return str;
}

export default {

}
</script>

<style>

</style>
