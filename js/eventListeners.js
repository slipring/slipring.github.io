
			Reveal.addEventListener( 'slidechanged', function( event ) {
			// event.previousSlide, event.currentSlide, event.indexh, event.indexv
			
				$('#narration').show();
				$('#toggler').removeClass('withborder');
			   	$('#notescroll').show();
			   	$('#wordhook').hide();
			   	$('#toggleme').addClass('icon-comment');

			   	var subsplash = event.currentSlide.querySelector(".firstsplash");
				if(subsplash) {
					document.getElementById('splashline').innerHTML = subsplash.innerHTML;
				};

				var notes = event.currentSlide.querySelector(".notes");
				if(notes) {
					console.info(notes.innerHTML.replace(/\n\s+/g,'\n'));
					$('#exemplar').vTicker('stop');
					document.getElementById('exemplar').innerHTML = notes.innerHTML;
					$('#exemplar').vTicker('init',
						{margin:10,speed: 3000,pause: 1500,showItems: 2,padding:4});
				};
				
				var headline = event.currentSlide.querySelector(".headline");
				if(headline) {
					document.getElementById('headliner').innerHTML = headline.innerHTML;
				};

				var currentcoord = event.currentSlide.querySelector(".coordinate");
				if(currentcoord) {
					document.getElementById('coord').innerHTML = currentcoord.innerHTML;
				};

				// var commentary = event.currentSlide.querySelector(".comments");
				// 	if(commentary) {
				// 	document.getElementById('commented').innerHTML = commentary.innerHTML;
				// 	}

			});


			Reveal.addEventListener( 'fragmentshown', function( event ) {
		 	   // event.fragment = the fragment DOM element
				console.log(event.fragment);
		    	console.log( 'fragment appear' );
				var subsplash = event.fragment.querySelector(".makesplash");
				if(subsplash) {
					document.getElementById('splashline').innerHTML = subsplash.innerHTML;
				};
				// var fragmeaning = event.fragment.querySelectorAll(".fragmeant");
				// 	if(fragmeaning) {
				// 	document.getElementById('headliner').innerHTML = fragmeaning.innerHTML;
				//};
			});

			Reveal.addEventListener( 'fragmenthidden', function( event ) {
		    	// event.fragment = the fragment DOM element
		    	console.log(event.fragment);
		    	console.log( 'fragment vanish' );
				});

				$( document ).on( 'click', function(event) {
					var detailed = event.target.getAttribute('details');
					if (detailed) {
						document.getElementById('eyeliner').innerHTML = detailed;
						console.log(detailed);
					};
			});

			// $( document ).on( 'click', function( event ) {
			//  console.log( event.type );    // The event type, eg. "click"
			//  console.log( event.which );   // The button or key that was pressed.
		 	// 	 console.log( event.target );  // The originating element.
		 	// 	 console.log( event.pageX );   // The document mouse X coordinate.
		 	// 	 console.log( event.pageY );   // The document mouse Y coordinate. 
			// });

			// var handleClick = function() {
			// 	 console.log( 'something was clicked' );
			// };

			// $( 'img' ).on( 'click', handleClick );
			// $( 'h2' ).on( 'click', handleClick );
		
			// var imgClick = function() {
			// 	document.getElementById('contented').innerHTML = $(this).attr('alt');
			// };



			/*	function changeImage(img) {
		 		   document.getElementById("img").src = img.src.replace(".gif", ".png");
				} */

			function argsToArray(args) {
		 		 var r = []; for (var i = 0; i < args.length; i++)
		    r.push(args[i]);
		 		 return r;
			}

			Reveal.addEventListener( 'slidechanged', function( event ) {
			    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
				// console.log(event.previousSlide);
				argsToArray(event.currentSlide.getElementsByClassName("sublet")).forEach(function(img) {
		  			img.src = img.src.split('jpg').join('gif');
				});

				argsToArray(event.previousSlide.getElementsByClassName("sublet")).forEach(function(img) {
		  			img.src = img.src.split('gif').join('jpg');
		  		}); 
			});



			/*	var dstate = event.currentSlide.querySelector(".data-state");
			if(dstate='fluid') {
			document.getElementById('loaderImage').style.backgroundImage='url('+dImageSrc+')';

			if(dstate='blackout') {
			document.getElementById('loaderImage').style.backgroundImage='url('+eImageSrc+')';
			}*/

			/*	Reveal.addEventListener( 'fluid', function() {
					console.log( '"fluid" has fired' );
					document.getElementById('loaderImage').style.backgroundImage='url('+dImageSrc+')';
				});

				Reveal.addEventListener( 'blackout', function() {
					console.log( '"blackout" has fired' );
					document.getElementById('loaderImage').style.backgroundImage='url('+eImageSrc+')';
				});

				Reveal.addEventListener( 'levels', function() {
					console.log( '"levels" has fired' );
					document.getElementById('loaderImage').style.backgroundImage='url('+cImageSrc+')';
				}); */

			/*	Reveal.addEventListener( 'freeze', function() {
					console.log( '"freeze" has fired' );
					document.getElementById('reflock').src='cursors/lock.png';
					document.getElementById('reflock').style.marginLeft="3px";
					document.getElementById('refeye').style.marginLeft="2px";
					document.getElementById('loaderImage').style.marginLeft="2px";
				} );

				Reveal.addEventListener( 'thaw', function() {
					console.log( '"thaw" has fired' );
					document.getElementById('reflock').src='cursors/unlock4d.png';
					document.getElementById('reflock').style.marginLeft="12px";
					document.getElementById('refeye').style.marginLeft="5px";
					document.getElementById('loaderImage').style.marginLeft="4px";

				} );*/
