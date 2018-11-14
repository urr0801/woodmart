var pages = new SpaAni(".page", ".ani", 300);


$(".page:nth-child(4)").mousemove(function(evt){
	var delta = 50;
	var cX = evt.clientX; 
	var cY = evt.clientY;
	var iX = $(this).find(".bg").width()/2
	var iY = $(this).find(".bg").height()/2
	var mX= (iX - cX)/delta;
	var mY= (iY - cY)/delta;
	console.log(mX,mY);
	$(this).find(".bg").css("transform","translate("+mX+"px,"+mY+"px)");
});