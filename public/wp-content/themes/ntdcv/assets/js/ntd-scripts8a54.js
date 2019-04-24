/*
*   Author: beshleyua
*   Author URL: http://themeforest.net/user/beshleyua
*/

( function( $ ) {
	'use strict';
	
	/*
		Vars
	*/
	
	var width = $(window).width();
	var height = $(window).height();
	
	var header_offset_top = 15;

	if(width <= 540) {
		header_offset_top = 136;
	}
	
	/*
		Header Menu Desktop
	*/
	
	var container = $('.container');
	var card_items = $('.card-inner');
	var animation_in = container.data('animation-in');
	var animation_out = container.data('animation-out');
	var menu_items = $('.top-menu li');

	/*
		Preloader
	*/

	$(window).on("load", function() {
		var preload = $('.preloader');
		preload.find('.spinner').fadeOut(function(){
			preload.fadeOut(function(){
				
			});
		});
	});

	/*clear home hash*/

	if( $('.top-menu-onepage').length ) {

		$('.top-menu').on('click', 'a', function(){

			/* vars */
			var width = $(window).width();
			var id = $(this).attr('href');
			if(id=='') id = '#home';
			var card_item = $('#card-'+id.replace('#', ''));
			var h = parseFloat(card_item.offset().top);
			var menu_item = $(this).closest('li');

			if(id != '#home') {
				window.location.hash = id;
			} else {
				history.replaceState(null, null, ' ');
			}

			if( width >= 1240 ) {
				/* if desktop */
				if(!menu_item.hasClass('current-menu-item')) {
					/* close card items */
					menu_items.removeClass('current-menu-item');
					container.find(card_items).removeClass('animated '+animation_in);

					if($(container).hasClass('opened')) {
						container.find(card_items).addClass('animated '+animation_out);
					}

					/* open card item */
					menu_item.addClass('current-menu-item');
					container.addClass('opened');
					container.find(card_item).removeClass('animated '+animation_out);
					container.find(card_item).addClass('animated '+animation_in);
					
					$(card_items).addClass('hidden');
					
					$(card_item).removeClass('hidden');
					$(card_item).addClass('active');
				}
			}
			/* if mobile */
			if( width < 1240 ) {
				/* scroll to section */
				$('body,html').animate({
					scrollTop: h - header_offset_top
				}, 800);
			}
			return false;
		});
	}
	
	$(window).on('resize', function(){
		var width = $(window).width();
		var height = $(window).height();

		if((width < 1240)) {
			$('.card-inner').removeClass('hidden');
			$('.card-inner').removeClass('fadeOutLeft');
			$('.card-inner').removeClass('rotateOutUpLeft');
			$('.card-inner').removeClass('rollOut');
			$('.card-inner').removeClass('jackOutTheBox');
			$('.card-inner').removeClass('fadeOut');
			$('.card-inner').removeClass('fadeOutUp');
			$('.card-inner').removeClass('animated');
		}
		else {
			var current_id = $('.top-menu li.current-menu-item a').attr('href');
			$('#card-'+current_id.replace('#', '')).addClass('current-menu-item');
			$('.card-inner .card-wrap').slimScroll({
				height: '100%'
			});
		}
	});

	/* One Page Mode */
	var url_hash = location.hash;
	var sectionElem = $('#card-'+url_hash.replace('#', ''));
	if(sectionElem.length && $('.top-menu-onepage').length){
		menu_items.removeClass('current-menu-item');
		$('.top-menu li a[href="'+url_hash+'"]').parent('li').addClass('current-menu-item');

		if(width >= 1240) {
			container.find(card_items).removeClass('animated '+animation_in);
			if($(container).hasClass('opened')) {
				container.find(card_items).addClass('animated '+animation_out);
			}
			container.addClass('opened');
			sectionElem.removeClass('animated '+animation_out);
			sectionElem.addClass('animated '+animation_in);
			$(card_items).addClass('hidden');
			sectionElem.removeClass('hidden');
			sectionElem.addClass('active');
		} else {
			/* scroll to section */
			$('body,html').animate({
				scrollTop: parseFloat(sectionElem.offset().top) - header_offset_top
			}, 500);
		}
	}

	/*
		Hire Button
	*/
	
	$('.lnks').on('click', '.lnk[href*="#"]', function(){
		var lnk_url = $(this).attr('href');
		var lnk_idx = lnk_url.indexOf("#");
		var lnk_hash = lnk_idx != -1 ? lnk_url.substring(lnk_idx+1) : "";
		
		if($('.top-menu a[href="#'+lnk_hash+'"]').length) {
			$('.top-menu a[href="#'+lnk_hash+'"]').trigger('click');
		}
	});

	/*
		Popup Menu Navigation
	*/
	
	$('.main-menu li.page_item_has_children').each(function(){
		$(this).find('> a').after('<span class="children_toggle"></span>');
	});
	$('.main-menu').on('click', '.children_toggle', function(){
		var main_menu_item = $(this).closest('.page_item_has_children');
		if(main_menu_item.hasClass('open')) {
			main_menu_item.removeClass('open');
			main_menu_item.find('> ul').slideUp(250);
		} else {
			main_menu_item.addClass('open');
			main_menu_item.find('> ul').slideDown(250);
		}
	});

	/*
		Smoothscroll
	*/
	
	if((width < 1240) && $('.top-menu-onepage').length) { 
		$(window).on('scroll', function(){
			var scrollPos = $(window).scrollTop();
			$('.top-menu ul li a').each(function () {
				var currLink = $(this);
				var currHref = currLink.attr('href');
				if(currHref == '') currHref = '#home';

				if(currHref.charAt(0) == "#") {
					var refElement = $('#card-'+currHref.replace('#', ''));
					if (refElement.offset().top - header_offset_top - 2 <= scrollPos) {
						$('.top-menu ul li').removeClass("current-menu-item");
						currLink.closest('li').addClass("current-menu-item");
					}
				}
			});
		});
	}

	if( width <= 560 ) {
		$(window).on('scroll', function(){
			if($(window).scrollTop() > 46) {
				$('.header').addClass('fixed');
			}
			else {
				$('.header').removeClass('fixed');
			}
		})
	}


	/* Sidebar Show/Hide */
	$('header, .profile').on('click', '.menu-btn', function(){
		$('.s_overlay').fadeIn();
		$('.content-sidebar').addClass('active');
		$('body,html').addClass('sidebar-open');
		return false;
	});
	$('.content-sidebar, .container').on('click', '.close, .s_overlay', function(){
		$('.s_overlay').fadeOut();
		$('.content-sidebar').removeClass('active');
		$('body,html').removeClass('sidebar-open');
	});

	/* Widget Title */
	$('.widget-title').wrapInner('<span class="widget-title-span"></span>');
	
	/* Default Menu */
	$('.lnk-view-menu').on('click', function(){
		var btn_text1 = $(this).find('.text').text();
		var btn_text2 = $(this).find('.text').data('text-open');
		if($('.profile').hasClass('default-menu-open')){
			$('.profile').removeClass('default-menu-open');
			$(this).find('.text').data('text-open', btn_text1);
			$(this).find('.text').text(btn_text2);
		} else {
			$('.profile').addClass('default-menu-open');
			$(this).find('.text').data('text-open', btn_text1);
			$(this).find('.text').text(btn_text2);
		}

		return false;
	});
	
	/*
		slimScroll
	*/
	
	if(width > 1240) {
		$('.card-inner .card-wrap').slimScroll({
			height: '100%'
		});
		$('.content-sidebar .sidebar-wrap, .profile .main-menu-fixed .main-menu').slimScroll({
			height: '100%'
		});
	}

	/*
		Typed
	*/

	$('.subtitle.subtitle-typed').each(function(){
		var subtitleContainer = $(this);

		subtitleContainer.typed({
			stringsElement: subtitleContainer.find('.typing-title'),
			backDelay: 3500, /* Delay in text change */
			typeSpeed: 0, /* Typing speed */
			loop: true
		});
	});
	
	/*
		Initialize masonry items
	*/
	
	var $container = $('.grid-items');
	
	$container.imagesLoaded(function() {
		$container.multipleFilterMasonry({
			itemSelector: '.grid-item',
			filtersGroupSelector: '.filter-button-group',
			percentPosition: true,
			gutter: 0
		});
	});
	

	/*
		12. Initialize masonry filter
	*/
	
	$('.filter-button-group').on('change', 'input[type="radio"]', function() {
		if ($(this).is(':checked')) {
			$('.f_btn').removeClass('active');
			$(this).closest('.f_btn').addClass('active');
		}
		/* popup image */
		$('.has-popup-image').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			mainClass: 'popup-box',
			image: {
				verticalFit: true
			}
		});
	
		/* popup video */
		$('.has-popup-video').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			preloader: false,
			fixedContentPos: false,
			mainClass: 'popup-box',
			callbacks: {
				markupParse: function(template, values, item) {
					template.find('iframe').attr('allow', 'autoplay');
				}
			}
		});
	
		/* popup music */
		$('.has-popup-music').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			preloader: false,
			fixedContentPos: false,
			mainClass: 'popup-box',
			callbacks: {
				markupParse: function(template, values, item) {
					template.find('iframe').attr('allow', 'autoplay');
				}
			}
		});
	
		/* popup media */
		$('.has-popup-media').magnificPopup({
			type: 'inline',
			overflowY: 'auto',
			closeBtnInside: true,
			mainClass: 'popup-box-inline',
			callbacks: {
				open: function() {
					if($(window).width()>=1240){
						$('.popup-box-inline .popup-box').slimScroll({
							height: height+'px'
						});
					}
				}
			}
		});

		/* popup gallery */
		$('.has-popup-gallery').on('click', function() {
	        var gallery = $(this).attr('href');
	    
	        $(gallery).magnificPopup({
	            delegate: 'a',
	            type:'image',
	            closeOnContentClick: false,
	            mainClass: 'mfp-fade',
	            removalDelay: 160,
	            fixedContentPos: false,
	            gallery: {
	                enabled: true
	            }
	        }).magnificPopup('open');

	        return false;
	    });
	});
	
	/* Gallery magnific popup */
	if(/\.(?:jpg|jpeg|gif|png)$/i.test($('.gallery-item:first a').attr('href'))){
		$('.gallery-item a').magnificPopup({
			gallery: {
				enabled: true
			},
			type: 'image',
			closeBtnInside: false,
			mainClass: 'mfp-fade'
		});
	}
	
	/*
		Popups
	*/
	
	/* popup image */
	$('.has-popup-image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'popup-box',
		image: {
			verticalFit: true
		}
	});
	
	/* popup video */
	$('.has-popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		preloader: false,
		fixedContentPos: false,
		mainClass: 'popup-box',
		callbacks: {
			markupParse: function(template, values, item) {
				template.find('iframe').attr('allow', 'autoplay');
			}
		}
	});
	
	/* popup music */
	$('.has-popup-music').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		preloader: false,
		fixedContentPos: false,
		mainClass: 'popup-box',
		callbacks: {
			markupParse: function(template, values, item) {
				template.find('iframe').attr('allow', 'autoplay');
			}
		}
	});
	
	/* popup media */
	$('.has-popup-media').magnificPopup({
		type: 'inline',
		overflowY: 'auto',
		closeBtnInside: true,
		mainClass: 'popup-box-inline',
		callbacks: {
			open: function() {
				if($(window).width()>=1240){
					$('.popup-box-inline .popup-box').slimScroll({
						height: height+'px'
					});
				}
			}
		}
	});

	/* popup gallery */
	$('.has-popup-gallery').on('click', function() {
        var gallery = $(this).attr('href');
    
        $(gallery).magnificPopup({
            delegate: 'a',
            type:'image',
            closeOnContentClick: false,
            mainClass: 'mfp-fade',
            removalDelay: 160,
            fixedContentPos: false,
            gallery: {
                enabled: true
            }
        }).magnificPopup('open');

        return false;
    });
	
	
	/*
		Validate Contact Form
	*/
	
	$("#cform").validate({
		ignore: ".ignore",
		rules: {
			name: {
				required: true
			},
			message: {
				required: true
			},
			email: {
				required: true,
				email: true
			}
		},
		success: "valid",
		submitHandler: function() {
			$.ajax({
				url: 'mailer/feedback.php',
				type: 'post',
				dataType: 'json',
				data: 'name='+ $("#cform").find('input[name="name"]').val() + '&email='+ $("#cform").find('input[name="email"]').val() + '&message=' + $("#cform").find('textarea[name="message"]').val(),
				beforeSend: function() {
				
				},
				complete: function() {
				
				},
				success: function(data) {
					$('#cform').fadeOut();
					$('.alert-success').delay(1000).fadeIn();
				}
			});
		}
	});
	
	
	/*
		Validate Commect Form
	*/
	
	$("#comment_form").validate({
		rules: {
			name: {
				required: true
			},
			message: {
				required: true
			}
		},
		success: "valid",
		submitHandler: function() {
		}
	});

	var serv_num = $('.service-items .service-item').length;
	if(serv_num%2 == 0){
		$('.service-items .service-item').eq(serv_num-1).parent().removeClass('border-line-h');
		$('.service-items .service-item').eq(serv_num-2).parent().removeClass('border-line-h');
	} else {
		$('.service-items .service-item').eq(serv_num-1).parent().removeClass('border-line-h');
	}

	/*
		Wrap First Title Word
	*/

	$('.content .title, .widget-title-span').each(function(index) {
	    var title = $(this).text().split(' ');
	    if(title.length>1){
		    var firstWord = title[0];
		    var replaceWord = '<span class="first-word">' + firstWord + '</span>';
		    var newString = $(this).html().replace(firstWord, replaceWord);
		    $(this).html(newString);
		} else {
			$(this).html('<span class="first-letter">'+ $(this).html() + '</span>');
		}
	});

	/*
		Active protected password card
	*/
	if($('body').hasClass('home') && $('.top-menu').hasClass('top-menu-onepage')){
		$('.post-password-form').on('submit', function(){
			$.cookie('submit-post-password', $(this).closest('.card-inner').attr('id'), { expires: 7, path: '/' });
			$(this).submit();
		});
		var post_password_cookie = $.cookie('submit-post-password');
		if(post_password_cookie!==undefined){
			$('a[href="#'+post_password_cookie+'"]').trigger('click');
			$.removeCookie('submit-post-password', { path: '/' });
		}
	}

	/*
		Tesimonials Carousel
	*/
	var revs_slider = $(".revs-carousel .owl-carousel");
	var is_rtl = false;
	if ($('body.rtl').length) {
		is_rtl = true;
	}

	revs_slider.owlCarousel({
		margin: 0,
		items: 1,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		loop: true,
		rewind: false,
		nav: false,
		rtl: is_rtl,
		dots: true
	});

	/* Iframe margins */
	$('.single-post-text, .post-box').each(function(){
		$(this).find('iframe').wrap('<div class="embed-container"></div>');
	});

	/* Anchors slimScroll Area Links */

	$('.content').on('click', 'a[href^="#"]', function(e){
		var anchor_id = $(this).attr('href').replace('#', '');
		var anchor_el = $('a[name="'+anchor_id+'"]');
		var card_open = $('.card-inner.active .card-wrap');

		if(width > 1240 && anchor_el.length){
			e.preventDefault();

			card_open.slimScroll({ scrollTo : anchor_el.offset().top - card_open.offset().top - 30 });
		}
	});

} )( jQuery );