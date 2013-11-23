
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
	// // $( "canvas[class='playback']" ).draggable();
	// $( "#controlpad" ).draggable();
 	// $( "#eraser" ).draggable(); 
	// $( "#patchwork" ).draggable();
	// $( "#eyesight" ).draggable();
	// $( "#contextclue" ).draggable();
	// $( "#ofcourse" ).draggable();
	// $( "#retarget" ).draggable();
	// $( "#desplash" ).draggable();
	// $( "#chatsoff" ).draggable();
	// $( "#defile" ).draggable();
	// $( "#offofflink" ).draggable();
	// $( "#poolup" ).draggable();
	// $( "#primemover" ).draggable();
	// $( "#subprimemover" ).draggable();
});


$('#coursing').hover(
       function(){ $(this).addClass('fa-spin') },
       function(){ $(this).removeClass('fa-spin') }
)

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
	  	of: "canvas[class='playback']"
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

	$( "#pooldeck" ).position({
	 	my: "left center",
	  	at: "right center",
	  	of: "#poolup"
	});

}


setUIpositions();

$( window ).resize(function() {
	setUIpositions();
});



$(function() {
    $( "#slider" ).slider();
	});
