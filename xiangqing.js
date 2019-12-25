//容量
var xiao=document.getElementById("xiao");
var da=document.getElementById("da");
var rongliang=document.getElementById("rongliang");
xiao.onclick=function(){
	xiao.style.border="1px solid #ff0853";
	xiao.style.background="url('img/duigou.png') no-repeat bottom right";
	da.style.background="";
	da.style.border="";
	rongliang.innerHTML='"'+xiao.innerHTML+'"';
}
da.onclick=function(){
	da.style.border="1px solid #ff0853";
	xiao.style.background=""
	da.style.background="url('img/duigou.png') no-repeat bottom right";
	xiao.style.border="";
	rongliang.innerHTML='"'+da.innerHTML+'"';
}

//大图转换
var pp0=document.getElementsByClassName("pp0")[0];
var img5=document.getElementsByClassName("three_two")[0].children;
img5[2].onclick=function(){
	this.style.border="2px solid #ff9003";
	img5[3].style.border="";
	pp0.src="img/pp0.jpeg";
	BigImg.src="img/pp0.jpeg";
}
img5[3].onclick=function(){
	this.style.border="2px solid #ff9003";
	img5[2].style.border="";
	pp0.src="img/pp1.jpeg";
	BigImg.src="img/pp1.jpeg";
}

//增加数量
var num=1;
var jian=document.getElementById('jian');
var jia=document.getElementById('jia');
var shuliang=document.getElementsByClassName("shuliang")[0];
jian.onclick=function(){
	if(num==1){
		this.style.cursor="not-allowed";
	}else{
		num--;
		shuliang.innerHTML=num;
		if(num==1){
			this.style.cursor="not-allowed";
		}else{
			jia.style.cursor="pointer";
		}
	}
}

jia.onclick=function(){
	if(num==5){
		this.style.cursor="not-allowed";
	}else{
		num++;
		shuliang.innerHTML=num;
		if(num==5){
			this.style.cursor="not-allowed";
		}else{
			jian.style.cursor="pointer";
		}
	}
}
var insert=document.getElementById("insert");
var dakuang=document.getElementsByClassName("dakuang")[0];
var xiaokuang=document.getElementById("xiaokuang");
var tuichu=document.getElementById("tuichu");
var liji=document.getElementsByClassName("fibt")[0];
insert.onclick=function(){
	dakuang.style.display="block";
	xiaokuang.style.display="block";
}
liji.onclick=function(){
	dakuang.style.display="none";
	xiaokuang.style.display="none";
}
tuichu.onclick=function(){
	dakuang.style.display="none";
	xiaokuang.style.display="none";
}


//放大镜
var liangkuang=document.getElementById("liangkuang");
var weifangda=document.getElementById("weifangda");
var yidong=document.getElementById("yidong");
var BigImg=document.getElementById("BigImg");
var fangda=document.getElementById("fangda");

weifangda.onmouseover=function(){
	fangda.style.display="block";
	yidong.style.display="block";
}
weifangda.onmouseout=function(){
	fangda.style.display="none";
	yidong.style.display="none";
}
weifangda.onmousemove=function(ev){
	var ev=ev || window.event;
	var st=document.documentElement.scrollTop || document.body.scrollTop;
	var oL=ev.clientX-liangkuang.offsetLeft-yidong.offsetWidth/2;
	var oT=ev.clientY-liangkuang.offsetTop-yidong.offsetHeight/2+st;

	var oMaxw=weifangda.offsetWidth-yidong.offsetWidth;
	var oMaxh=weifangda.offsetHeight-yidong.offsetHeight;

	oL=oL>oMaxw?oMaxw:oL<0?0:oL;
	oT=oT>oMaxh?oMaxh:oT<0?0:oT;
	yidong.style.top=oT+"px";
	yidong.style.left=oL+"px";

	var oBMaxw=fangda.offsetWidth-BigImg.offsetWidth;
	var oBMaxh=fangda.offsetHeight-BigImg.offsetHeight;

	BigImg.style.left=(oL/oMaxw)*oBMaxw+"px";
	BigImg.style.top=(oT/oMaxh)*oBMaxh+"px";

}


