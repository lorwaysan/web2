window.onload = function(){
	var head = document.getElementsByClassName("head0")[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if (st>169) {
			head.style.position = "fixed"
		}
		else{
			head.style.position = "static"
		}
	}
}
var timeSet;
function getStyle(obj,style){
	if(obj.currentStyle){
		return obj.currentStyle[style];
	}else{
		return getComputedStyle(obj)[style];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timeSet);
	obj.timeSet=setInterval(function(){
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
				obj.style[attr]=cur/100;
			}else{
				obj.style[attr]=cur+"px";
			}
			if(json[attr] !=cur){
				isStop=false;
			}
		}
		if(isStop){
			clearInterval(obj.timeSet);
			callback && callback();
		}
	},30)
}
var rolling=document.getElementById("rolling");
var slider=document.getElementById("slider1");
var timeSet1;
var index1=1;
var isDown=false;
rolling.onmouseout=function(){
	timeSet1=setInterval(down,30);
}
function down(){
	slider.style.top=parseInt(getStyle(slider,"top"))-1+"px";
		   if(parseInt(getStyle(slider,"top"))==-364){
			  slider.style.top=0+"px";
		   }
}
rolling.onmouseover=function(){
	clearInterval(timeSet1);
}
timeSet1=setInterval(down,30);

var charge311=document.getElementById("charge311");
charge311.onchange=function(){
	var moneyphone=document.getElementsByClassName("moneyphone")[0];
    moneyphone.innerHTML='¥'+charge311.value;
}

var rightFrame1=document.getElementById("rightframe1");
var rightFrame2=document.getElementById("rightframe2");
var rightFrame3=document.getElementById("rightframe3");
var rightFrame4=document.getElementById("rightframe4");
var app=document.getElementById('app');
var isBian=false;
rightFrame1.onmouseover=function(){
	animate(this,{right:-20});
}
rightFrame1.onmouseout=function(){
	animate(this,{right:-90});
}
rightFrame2.onmouseover=function(){
	animate(this,{right:-20});
}
rightFrame2.onmouseout=function(){
	animate(this,{right:-110});
}
rightFrame3.onmouseover=function(){
	app.children[0].src="img/erwei.png";
	app.children[0].className="img2";
	animate(this,{right:-20});
}
rightFrame3.onmouseout=function(){
	app.children[0].src="img/serwei.png";
	app.children[0].className="smallewm"
	animate(this,{right:-90});
}
rightFrame4.onmouseover=function(){
	animate(this,{right:-20});
}
rightFrame4.onmouseout=function(){
	animate(this,{right:-90});
}
