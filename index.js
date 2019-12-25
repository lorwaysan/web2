// 第一个效果 有问题
window.onload=function(){
	var cover1=document.getElementsByClassName('cover1')[0];
	window.onscroll=function(){
		var st=document.documentElement.scrollTop || document.body.scrollTop;
		if(st>180   ){
			cover1.style.position='fixed';
		}else{
			cover1.style.position='static';
		}
	}
}

var timer;
function getStyle(obj,style){
	if(obj.currentStyle){
		return obj.currentStyle[style];
	}else{
		return getComputedStyle(obj)[style];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var isStop=true;
		for(var attr in json){
			var now=0;
			if(attr == 'opacity'){
				 now=parseInt(getStyle(obj,attr)*100);
			}else{
				 now=parseInt(getStyle(obj,attr));
			}
			var speed=(json[attr]-now)/8;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			var cur=now+speed;
			if(attr == 'opacity'){
				obj.style[attr]=cur/100;                   //此处没有想到
			}else{
				obj.style[attr]=cur+"px";
			}
			if(json[attr] !=cur){
				isStop=false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback && callback();
		}
	},30)
}
var box=document.getElementById("box");
var slider=document.getElementById("slider");
var left=document.getElementById("left");
var right=document.getElementById("right");
var navChild=document.getElementById('nav').children;
var index=1;
var timer;
var isMove=false;
box.onmouseout=function(){
	animate(left,{opacity:0});
	animate(right,{opacity:0});
	timer=setInterval(next,3000);
}
box.onmouseover=function(){
	animate(left,{opacity:90});
	animate(right,{opacity:90});
	clearInterval(timer);
}
left.onclick=prev;
right.onclick=next;
left.onmousedown=pre;
right.onmousedown=pre;
function next(){
	if(isMove){
		return ;
	}
	index++;
	navmove();
	isMove=true;
	animate(slider,{left:-808*index},function(){
		if(index==7){
			slider.style.left=-808+"px";
			index=1;
		}
		isMove=false;
	})
}
function prev(){
	if(isMove){
		return ;
	}
	index--;
	navmove();
	isMove=true;
	animate(slider,{left:-808*index},function(){
		if(index==0){
			slider.style.left=(-808*6)+"px";
			index=6;
		}
		isMove=false;
	})
}
for(var i=0;i<navChild.length;i++){
	navChild[i].index=i;
	navChild[i].onclick=function(){
	    index=this.index+1;
	    navmove();
	    animate(slider,{left:-808*index});
	}
}
function navmove(){
	for(var i=0;i<navChild.length;i++){
		navChild[i].className="";
	}
	if(index>6){
		navChild[0].className="active";
	}else if(index==0){
		navChild[5].className="active";
	}else{
		navChild[index-1].className="active";
	}
}
function pre(e){
	var ev=e || window.event;
	ev.preventDefault();
}
timer=setInterval(next,3000);
var xiala=document.getElementById("xiala");
xiala.onchange=function(){
	var qian=document.getElementsByClassName("qian")[0];
    qian.innerHTML='¥'+xiala.value;
}

//侧边缘滑动
var b1=document.getElementById("xuanfu1");
var b2=document.getElementById("xuanfu2");
var b3=document.getElementById("xuanfu3");
var b4=document.getElementById("xuanfu4");
var app=document.getElementById('app');
var isBian=false;
b1.onmouseover=function(){
	animate(this,{right:-20});
}
b1.onmouseout=function(){
	animate(this,{right:-90});
}
b2.onmouseover=function(){
	animate(this,{right:-20});
}
b2.onmouseout=function(){
	animate(this,{right:-110});
}
b3.onmouseover=function(){
	// app.innerHTML='<img src="img/erwei.png" style="float:left;margin:0 10px;">';
	app.children[0].src="img/erwei.png";
	app.children[0].className="img2";
	animate(this,{right:-20});
}
b3.onmouseout=function(){
	app.children[0].src="img/serwei.png";
	app.children[0].className="img1"
	animate(this,{right:-90});
}
b4.onmouseover=function(){
	animate(this,{right:-20});
}
b4.onmouseout=function(){
	animate(this,{right:-90});
}

//轮播公告
var gonggao=document.getElementById("gonggao");
var slider1=document.getElementById("slider1");
var timer1;
var index1=1;
var isDown=false;
gonggao.onmouseout=function(){
	timer1=setInterval(down,30);
}
function down(){
	slider1.style.top=parseInt(getStyle(slider1,"top"))-1+"px";
		   if(parseInt(getStyle(slider1,"top"))==-364){
			  slider1.style.top=0+"px";
		   }
}
gonggao.onmouseover=function(){
	clearInterval(timer1);
}
timer1=setInterval(down,30);

