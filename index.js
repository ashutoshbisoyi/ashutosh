$("#showHide-doRow-div").hide();
$("#showHide-doRow-btn").on('click', function(event) {
	$("#showHide-doRow-div").slideToggle();
	var value=$("#showHide-doRow-btn").html();
	if (value==="↓ More") {
		$("#showHide-doRow-btn").html("↑ Less");
	}
	else{
		$("#showHide-doRow-btn").html("↓ More");
	}
		
});
$("#mobile-showHide-btn2").hide();

// ---------------Less Button-----------------
$("#mobile-showHide-btn2").on('click', function(event) {
	var value=$("#mobile-showHide-btn1").html();
	if (value==="↓ 4 More") {
		$(".6more").slideUp();
		$("#mobile-showHide-btn1").html("↓ 6 More");
		$("#mobile-showHide-btn2").fadeOut();
	}
	else if(value==="↓ 2 More"){
		$(".4more").slideUp();
		$("#mobile-showHide-btn1").html("↓ 4 More");
	}
	else if(value==="No More"){
		$(".2more").slideUp();
		$("#mobile-showHide-btn1").html("↓ 2 More");
	}

});
// --------------------More Button----------------
$("#mobile-showHide-btn1").on('click', function(event) {
	var value=$("#mobile-showHide-btn1").html();
	
	if (value==="↓ 6 More") {
		$(".6more").slideDown();
		$("#mobile-showHide-btn1").html("↓ 4 More");
		$("#mobile-showHide-btn2").fadeIn();
	}
	else if (value==="↓ 4 More"){
		$(".4more").slideDown();
		$("#mobile-showHide-btn1").html("↓ 2 More");
	}
	else if (value==="↓ 2 More"){
		$(".2more").slideDown();
		$("#mobile-showHide-btn1").html("No More");
	}

});

// -----------------------Window Size-----------------------
$(document).ready(function () {
    $(window).on("resize", function (e) {
        checkScreenSize();
    });

    checkScreenSize();

    function checkScreenSize(){
        var newWindowWidth = $(window).width();
        if (newWindowWidth < 800) {
            $(".mobile-showHide-div").hide();
        }
        else
        {
            $(".mobile-showHide-div").show();
        }
    }
});