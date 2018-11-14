/* 
function pomulsun(x){alert(x*x);}
var x = prompt("원하는 수를 입력하세요.");
pomulsun(x); 

alt+shift+a = 전체주석 단축키
*/


/*
제이쿼리 적용하기 : $("선택자 이름")

변수 n 선언하여 0을 적용
swap이라는 함수를 적용{
	 #mains > li를 css의 z-index를 9로 만듦
	 #mains > li 중에 0번째의 css z-index를 10으로 만듦
	 만약 n이 2라면 0을 적용하고 
	 그것이 아니라면 n에 1를 더함
}
*/
var n = 0;

function swap() {
	$("#mains > li").css("z-index", 9);
	$("#mains > li").eq(n).css("z-index", 10);
	if (n == 2) n = 0;
	else n++;
	/* 	
	  위와 같음
	  if(n == 0){	n=1;}        만약 n이 0이라면 1을 적용
		else if(n == 1){	n=2;}    만약 n이 1이라면 2를 적용
		else if(n == 2){	n=0;}    만약 n이 2라면 0을 적용 

		※ if를 중첩할 때는 else를 넣는다.
	*/
}

setInterval(swap, 2000); /*swap이라는 함수를 2000=2초마다 실행*/

/* 
	#navs의 last-child에 
	호버했을 때 이벤트(){.more_cont를 보여라}
	호버하지 않을 때 이벤트(){.more_cont를 숨겨라}


$("#navs > :last-child").hover(
	function(){$(".more_cont").show();},
	function(){$(".more_cont").hide();}
	);
*/


/*
  #navs의 last-child에 
	호버했을 때 이벤트(){.more_cont를 0.2초?의 속도로 아래로 내려라}
	호버하지 않을 때 이벤트(){.more_cont를 0.2초?의 속도로 위로 올려라}
*/
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

/*
var homes = new Array();
var homes = [];
homes[0] = "홍길동";
homes[1] = "홍길순";
homes[0][0] = "홍길동"
homes[0][1] = 29S
*/

/*
var str;
var sites = [];
for(var i=1; i<11; i++) {
	sites[i] = [];
	sites[i][0] = "../img/main/site"+i+".png";
	sites[i][1] = "Demo Default";
	sites[i][2] = "Demo Decor";
	sites[i][3] = "Demo Retail";
	sites[i][4] = "Demo Books";
	sites[i][5] = "Demo Fashion Color";
	sites[i][6] = "Demo Lingerie";
	sites[i][7] = "Demo Handmade";
	sites[i][8] = "Demo Fashion";
	sites[i][9] = "Demo Fashion Flat";
	sites[i][10] = "Demo Electronics";
}
for(var i=1; i<sites.length; i++) {
	str = '<li>';
	str += '<div><img src="'+sites[i][0]+'" class="img"</div>';
	str += '<div>'+sites[i][i]+'</div>';
	str += '</li>';
	$(".home").append(str);
}
*/

function modalMake1() {
	var html = '';
	var sites = [];
	for (var i = 1; i < 11; i++) {
		sites[i] = [];
		sites[i][2] = 'https://naver.com';
		sites[i][0] = '<li><img src="../img/snow/site/site' + i + '.png" class="img" onclick="goUrl(\'' + sites[i][2] + '\');"></li>';
	}
	/*
	sites[1][1] = '<li>Demo Default</li>';
	sites[2][1] = '<li>Demo Decor</li>';
	sites[3][1] = '<li>Demo Retail</li>';
	sites[4][1] = '<li>Demo Books</li>';
	sites[5][1] = '<li>Demo Fashion Color</li>';
	sites[6][1] = '<li>Demo Lingerie</li>';
	sites[7][1] = '<li>Demo Handmade</li>';
	sites[8][1] = '<li>Demo Fashion</li>';
	sites[9][1] = '<li>Demo Fashion Flat</li>';
	sites[10][1] = '<li>Demo Electronics</li>';
  */
	sites[1][1] = '<li> IXNINE</li>';
	sites[2][1] = '<li> ROME</li>';
	sites[3][1] = '<li> HRTM</li>';
	sites[4][1] = '<li> UNCIA</li>';
	sites[5][1] = '<li> SNOWP</li>';
	sites[6][1] = '<li> HELLOW GLOVES</li>';
	sites[7][1] = '<li> SQUAD</li>';
	sites[8][1] = '<li> NNN</li>';
	sites[9][1] = '<li> ASHBURY</li>';
	sites[10][1] = '<li> HOLA</li>';

	for (i = 1; i < sites.length; i++) {
		html = '<ul>' + sites[i][0] + sites[i][1] + '</ul>'
		$("#modal1").append(html);
	}

}
modalMake1();

function goUrl(url) {
	location.href = url;
}

/*** cates modal***/

var cates = [{
	main: {
		title: "SHOP PAGES",
		icon: "",
		linl: "#"
	},
	sub: [{
		title: "Filters area",
		icon: "",
		link: "#"
	}, {
		title: "Hidden sidebar",
		icon: "HOT",
		color: "green",
		link: "#"
	}, {
		title: "No page heading",
		icon: "",
		link: "#"
	}, {
		title: "Small categories menu",
		icon: "",
		link: "#"
	}, {
		title: "Masonry grid",
		icon: "",
		link: "#"
	}, {
		title: "Products list view",
		icon: "",
		link: "#"
	}, {
		title: "With background",
		icon: "",
		link: "#"
	}, {
		title: "Category description",
		icon: "",
		link: "#"
	}, {
		title: "Only categories",
		icon: "",
		link: "#"
	}, {
		title: "Header overlap",
		icon: "",
		link: "#"
	}, {
		title: "Default shop",
		icon: "",
		link: "#"
	}]
}, {
	main: {
		title: "PRODUCT HOVERS",
		icon: "EFFECTS",
		color: "hotpink",
		linl: "#"
	},
	sub: [{
		title: "Summary on hover",
		icon: "",
		link: "#"
	}, {
		title: "Icons on hover",
		icon: "",
		link: "#"
	}, {
		title: "Icons & Add to cart",
		icon: "",
		link: "#"
	}, {
		title: "Full info on image",
		icon: "",
		link: "#"
	}, {
		title: "All info on hover",
		icon: "",
		link: "#"
	}, {
		title: "Button on image",
		icon: "",
		link: "#"
	}, {
		title: "Standard button",
		icon: "",
		link: "#"
	}, {
		title: "Quick shop",
		icon: "",
		link: "#"
	}, {
		title: "Tiled hover",
		icon: "",
		link: "#"
	}, {
		title: "Categories hover #1",
		icon: "",
		link: "#"
	}, {
		title: "Categories hover #2",
		icon: "",
		link: "#"
	}]
}, {
	main: {
		title: "PRODUCT PAGES",
		icon: "UNLIMITED",
		color: "red",
		linl: "#"
	},
	sub: [{
		title: "Default",
		icon: "",
		link: "#"
	}, {
		title: "Centered",
		icon: "",
		link: "#"
	}, {
		title: "Sticky description",
		icon: "",
		link: "#"
	}, {
		title: "With shadow",
		icon: "",
		link: "#"
	}, {
		title: "With background",
		icon: "",
		link: "#"
	}, {
		title: "Accordion tabs",
		icon: "NEW",
		color: "orange",
		link: "#"
	}, {
		title: "Accordion in content",
		icon: "",
		link: "#"
	}, {
		title: "Sticky add to cart",
		icon: "",
		link: "#"
	}, {
		title: "With sidebar",
		icon: "",
		link: "#"
	}, {
		title: "Extra content #1",
		icon: "",
		link: "#"
	}, {
		title: "Extra content #2",
		icon: "",
		link: "#"
	}]
}, {
	main: {
		title: "PRODUCT IMAGES",
		icon: "",
		linl: "#"
	},
	sub: [{
		title: "Thumbnails left",
		icon: "",
		link: "#"
	}, {
		title: "Thumbnails bottom",
		icon: "",
		link: "#"
	}, {
		title: "Sticky images",
		icon: "",
		link: "#"
	}, {
		title: "One column",
		icon: "",
		link: "#"
	}, {
		title: "Two columns",
		icon: "",
		link: "#"
	}, {
		title: "Combined grid",
		icon: "",
		link: "#"
	}, {
		title: "Images full-width",
		icon: "",
		link: "#"
	}, {
		title: "Zoom image",
		icon: "",
		link: "#"
	}, {
		title: "Images size - small",
		icon: "",
		link: "#"
	}, {
		title: "Images size - large",
		icon: "",
		link: "#"
	}, {
		title: "Without thumbnails",
		icon: "",
		link: "#"
	}]
}, {
	main: {
		title: "WOOCOMMERCE",
		icon: "",
		linl: "#"
	},
	sub: [{
		title: "Simple product",
		icon: "",
		link: "#"
	}, {
		title: "Variable product",
		icon: "",
		link: "#"
	}, {
		title: "External product",
		icon: "",
		link: "#"
	}, {
		title: "Grouped product",
		icon: "",
		link: "#"
	}, {
		title: "Shopping Cart",
		icon: "",
		link: "#"
	}, {
		title: "Checkout",
		icon: "",
		link: "#"
	}, {
		title: "My account",
		icon: "",
		link: "#"
	}, {
		title: "Wishlist",
		icon: "",
		link: "#"
	}, {
		title: "Track order",
		icon: "",
		link: "#"
	}, {
		title: "Custom 404 page #1",
		icon: "",
		link: "#"
	}, {
		title: "Custom 404 page #2",
		icon: "",
		link: "#"
	}]
}, {
	main: {
		title: "FEATURES",
		icon: "BEST",
		color: "blue",
		linl: "#"
	},
	sub: [{
		title: "360° product viewer",
		icon: "",
		link: "#"
	}, {
		title: "With video",
		icon: "",
		link: "#"
	}, {
		title: "With instagram",
		icon: "",
		link: "#"
	}, {
		title: "With countdown timer",
		icon: "",
		link: "#"
	}, {
		title: "Product presentation",
		icon: "",
		link: "#"
	}, {
		title: "Variations swatches",
		icon: "",
		link: "#"
	}, {
		title: "Infinit scrolling",
		icon: "NEW",
		color: "red",
		link: "#"
	}, {
		title: "Load more button",
		icon: "",
		link: "#"
	}, {
		title: "Catalog mode",
		icon: "",
		link: "#"
	}, {
		title: "Cookies law info",
		icon: "",
		link: "#"
	}, {
		title: "Parallax scrolling",
		icon: "",
		link: "#"
	}]
}];

function modalMake2() {
	var html = "";
	var wid = 100 / cates.length + "%";
	for (var i = 0; i < cates.length; i++) {
		html = '<ul style="width:' + wid + '">';
		html += '<li class="title"><a href="' + cates[i].main.link + '">' + cates[i].main.title + '</a>';
		if (cates[i].main.icon != "") {
			html += '<div class="tooltips" style="background:'+cates[i].main.color+'">';
			html += cates[i].main.icon;
			html += '<div style="background:'+cates[i].main.color+'"></div>';
			html += '</div>';
		
		}
		html += '</li>';
		for (var j = 0; j < cates[i].sub.length; j++) {
			html += '<li class="cont"><a href="' + cates[i].sub[j].link + '">' + cates[i].sub[j].title + '</a>';
			if (cates[i].sub[j].icon != "") {
				html += '<div class="tooltips" style="background:'+cates[i].sub[j].color+'">';
				html += cates[i].sub[j].icon; 
				html += '<div style="background:' +cates[i].sub[j].color+ '"></div>';
				html += '</div>';
				
			}
			html += '</li>';
		}
		html += '</ul>';
		$("#modal2").append(html);
	}
	$("#modal2 .tooltips").each(function(){
		var n = $(this).prev().html().length;
		$(this).css({"left": n*4+"px"});
	});
	}
modalMake2();




var blogs = [{
	main: {
		title: "BLOG TYPES",
		icon: "",
		link: ""
	},
	sub: [{
		title: "Alternative",
		icon: "",
		link: ""
	}, {
		title: "Small images",
		icon: "",
		link: ""
	}, {
		title: "Blog chess",
		icon: "",
		link: ""
	}, {
		title: "Masonry grid",
		icon: "",
		link: ""
	}, {
		title: "Infinit scrolling",
		icon: "FEATURE",
		color: "hotpink",
		link: ""
	}, {
		title: "With background",
		icon: "",
		link: ""
	}, {
		title: "Blog flat",
		icon: "",
		link: ""
	}, {
		title: "Default flat",
		icon: "",
		link: ""
	}, {
		title: "Blog mask",
		icon: "NEW",
		color: "red",
		link: ""
	}]
},{
	main: {
		title: "SINGLE POSTS",
		icon: "EXAMPLES",
		color: "blue",
		link: ""
	},
	sub: [{
		title: "Post example #1",
		icon: "",
		link: ""
	},{
		title: "Post example #1",
		icon: "",
		link: ""
	},{
		title: "Post example #1",
		icon: "",
		link: ""
	},{
		title: "Post example #1",
		icon: "",
		link: ""
	},{
		title: "Post example #1",
		icon: "",
		link: ""
	},{
		title: "Post example #1",
		icon: "",
		link: ""
	},{
		title: "Post example #1",
		icon: "",
		link: ""
	},{
		title: "Post example #1",
		icon: "",
		link: ""
	},{
		title: "Post example #1",
		icon: "",
		link: ""
	}]
}];

var blogss = [{
	main:{
		title:"RECENT POSTS",
		icon:"",
		link:""
	},
	sub:[{
		img:"55732_a_180.jpg",
		txt1:"A companion for extra sleeping",
		txt2:"July 23, 2016",
		txt3:"1 Comment"
	},{
		img:"64328_a_180.jpg",
		txt1:"Outdoor seating collection inspiration",
		txt2:"July 23, 2016",
		txt3:"1 Comment"
	},{
		img:"64329_a_180.jpg",
		txt1:"Modular seating and table system",
		txt2:"July 23, 2016",
		txt3:"no Comment"
	}]
}]

function modalMake3() {
	var html = "";
	var wid = 60 / blogs.length + "%";
	for (var i = 0; i < blogs.length; i++) {
		html = '<ul style="width:' + wid + '">';
		html += '<li class="title"><a href="' + blogs[i].main.link + '">' + blogs[i].main.title + '</a>';
		if (blogs[i].main.icon != "") {
			html += '<div class="tooltips" style="background:'+blogs[i].main.color+'">';
			html += blogs[i].main.icon;
			html += '<div style="background:'+blogs[i].main.color+'"></div>';
			html += '</div>';
		}
		html += '</li>';

	  html = '<ul class="title" style="width":"40%">';
		html += '<li><a href="#">';
		html += blogss[i].main.title;
		html += '</a></li></ul>';

		for (var j = 0; j < blogs[i].sub.length; j++) {
			html += '<li class="cont"><a href="' + blogs[i].sub[j].link + '">' + blogs[i].sub[j].title + '</a>';
			if (blogs[i].sub[j].icon != "") {
				html += '<div class="tooltips" style="background:'+blogs[i].sub[j].color+'">';
				html += blogs[i].sub[j].icon; 
				html += '<div style="background:' +blogs[i].sub[j].color+ '"></div>';
				html += '</div>';
			}
			html += '</li>';
		}
		html += '</ul>';

		$("#modal3").append(html);
	}
	/*$("#modal2 .tooltips").each(function(){
		var n = $(this).prev().html().length;
		$(this).css({"left": n*4+"px"});
	});*/
	}
modalMake3();