/** jQuery Easing **/

jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

/** Validate Form **/

$(document).ready(function () {

    $('#register-form').validate({
		rules: {
			email: {
				required: true,
				email: true
			}
		},
		submitHandler: function (form) {
            $.ajax({
                dataType: 'html',
                type: 'post',
                url: 'mail.php',
                data: $(form).serialize(),
                success: function (responseData) {
                    $('#sentmessage').fadeIn(0);
                },
                error: function (responseData) {
                    console.log('Ajax request not recieved!');
                }
            });
            $('#email').val("");
            return false;
        }
    });

});

/** Mean Menu **/

$(document).ready(function() { jQuery('#menu').meanmenu(); });
$(function() { $("#menucont ul#fullmenucont > li:has(ul)").addClass('hasChild'); });
$(function() { $("#menucont ul#fullmenucont > li:has(ul) > a").append('<span class="fa fa-angle-down"></span>'); });
$(function() { $("#menucont ul#fullmenucont ul > li:has(ul) > a").append('<span class="fa fa-angle-right"></span>'); });

/** Countdown Timer **/

$(document).ready(function () {
	'use strict';
	$('[data-countdown]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
			$this.countdown(finalDate, function(event) {
			$this.html(event.strftime(
				'<div>%D<span>days</span></div>' + 
				'<div>%H<span>hours</span></div>' + 
				'<div>%M<span>minutes</span></div>' +
				'<div>%S<span>seconds</span></div>'
			));
		});
	});
});

/** Owl Carousel **/

$(document).ready(function() {
	'use strict';
	var owl = $('#testimomnials');
	owl.owlCarousel({
		margin: 0,
		responsiveClass: true,
		nav: false,
		dots: false,
		stagePadding: 0,
		autoWidth :false,
		autoHeight: true,
		autoplay: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		lazyLoad: false,
		loop: true,
		items: 1,
		responsive: {
			0: 		{ items: 1 },
			600: 	{ items: 1 },
			1000: 	{ items: 1 }
		},
		navText: ["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"],
	});
	$('.testi-next').click(function() { owl.trigger('next.owl.carousel', [300]); })
	$('.testi-prev').click(function() { owl.trigger('prev.owl.carousel', [300]); })
});

/** Owl Carousel **/

$(document).ready(function() {
	var owl = $('#ourteam');
	owl.owlCarousel({
		autoplay: false,
		autoplayTimeout: 6000,
		autoplayHoverPause: true,
		stagePadding: 0,
		margin: 25,
		nav: false,
		dots: false,
		loop: true,
		autoHeight: false,
		responsiveClass: true,
		responsive: {
			0: 		{ items: 1 },
			480: 	{ items: 2 },
			768: 	{ items: 3 },
			960: 	{ items: 2 }
		},
		navText: ["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"],
	});
	$('.team-next').click(function() { owl.trigger('next.owl.carousel', [300]); })
	$('.team-prev').click(function() { owl.trigger('prev.owl.carousel', [300]); })
});

/** Scroll Reveal JS **/

$(document).ready(function() {
	'use strict';
	window.sr= new scrollReveal ({
		reset: true,
		move: '0px',
		mobile: true
	});
});

/** Back to Top - Scroll **/

$(document).ready(function() {
	$('body').attr('id', 'top');
	$('a.scrolltop').bind('click',function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top }, 500,'easeInOutExpo');
		event.preventDefault();
	});
});

