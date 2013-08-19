$(document).ready(function(){
	$("#header").localScroll();
	$("#circle_nav").localScroll();
	window.location.replace("#home");
	$(window).scrollTop(0);
	if($(window).width() <= 840) {
			if($("#home").hasClass("inview")) {
				$("#home").css({"background-position":"0 " + 70 + "px" });
				$("#home").css({"background-size": "840px auto"});
			}
	}

	$("#home, #about, #services, #our_work, #testimonials").bind("inview", function (event, visible) {
			if (visible == true) {
				$(this).addClass("inview");
			} else {
				$(this).removeClass("inview");
			}
	});

	$(window).bind('scroll', function(){
	    var position = $(window).scrollTop();
		if($("#home").hasClass("inview")) {
			if($(window).width() > 840) {
				$("#home").css({"background-position":"50% " + (70 - (position * 0.25)) + "px" });
			}
		}
		if($("#about").hasClass("inview")) {
			if($(window).width() > 840) {
				$("#about").css({"background-position":"50% " + (240 - (position * 0.25)) + "px" });
			}
		}
		if($("#services").hasClass("inview")) {
			if($(window).width() > 840) {
				$("#services").css({"background-position":"50% " + (410 - (position * 0.25)) + "px" });
			}
		}
		if($("#our_work").hasClass("inview")) {
			if($(window).width() > 840) {
				$("#our_work").css({"background-position":"50% " + (580 - (position * 0.25)) + "px" });
			}
		}
		if($("#testimonials").hasClass("inview")) {
			if($(window).width() > 840) {
				$("#testimonials").css({"background-position":"50% " + (940 - (position * 0.25)) + "px" });
			}
		}
	});

	$(window).resize(function(){
		if($(window).width() <= 840) {
			if($("#home").hasClass("inview")) {
				$("#home").css({"background-position":"0 " + 70 + "px" });
				$("#home").css({"background-size": "840px auto"});
			}
		} else {
			if($("#home").hasClass("inview")) {
				$("#home").css({"background-position":"50% " + (70 - ($(window).scrollTop() * 0.25)) + "px" });
				$("#home").css({"background-size": "100% auto"});
			}
		}
	});
	//if($("#testimonials").hasClass("inview")) {
		$(".names").click(function(){
			$(".names").css({"background-color": "transparent"});
			$(this).css({"background-color": "#E49F28"});
			$(".words").hide();
		});
		$("#rakesh").click(function(){
			$("#rakesh_words").fadeIn();
		});
		$("#munira").click(function(){
			$("#munira_words").fadeIn();
		});
		$("#nick").click(function(){
			$("#nick_words").fadeIn();
		});
		$("#anand").click(function(){
			$("#anand_words").fadeIn();
		});
		
	//}
});

//$(window).load(function() {
//    $('#slider').nivoSlider();
//});

$(document).keydown(function (e) {
	if(e.keyCode == 37) {
		e.preventDefault();
		$('a.nivo-prevNav').click();
    }
	else if(e.keyCode == 39) {
		e.preventDefault();
		$('a.nivo-nextNav').click();
	}
});


