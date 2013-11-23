$( document ).on( 'click', function( event ) {
    console.log( event.which + " " + event.type + " @ " + event.pageX + ", " + event.pageY);    // The document mouse X,Y coordinates : The event type, eg. "click" ! the button or key that was pressed.
    console.log( event.target );  // The originating element.
    setUIpositions();
    });





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