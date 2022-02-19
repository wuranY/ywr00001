// make function



// run code




// document ready

$(function(){

	for(i=0;i<10;i++) {
	$(".portfolio-single-project").eq(i).find("img").attr("src","image/project"+i+".jpg");
	}

	// for(i=1;i<15;i++) {
	// $(".single-project-image-lumie").eq(i).attr("src","image/lumie/lumie"+i+".jpeg");
	// }

	// for(i=1;i<15;i++) {
	// $(".single-project-image-yelp").eq(i).attr("src","image/yelp/yelp."+i+".jpeg");
	// }

	// for(i=1;i<21;i++) {
	// $(".single-project-image-graffiti").eq(i).attr("src","image/graffiti/graffiti_food"+i+".jpeg");
	// }

	// for(i=1;i<21;i++) {
	// $(".single-project-image-photography").eq(i).attr("src","image/photography/photography"+i+".jpg");
	// }


	var iScrollPos = 0;
	$("header").css("position","fixed");

	$(window).scroll(function () {
	    var iCurScrollPos = $(this).scrollTop();
	    if (iCurScrollPos > iScrollPos) {
	    	var scrollPosition = $(window).scrollTop();
	    	if(scrollPosition > 85) {
				$("header").css({"transform":"translateY(-100px)","transition":"0.3s"});
	    	}

	    } else {
    		var scrollPosition = $(window).scrollTop();
	    	if(scrollPosition > 85) {
				$("header").css({"transform":"translateY(0)","transition":"0.3s"});
	    	}
		}
	    iScrollPos = iCurScrollPos;
	});





})