
(function () {
	$(".lazy-load").on("mouseover", function () {
		var img = $(this),
			src = img.attr("src");
		img.attr("src", src.replace(/...$/, "gif")).data("src", src);
		}).on("mouseout", function () {
		$(this).attr("src", $(this).data("src"));
	});
})();


$('.slide-number').click(function() {
	Reveal.toggleOverview();
	});

$(function() {
	$( ".indicator" ).draggable();
	$( "#slipstream" ).draggable().resizable();
	// $( "canvas[class='playback']" ).draggable();
});

$('.spin-up').hover(
       function(){ $(this).addClass('fa-spin') },
       function(){ $(this).removeClass('fa-spin') }
);

$('.spin-up-ccw').hover(
       function(){ $(this).addClass('fa-spin-ccw') },
       function(){ $(this).removeClass('fa-spin-ccw') }
);

$('#controlpad').click(function() {
	$( "canvas[class='playback']" ).toggle();
	$( "aside[class='controls']" ).toggle();
	});

$('#eraser').click(function() {
	$( "#overlayUI" ).toggle();
	});

$('#desplash').click(function() {
	$( "#splashline" ).toggle();
	});

$('#retarget').click(function() {
	$( "#targetline" ).toggle();
	});



function setUIpositions( ) {

	$( "#defrag" ).position({
	  	my: "left center",
	  	at: "right center",
	  	// of: "canvas[class='playback']"
	  	of: "#crosshair"
	});

	$( "#desplash" ).position({
	 	my: "left center",
	  	at: "right center",
	  	of: "#defrag"
	});

	$( "#splashline" ).position({
	 	my: "left center",
	  	at: "right center",
	  	of: "#desplash"
	});

	$( "#retarget" ).position({
	  	my: "center bottom",
	  	at: "center top",
	  	of: "#defrag"
	});

	$( "#targetline" ).position({
	  	my: "left center",
	  	at: "right center",
	  	of: "#retarget"
	});

	$( "#crosshair" ).position({
	  	my: "left top",
	  	at: "left top",
	  	of: ".reveal"
	});

	$( "#ofcourse" ).position({
	  	my: "left top",
	  	at: "left top",
	  	of: "#crosshair"
	});

	$( "#contextclue" ).position({
	  	my: "left bottom",
	  	at: "left bottom",
	  	of: "#crosshair"
	});

	// $( "#pooldeck" ).position({
	//  	my: "left center",
	//   	at: "right center",
	//   	of: "#poolup"
	// });
}



setUIpositions();



$( window ).resize(function() {
	setUIpositions();
});


$(function() {
    $( "#slider" ).slider();
	});
