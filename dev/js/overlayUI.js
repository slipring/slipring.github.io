
$('.slide-number').click(function() {
		 Reveal.toggleOverview();
	});


$(function() {
    $( "#breadcrumbs" ).draggable();
    $( "#teapot" ).draggable();
  	});


$('#teapot').click(function() {
		 $("canvas[class='playback']").toggle()
		 $("aside[class='controls']").toggle()
	});
