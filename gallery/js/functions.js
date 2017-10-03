/* NAV BAR */
var navlinkanimated = 0;
function navstick(){
	//nav show
	var window_top = $(window).scrollTop();
	
	if(window_top > 0){ 
		$('#navbar-main').addClass('stick');
		$('#navbar-main').removeClass('z-depth-0');
		
		//links
		$('#navbar-main-logo').addClass('showlogo');
		$('.navbar-main-links').addClass('grey-text');
		$('.navbar-main-links').removeClass('white-text');
		
		//up down animation
		if(navlinkanimated == 0){
			$('#nav-links').addClass('go-up');
			setTimeout(function() {
				$('#nav-links').removeClass('go-up');
				$('#nav-links').removeClass('right');
				$('#nav-links').addClass('nav-center');
				navlinkanimated = 1;
			}, 500);
		}
		
	}
	else{
		$('#navbar-main').removeClass('stick');
		$('#navbar-main').addClass('z-depth-0');
		
		//links
		$('#navbar-main-logo').removeClass('showlogo');
		$('.navbar-main-links').addClass('white-text');
		$('.navbar-main-links').removeClass('grey-text');
		
		//up down animation
		navlinkanimated = 0;
		$('#nav-links').addClass('go-up');
		setTimeout(function() {
			$('#nav-links').removeClass('go-up');
			$('#nav-links').removeClass('nav-center');
			$('#nav-links').addClass('right');
		}, 500);
	}
}

function introshow(){
	var window_top = $(window).scrollTop();
	var div_top = $('#ss-second').offset().top;
	
	if(window_top > (div_top - 200)){
		$('#stack-intro').addClass('active');
	}
	else{
		$('#stack-intro').removeClass('active');
	}
}

function photoshow(){
	var window_top = $(window).scrollTop();
	var div_top = $('#ss-third').offset().top;
	
	if(window_top > (div_top - 200)){
		
		setTimeout(function() {
			$('.port-img-1').addClass('port-img-show');
			setTimeout(function() {
				$('.port-img-2').addClass('port-img-show');
				setTimeout(function() {
					$('.port-img-3').addClass('port-img-show');
					setTimeout(function() {
						$('.port-img-4').addClass('port-img-show');
						setTimeout(function() {
							$('.port-img-5').addClass('port-img-show');
							setTimeout(function() {
								$('.port-img-6').addClass('port-img-show');
								setTimeout(function() {
									$('.port-img-7').addClass('port-img-show');
									setTimeout(function() {
										$('.port-img-8').addClass('port-img-show');
										setTimeout(function() {
											$('.port-img-9').addClass('port-img-show');
										}, 200);
									}, 200);
								}, 200);
							}, 200);
						}, 200);
					}, 200);
				}, 200);
			}, 200);
		}, 0);
	}
	else{
		
	}
}

function navhide(){
	var window_top = $(window).scrollTop();
	var div_top = $('#ss-contact').offset().top;
	
	if(window_top > (div_top - 150)){
		$('#navbar-main').addClass('navhide');
		//$('#navbar-main').removeClass('stick');
		//alert('yay')
	}
	else{
		$('#navbar-main').removeClass('navhide');
		//$('#navbar-main').addClass('stick');
	}
}

$(function() { 
  $(window).scroll(navstick);
  $(window).scroll(introshow);
  $(window).scroll(photoshow);
  $(window).scroll(navhide);
});

$('#videos-container iframe').load(function() {
	$('#port-vid-preloader').addClass('port-vid-hide');

	$('#port-video1').removeClass('hide');
	$('#video-opener').addClass('port-vid-show');
	
	setTimeout(function() {

		$('#port-video1').removeClass('port-vid-hide');
		$('#port-video1').addClass('port-vid-show');
	}, 500);
});
	

var currentvideo = "video-opener-1";
$('#video-opener').click(function() {
	var clicked = event.target.id;
	
	if(clicked == 'video-opener-1' && currentvideo != clicked){
		
		//video opener add class active
		$('#video-opener-1').addClass('active');
		$('#video-opener-2').removeClass('active');
		$('#video-opener-3').removeClass('active');
		$('#video-opener-4').removeClass('active');
		
		$('#port-vid-preloader').addClass('port-vid-show');
			
		$('#port-video2').addClass('port-vid-hide');
		$('#port-video3').addClass('port-vid-hide');
		$('#port-video4').addClass('port-vid-hide');
		$('#port-video2').removeClass('port-vid-show');
		$('#port-video3').removeClass('port-vid-show');
		$('#port-video4').removeClass('port-vid-show');
		
		$('#port-video1').removeClass('hide');
		setTimeout(function() {
			
			$('#port-video2').addClass('hide');
			$('#port-video3').addClass('hide');
			$('#port-video4').addClass('hide');
		}, 500);
		
		setTimeout(function() {
			$('#port-vid-preloader').removeClass('port-vid-show');
			$('#port-vid-preloader').addClass('port-vid-hide');
		}, 500);
		
		setTimeout(function() {
			$('#port-video1').addClass('port-vid-show');
			$('#port-video1').removeClass('port-vid-hide');
		}, 700);
		
	}
	else if(clicked == 'video-opener-2' && currentvideo != clicked){
		
		//video opener add class active
		$('#video-opener-2').addClass('active');
		$('#video-opener-1').removeClass('active');
		$('#video-opener-3').removeClass('active');
		$('#video-opener-4').removeClass('active');
		
		$('#port-vid-preloader').addClass('port-vid-show');
			
		$('#port-video1').addClass('port-vid-hide');
		$('#port-video3').addClass('port-vid-hide');
		$('#port-video4').addClass('port-vid-hide');
		$('#port-video1').removeClass('port-vid-show');
		$('#port-video3').removeClass('port-vid-show');
		$('#port-video4').removeClass('port-vid-show');
		
		$('#port-video2').removeClass('hide');
		setTimeout(function() {
			$('#port-video1').addClass('hide');
			$('#port-video3').addClass('hide');
			$('#port-video4').addClass('hide');
		}, 500);
		
		setTimeout(function() {
			$('#port-vid-preloader').removeClass('port-vid-show');
			$('#port-vid-preloader').addClass('port-vid-hide');
		}, 500);
		
		setTimeout(function() {
			$('#port-video2').addClass('port-vid-show');
			$('#port-video2').removeClass('port-vid-hide');
		}, 700);
	}
	else if(clicked == 'video-opener-3' && currentvideo != clicked){
		
		//video opener add class active
		$('#video-opener-3').addClass('active');
		$('#video-opener-1').removeClass('active');
		$('#video-opener-2').removeClass('active');
		$('#video-opener-4').removeClass('active');
		
		$('#port-video3').removeClass('hide');
		setTimeout(function() {
			
			$('#port-video1').addClass('hide');
			$('#port-video2').addClass('hide');
			$('#port-video4').addClass('hide');
		}, 500);
		
		$('#port-vid-preloader').addClass('port-vid-show');
			
		$('#port-video1').addClass('port-vid-hide');
		$('#port-video2').addClass('port-vid-hide');
		$('#port-video4').addClass('port-vid-hide');
		$('#port-video1').removeClass('port-vid-show');
		$('#port-video2').removeClass('port-vid-show');
		$('#port-video4').removeClass('port-vid-show');
		
		setTimeout(function() {
			$('#port-vid-preloader').removeClass('port-vid-show');
			$('#port-vid-preloader').addClass('port-vid-hide');
		}, 500);
		
		setTimeout(function() {
			$('#port-video3').addClass('port-vid-show');
			$('#port-video3').removeClass('port-vid-hide');
		}, 700);
	}
	else if(clicked == 'video-opener-4' && currentvideo != clicked){
		
		//video opener add class active
		$('#video-opener-4').addClass('active');
		$('#video-opener-1').removeClass('active');
		$('#video-opener-2').removeClass('active');
		$('#video-opener-3').removeClass('active');
		
		$('#port-video4').removeClass('hide');
		setTimeout(function() {
			
			$('#port-video1').addClass('hide');
			$('#port-video2').addClass('hide');
			$('#port-video3').addClass('hide');
		}, 500);
		
		$('#port-vid-preloader').addClass('port-vid-show');
			
		$('#port-video1').addClass('port-vid-hide');
		$('#port-video2').addClass('port-vid-hide');
		$('#port-video3').addClass('port-vid-hide');
		$('#port-video1').removeClass('port-vid-show');
		$('#port-video2').removeClass('port-vid-show');
		$('#port-video3').removeClass('port-vid-show');
		
		setTimeout(function() {
			$('#port-vid-preloader').removeClass('port-vid-show');
			$('#port-vid-preloader').addClass('port-vid-hide');
		}, 500);
		
		setTimeout(function() {
			$('#port-video4').addClass('port-vid-show');
			$('#port-video4').removeClass('port-vid-hide');
		}, 700);
	}
	
	currentvideo = event.target.id;
});

$(document).ready(function(){
	$('.parallax').parallax();
	$('.scrollspy').scrollSpy( {
	  throttle : 0,
	  scrollOffset: 55
	} );

	$(".button-collapse").sideNav();
	$('.materialboxed').materialbox();
	$('.dropdown-button').dropdown({
	  inDuration: 150,
	  outDuration: 150,
	  constrainWidth: false, // Does not change width of dropdown to that of the activator
	  hover: false, // Activate on hover
	  gutter: 0, // Spacing from edge
	  belowOrigin: false, // Displays dropdown below the button
	  alignment: 'left', // Displays dropdown with edge aligned to the left of button
	  stopPropagation: true // Stops event propagation
	}
	);
	$('.slider').slider();
	$('.carousel').carousel();
});

/* HEADER */
jQuery(document).ready(function($){
 // Defining a function to set size for #hero 
    function fullscreen(){
        jQuery('#hero').css({
            width: jQuery(window).width(),
            height: jQuery(window).height()
        });
    }
  
    fullscreen();

  // Run the function in case of window resize
  jQuery(window).resize(function() {
       fullscreen();         
    });

});


