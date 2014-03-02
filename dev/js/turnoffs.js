$( document ).on( 'click', function( event ) {
    console.log( event.which + " " + event.type + " @ " + event.pageX + ", " + event.pageY);    // The document mouse X,Y coordinates : The event type, eg. "click" ! the button or key that was pressed.
    console.log( event.target );  // The originating element.
    setUIpositions();
    });





// // Get a handle to our canvas
// var ctx = document.getElementById('overlay').getContext("2d");

// // Choose font
// ctx.font = "Bold 36px 'Helvetica'";

// // Draw black rectangle
// ctx.fillStyle = "blue"; 
// ctx.fillRect(0,0,360,70); 

// // Punch out the text!
// ctx.globalCompositeOperation = 'destination-out'; 
// ctx.fillText("WEATHER in a TANK", 20, 50);

// <!-- <canvas id="overlay" width="500" height="70" style=""></canvas> -->






	// $( "#defile" ).position({
	//   	my: "left bottom",
	//   	at: "left bottom",
	//   	of: "aside[class='controls']"
	// });

	// $( "#offofflink" ).position({
	//   	my: "left bottom",
	//   	at: "left top",
	//   	of: "aside[class='controls']"
	// });

	// $( "#pooldeck" ).position({
	//  	my: "left center",
	//   	at: "right center",
	//   	of: "#poolup"
	// });



// function compensation() {
// 				setTimeout( function() {
// 				zoomCurrent = $('.slides').css('zoom');
// 				reciprCurrent = 1 / zoomCurrent;
// 				console.log(zoomCurrent + " / " +reciprCurrent);
// 				$('.slides .present .ui-jqchart').css('zoom', reciprCurrent);},
// 				300);
// 			} 
// 			compensation();
// 			$( window ).resize(function() {
// 				compensation();
// 			});