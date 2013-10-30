
			$('#wholeview').click(function() {
		   		 Reveal.toggleOverview();
		   		 $('#Oview').toggleClass('icon-zoom-out')
		   		 $('#Oview').toggleClass('icon-zoom-in')
				});

			$('#coordinates').click(function() {	
				// if( $('#headlineup').css("display") == 'none' ){
				// 	$('#headlineup').show();
				// 	}
				// else{
				// 	};
				$('#uppers').toggle();
				$('#expandering').toggleClass('icon-circle-arrow-left');
				$('#expandering').toggleClass('icon-circle-arrow-right');
				$('#expandering').toggleClass('icon-white');
				$('#coordinates').toggleClass('glowering');	
				$('#coordinates').toggleClass('shadowing');			
				// $('#offputter').css('left','39px');
			});

			$('#headlineup').click(function() {
				$('#splashup').toggle();
				$('#headliner').toggleClass('text-hollow');
				$('#headliner').toggleClass('text-full');
			});

			$('#eyelet').click(function() {
				$('#eyelineup').toggle();
				$('#eyecon').toggleClass('icon-white');
				$('#eyelet').toggleClass('eyelight');
				$('#eyelet').toggleClass('eyeshadow');
			});

			$('#toggler').click(function() {
		   		$('#toggler').toggleClass('withborder');
		   		$('#narration').toggle();
		   		$('#notescroll').toggle();
		   		$('#wordhook').toggle();
		   		$('#toggleme').toggleClass('icon-comment');
		   		 // $('#contented').toggle();
		   		 // $('#wordless').toggle();
		 		 // $('#exemplar').vTicker('stop');
				 // document.getElementById('exemplar').innerHTML = notes.innerHTML;
				 // $('#exemplar').vTicker('init',{margin:10,speed: 3000,pause: 1500,showItems: 2,padding:4});
		  	});

			$('#editmess').click(function() {
				$('#editmess').hide();
				document.getElementById('contented').setAttribute('contenteditable','true');
				document.getElementById('splashline').setAttribute('contenteditable','true');
				document.getElementById('headliner').setAttribute('contenteditable','true');
			});

			$('#wordless').click(function() {
				document.getElementById('narration').style.display='none';
	   		    $('#toggler').addClass('withborder');
	   		    $('#wordhook').toggle();$('#notescroll').toggle();
	   		    $('#toggleme').toggleClass('icon-comment');				
			});

			
		
		<!--	// $('#toggleme2').click(function() {
		 //   		 // $('#contented').toggle();
		 //   		  $('#narration').show();
		 //   		  $('#notebook').toggleClass('hidden');
		 //   		  // $('#notebook').toggle();

		 //   		  // $('#toggler').toggleClass('withborder');
		   		  
		 //  			});

		 // $('#toggleme3').click(function() {
		 //   		 // $('#contented').toggle();
		 //   		  $('#narration').show();
		 //   		  // $('#notebook').toggle();
		 //   		  $('#notebook').removeClass('hidden');
		 //   		  $('#notebook').toggleClass('squashed');
		 //   		  // $('#toggler').toggleClass('withborder');
		   		  
		 //  			});
        -->