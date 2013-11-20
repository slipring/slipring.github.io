


Reveal.addEventListener( 'slidechanged', function( event ) {
	// event.previousSlide, event.currentSlide, event.indexh, event.indexv
	MathJax.Hub.Rerender();  // prevent display errors in equation formatting
	var slID = event.currentSlide.id;
	$("#breadcrumbs>ul").prepend('<li><a href="#/'+(event.indexh)+'/'+(event.indexv)+'"><span class="tab">'+slID+'</span></a></li>');
	
	console.log("Slide: "+(event.indexh)+"-"+event.indexv+": #"+slID);
	console.log($(".slides section:nth-child("+(event.indexh)+") aside.notes").text());
} );

Reveal.addEventListener( 'fragmentshown', function( event ) {
	setTimeout(
   		function() {
			MathJax.Hub.Rerender(document.querySelector(".slides .present")) 
   		}, 100);   // prevent display errors in equation formatting
}  );