
/*
var 데이터 json 파일로 불러오는방법
console.log(blogs);
console.log(JSON.stringify(blogs));
*/

var n = 0;

function swap() {
	$("#mains > li").css("z-index", 9);
	$("#mains > li").eq(n).css("z-index", 10);
	if (n == 2) n = 0;
	else n++;

}

setInterval(swap, 2000);

$("#navs > :last-child").hover(
	function () {
		$(".more_cont").stop().slideDown(200);
	},
	function () {
		$(".more_cont").stop().slideUp(200);
	}
);

$(".searchs .hand").click(function () {
	$(".search_catelist").stop().slideToggle(100);
});

$(".menu li").hover(function () {
	$(".menu_modal").stop().fadeOut(0);
	$(this).children(".menu_modal").stop().fadeIn(100);
}, function () {
	$(".menu_modal").stop().fadeOut(0);
});


$.ajax({
	url: "../json/cate01.json",
	type: "get",
	dataTape: "json",
	data: {},
	success: function (data) {
		var html;
		for (i = 1; i < data.result.length; i++) {
			html = '<ul>';		
			html += data.result[i][0];						
			html += data.result[i][1];						
			html += '</ul>';
			$("#modal1").append(html);
		}
	},
	error: function (xhr, status, error) {
		console.log(xhr, status, error);
	}
});

$.ajax({
	url: "../json/cate02.json",
	type: "get",
	dataTape: "json",
	data: {},
	success: function (data) {
		var cnt = data.result.length;
		var style = 'style="width:' + (100 / cnt + '%') + ';"';
		var html;
		for (var i = 0; i < cnt; i++) {
			// console.log(data.result[i].main.title);
			html = '<ul ' + style + '>';
			html += '<li class="title"><a href="#">';
			html += data.result[i].main.title;
			html += '</a>';
			html += '<div class="tooltips" style="background:'+data.result[i].main.color+'">';
			html += data.result[i].main.icon;
			html += '<div style="background:' +data.result[i].main.color+ '"></div>';
			html += '</div>';
			html += '</li>';
			for (var j = 0; j < data.result[i].sub.length; j++) {
				// console.log(data.result[i].sub[j].title);
				html += '<li class="cont"><a href="#">';
				html += data.result[i].sub[j].title;
				html += '</a>';
				html += '<div class="tooltips" style="background:'+data.result[i].sub[j].color+'">';
				html += data.result[i].sub[j].icon;
				html += '<div style="background:' +data.result[i].sub[j].color+ '"></div>';
				html += '</div>';
				html += '</li>';
			} 
			html += '</ul>';
			$("#modal2").append(html);
		}
	},
	error: function (xhr, status, error) {
		console.log(xhr, status, error);
	}
});

$.ajax({
	url: "../json/cate03.json",
	type: "get",
	dataTape: "json",
	data: {},
	success: function (data) {
		var cnt = data.result.length;
		var style = 'style="width:' + (50 / cnt + '%') + ';"';
		var html;
		for (var i = 0; i < cnt; i++) {
			html = '<ul ' + style + '>';
			html += '<li class="title"><a href="#">';
			html += data.result[i].main.title;
			html += '</a>';
			html += '<div class="tooltips" style="background:'+data.result[i].main.color+'">';
			html += data.result[i].main.icon;
			html += '<div style="background:' +data.result[i].main.color+ '"></div>';
			html += '</div>';
			html += '</li>';
			for (var j = 0; j < data.result[i].sub.length; j++) {
				html += '<li class="cont"><a href="#">';
				html += data.result[i].sub[j].title;
				html += '</a>';
				html += '<div class="tooltips" style="background:'+data.result[i].sub[j].color+'">';
				html += data.result[i].sub[j].icon;
				html += '<div style="background:' +data.result[i].sub[j].color+ '"></div>';
				html += '</div>';
				html += '</li>';
			} 
			html += '</ul>';
			$("#modal3").append(html);
		}
	},
	error: function (xhr, status, error) {
		console.log(xhr, status, error);
	}
});



$.ajax({
	url: "../json/cate03_1.json",
	type: "get",
	dataTape: "json",
	data: {},
	success: function (data) {
		var cnt = data.result.length;
		var style = 'style="width:' + (50 / cnt + '%') + ';"';
		var html;
		for (var i = 0; i < cnt; i++) {
			html = '<ul ' + style + '>';
			html += '<li class="title"><a href="#">';
			html += data.result[i].main.title;
			html += '</a>';
			html += '<div class="tooltips" style="background:'+data.result[i].main.color+'">';
			html += data.result[i].main.icon;
			html += '<div style="background:' +data.result[i].main.color+ '"></div>';
			html += '</div>';
			html += '</li>';
			for (var j = 0; j < data.result[i].sub.length; j++) {
				
				html += '<li class="box clear" onclick="goUrl(\'https://naver.com\')"><div class="image"><img src="../img/snow/item/';
				html += data.result[i].sub[j].img;
				html += '"></div>';
				html += '<div class="txt">';
				html += '<div>'
				html += data.result[i].sub[j].txt1;
				html += '</div>'
				html += '<ul class="fo">'
				html += '<li>'
				html += data.result[i].sub[j].txt2;
				html += '</li>';
				html += '<li>'
				html += data.result[i].sub[j].txt3;
				html += '</li>';
				html += '</ul>';
				html += '</div></li>';
			} 
		
			$("#modal3").append(html);
		}
	},
	error: function (xhr, status, error) {
		console.log(xhr, status, error);
	}
	});

$.ajax({
	url: "../json/cate04.json",
	type: "get",
	dataTape: "json",
	data: {},
	success: function (data) {
		var cnt = data.result.length;
		var style = 'style="width:' + (100 / cnt + '%') + ';"';
		var html;
		for (var i = 0; i < cnt; i++) {
			// console.log(data.result[i].main.title);
			html = '<ul ' + style + '>';
			html += '<li class="title"><a href="#">';
			html += data.result[i].main.title;
			html += '</a>';
			html += '<div class="tooltips" style="background:'+data.result[i].main.color+'">';
			html += data.result[i].main.icon;
			html += '<div style="background:' +data.result[i].main.color+ '"></div>';
			html += '</div>';
			html += '</li>';
			for (var j = 0; j < data.result[i].sub.length; j++) {
				// console.log(data.result[i].sub[j].title);
				html += '<li class="cont"><a href="#">';
				html += data.result[i].sub[j].title;
				html += '</a>';
				html += '<div class="tooltips" style="background:'+data.result[i].sub[j].color+'">';
				html += data.result[i].sub[j].icon;
				html += '<div style="background:' +data.result[i].sub[j].color+ '"></div>';
				html += '</div>';
				html += '</li>';
			} 
			html += '</ul>';
			$("#modal4").append(html);
		}
	},
	error: function (xhr, status, error) {
		console.log(xhr, status, error);
	}
});



$.ajax({
	url: "../json/cate05.json",
	type: "get",
	dataTape: "json",
	data: {},
	success: function (data) {
		var cnt = data.result.length;
		var style = 'style="width:' + (100 / cnt + '%') + ';"';
		var html;
		for (var i = 0; i < cnt; i++) {
			// console.log(data.result[i].main.title);
			html = '<ul ' + style + '>';
			html += '<li class="title"><a href="#">';
			html += data.result[i].main.title;
			html += '</a>';
			html += '<div class="tooltips" style="background:'+data.result[i].main.color+'">';
			html += data.result[i].main.icon;
			html += '<div style="background:' +data.result[i].main.color+ '"></div>';
			html += '</div>';
			html += '</li>';
			for (var j = 0; j < data.result[i].sub.length; j++) {
				// console.log(data.result[i].sub[j].title);
				html += '<li class="cont"><a href="#">';
				html += data.result[i].sub[j].title;
				html += '</a>';
				html += '<div class="tooltips" style="background:'+data.result[i].sub[j].color+'">';
				html += data.result[i].sub[j].icon;
				html += '<div style="background:' +data.result[i].sub[j].color+ '"></div>';
				html += '</div>';
				html += '</li>';
			} 
			html += '</ul>';
			$("#modal5").append(html);
		}
	},
	error: function (xhr, status, error) {
		console.log(xhr, status, error);
	}
});



