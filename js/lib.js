// www.verstka.pro

function setscroll() {
	
	var viewport = $('.screen').height();

	if (viewport == 980) {
	
		var height = 0,
				scrollwidth = $('.p-about-opinions-list-wrap a').size() * ( $('.p-about-opinions-list-wrap a').width() + 19 );
				
		$('.p-about-opinions-list-wrap a').each(function() {
			
			if ($(this).height() > height) height = $(this).height();
			
		});
		
		$('.p-about-opinions-list-wrap a').height(height);
		$('.p-about-opinions-list-wrap').width(scrollwidth);
		
	}
	
}

$.datepicker.setDefaults({
  dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  monthNamesShort: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сенября', 'октября', 'ноября', 'декабря'],
  firstDay: 1,
  prevText: '',
  nextText: '',
  dateFormat: 'dd M yy'
});

$(document).ready(function(){
	
	$('body').append('<div class="screen" />');

	$('.clearable input[type="text"]').on('keyup', function () {
		if ($(this).val().length > 0) $(this).parents('.clearable').find('.cross').addClass('active');
		else $(this).parents('.clearable').find('.cross').removeClass('active');
	});
	$('.clearable .cross').on('click', function () {
		$(this).parents('.clearable').find('input[type="text"]').val('').trigger('keyup');
	});
	
	/************/
	/* IE fixes */
	/************/
	
	if ($.browser.msie) {
		
		if ($.browser.version <= 9) {
		
		  $('.block-catalog-filter .types label input').css('margin-top', '1px');
			$('.block-catalog-filter .types label span').css('margin-left', '30px');
			$('.form fieldset label input').css('margin-top', '1px');
			
		}
		
		if ($.browser.version <= 8) {
		
			$('.corner').each(function() {
				$(this).css('position', 'relative').append('<i class="tl"></i><i class="tr"></i><i class="br"></i><i class="bl"></i>');
			});
			
		}
		
		if ($.browser.version == 7) {
			
			$('.border img[width="60"] + u').css({'background-position': '0px 0px', 'height': '3px'});
			$('.border img[width="60"] + u + u').css({'background-position': '-60px 0px', 'height': '3px'});
			$('.border img[width="80"] + u').css({'background-position': '-920px 0px', 'height': '4px'});
			$('.border img[width="80"] + u + u').css({'background-position': '-1000px 0px', 'height': '4px'});
			$('.border img[width="100"] + u').css({'background-position': '-2904px 0px', 'height': '6px'});
			$('.border img[width="100"] + u + u').css({'background-position': '-3004px 0px', 'height': '6px'});
			$('.border img[width="110"] + u').css({'background-position': '-1604px 0px', 'height': '6px'});
			$('.border img[width="110"] + u + u').css({'background-position': '-1714px 0px', 'height': '6px'});
			$('.border img[width="140"] + u').css({'background-position': '-1824px 0px', 'height': '8px'});
			$('.border img[width="140"] + u + u').css({'background-position': '-1964px 0px', 'height': '8px'});
			$('.border img[width="180"] + u').css({'background-position': '-560px 0px', 'height': '11px'});
			$('.border img[width="180"] + u + u').css({'background-position': '-740px 0px', 'height': '11px'});
			$('.border img[width="220"] + u').css({'background-position': '-120px 0px', 'height': '13px'});
			$('.border img[width="220"] + u + u').css({'background-position': '-340px 0px', 'height': '13px'});
			$('.border img[width="262"] + u').css({'background-position': '-1080px 0px', 'height': '15px'});
			$('.border img[width="262"] + u + u').css({'background-position': '-1342px 0px', 'height': '15px'});
			$('.border img[width="340"] + u').css({'background-position': '-3864px 0px', 'height': '20px'});
			$('.border img[width="340"] + u + u').css({'background-position': '-4204px 0px', 'height': '20px'});
			$('.border img[width="380"] + u').css({'background-position': '-3104px 0px', 'height': '21px'});
			$('.border img[width="380"] + u + u').css({'background-position': '-3484px 0px', 'height': '21px'});
			$('.border img[width="400"] + u').css({'background-position': '-2104px 0px', 'height': '22px'});
			$('.border img[width="400"] + u + u').css({'background-position': '-2504px 0px', 'height': '22px'});
			
		}
		
	}
	
	/***********/
	/* Plugins */
	/***********/
	
	setscroll();
	$('.scroll').jScrollPane();
	
	$('.range').slider({
		range: true,
		step: 1000,
		min: Math.floor($('.range-min').text().replace(' ', '')),
		max: Math.ceil($('.range-max').text().replace(' ', '')),
		values: [Math.floor($(".range-from").val()), Math.floor($(".range-to").val())],
		slide: function(event, ui) {
			$(".range-from").val(ui.values[0]);
			$(".range-to").val(ui.values[1]);
		}
	});
	if ($('.range-from').val()) {
		$('.range').slider("values", 0, Number($(".range-from").val().replace(' ', '')));
	}
	if ($('.range-to').val()) {
		$('.range').slider("values", 1, Number($(".range-to").val().replace(' ', '')));
	}
	
	$('#credit-tooltip').hide();
	
	function slider_tooltip(event, ui) {
		
		var parent = $(this).parents('dl').attr('class'),
				tooltip = [],
				top = 0,
				left = 0;
		
		if (!ui.value) ui.value = $(this).slider('option', 'min');
		
		switch (parent) {
			
			case 'credit-period':
				tooltip = ['Беспроцентная рассрочка на 6 месяцев!', '', '', ''];
				$('#credit-tooltip p').html(tooltip[ui.value - 1]);
				top = $(this).offset().top - $(this).height() - $('#credit-tooltip').height() / 2;
				left = $(this).offset().left + $(this).width() + 30;
		
				if (tooltip[ui.value - 1] != '') {
					$('#credit-tooltip').css({
						left: left,
						top: top
					}).show();
				}
				else {
					$('#credit-tooltip').hide();
				}
			
		}
	}
	
	$('.credit-slider').slider({
		range: 'min',
		min: 1,
		change: function(event, ui) {
			$('input', this).val(ui.value);
		},
		create: slider_tooltip,
		slide: slider_tooltip
	});
	$('.credit-period .credit-slider').slider('option', {
		max: 4,
		step: 1
	});
	$('.credit-firstpay .credit-slider').slider('option', {
		min: 10,
		max: 50,
		step: 10
	});
	$('.price-category .credit-slider').slider('option', {
		max: 3,
		step: 1
	});
	$('.p-teams-filter .credit-slider').slider('option', {
		max: 3,
		step: 1
	});
	
	$('.lifetime .credit-slider').slider('option', {
		min: 10,
		max: 85,
		step: 25
	});
	
	$('.text .more').on('click', function (e) {
		e.preventDefault();
		if ($(this).siblings('.full').is(':hidden')) {
			if (!$(this).is('[data-default]')) {
				var text = $(this).html();
				$(this).attr('data-default', text);
			}
			$(this).html('Скрыть').siblings('.full').show(0);
		}
		else {
			var text = $(this).attr('data-default');
			$(this).html(text).siblings('.full').hide(0);
		}
	});
	
	if ($('.p-about').length) {
	
		$(window).on('resize', function(e) {
			setscroll();
			$('.scroll').data('jsp').scrollTo(0,0,0);
			$('.scroll').data('jsp').reinitialise();
		});
	
	}
	
	if ($('.p-teams').length) {
		$('.tabbed').tabs({
		  collapsible: true,
			selected: -1
		});
	}
	
	$('.tabbed').tabs();
	
	$('.popup').fancybox({
	  padding: 0,
		margin: 0,
		overlayOpacity: 0.01,
		overlayColor: '#fff',
		showCloseButton: false,
		showNavArrows: false
	});
	
	$('.popup2').fancybox({
	  padding: 0,
		margin: 0,
		overlayOpacity: 0.01,
		overlayColor: '#fff',
		showCloseButton: false,
		showNavArrows: false
	});
	
	$('.thumb').fancybox({
	  padding: 0,
		margin: 0,
		overlayOpacity: 0.01,
		overlayColor: '#fff',
		showNavArrows: false
	});
	
	$('.video').fancybox({
	  padding: 0,
		margin: 0,
		overlayOpacity: 0.01,
		overlayColor: '#fff',
		showNavArrows: false,
		type: 'iframe'
	});
	
	$('a[rel="image"]').fancybox({
	  padding: 0,
		margin: 0,
		overlayOpacity: 0.01,
		overlayColor: '#fff'
	});
	
	$('input[data-popup]').on('click', function(e) {
		e.preventDefault();
		$.fancybox({
			padding: 0,
			margin: 0,
			overlayOpacity: 0.01,
			overlayColor: '#fff',
			showCloseButton: false,
			showNavArrows: false,
			href: $(this).data().popup
		});
	});
	
	$('a[rel="fotorama"]').on('click', function(e) {
		e.preventDefault();
		$(this).siblings('.fotorama').fotorama({allowfullscreen: true}).data('fotorama').requestFullScreen();
	});
	
	$('.p-obj-list-item-image a').on('click', function(e) {
		e.preventDefault();
		$(this).parents('.p-obj-list-item').find('.fotorama').fotorama({allowfullscreen: true}).data('fotorama').requestFullScreen();
	});
	
	if ($('.block-banner li').size() > 1) {
		$('.block-banner ul').bxSlider({
			mode: 'fade',
			controls: false,
			pager: true,
			auto: true
		});
	}
	
	/*****************/
	/* Custom forms */
	/*****************/

	$('.p-soccoupon-doublephone .code').on('keyup', function () {
		var input = $(this);
		if (input.val().length == input.attr('maxlength')) {
			$('.p-soccoupon-doublephone .phone').focus();
		}
	});
	$('.p-soccoupon-doublephone .phone').on('keyup', function (e) {
		var input = $(this);
		if (e.keyCode == 8 && input.val().length == 0) {
			$('.p-soccoupon-doublephone .code').val(function (i, val) {
				return val.substr(0, 2);
			}).focus();
		}
	});
	
  $('.input input').each(function() {
		if ($(this).val() != '') {
			$(this).prev('del').fadeTo(0, 0);
		}
	});
	$('.input input').on('focus', function() {
		if ($(this).val() == '') {
		  $(this).prev('del').fadeTo(100, 0.5);
		}
	}).on('keyup', function() {
		$(this).prev('del').fadeTo(100, $(this).val() != '' ? 0 : 0.5);
	}).on('blur', function() {
		$(this).val() == '' ? $(this).prev('del').fadeTo(100, 1) : true;
	});
	
	if (!$('.cp-wrap').length) {
		$('select').on('change keyup',function() {
			var text = $(':selected', this).text();
			$('+ del', this).html(text);
		}).fadeTo(0,0);
		$('select').trigger('change');
	}
	
	$('.file input[type="file"]').on('change focus click', function() {
		var $this = $(this),
		    $val = $this.val(),
				valArray = $val.split('\\'),
				newVal = valArray[valArray.length-1];
		if (newVal !== '') {
			$this.parents('.file').find('del').html(newVal);
		}
	});
	
	$('.cp-f-photo .add').on('click', function () {
		$(this).parents('.cp-f-photo').find('input[type="file"]').trigger('click');
	});
	
	
	/*********/
	/* Pages */
	/*********/
	
	$('.block-catalog-filter input').on('click', function() {
		if ($(this).parents('.all').length && $(this).attr('checked')) {
			$('.block-catalog-filter .colors label:not(.all) input').each(function() {
				$(this).attr('checked', false);
			});
		}
		else {
			$('.block-catalog-filter .all input').attr('checked', false);
		}
	});
	
	$('.p-hr-list > dl > dt a').on('click', function(e) {
	  e.preventDefault();
		var $dl = $(this).parents('dl');
		$dl.find(' > dd').slideToggle(300, function() {
			$dl.toggleClass('active');
		});
	});
	
  $('.rating-big input').on('change', function() {
		var width = $(this).parents('li').attr('class').replace('rate-', '');
		$(this).parents('.rating-big').find('.rated span').css('width', width * 20 + '%');
	});
	
  $('.cp-rating-big input').on('change', function() {
		var width = $(this).parents('li').attr('class').replace('rate-', '');
		$(this).parents('.cp-rating-big').find('.rated span').css('width', width * 20 + '%');
	});
	
	$('.p-teams-item-close a').on('click', function(e) {
		e.preventDefault();
		$(this).parents('.tabbed').tabs('option', 'selected', -1);
	});
	
	/* $('.p-good-image a').on('click', function(e) {
		e.preventDefault();
		if ($(this).parent('dd').is(':not(.active)')) {
			$('.p-good-image dd').removeClass();
			$(this).parent('dd').addClass('active');
			$('.p-good-image dt img').attr('src', $(this).attr('href'));
		}
	}); */
	
	$('.header-region a').on('click', function(e) {
		e.preventDefault();
		$('#region').slideToggle(500);
		$('.header-region').toggleClass('active');
		$('#remember').slideUp(500);
		$('.header-remember').removeClass('active');
	});
	
	$('.header-remember a, #remember a').on('click', function(e) {
		e.preventDefault();
		$('#remember').slideToggle(500);
		$('.header-remember').toggleClass('active');
		$('#region').slideUp(500);
		$('.header-region').removeClass('active');
	});
	
	$('.region-my input').on('click', function(e) {
		e.preventDefault();
		$('.header-region a').trigger('click');
	});
	
	$('.leftnav .has-sub a:first-child, .p-docs-list dd > ul > li > a').on('click', function(e) {
		e.preventDefault();
		$(this).parent('li').toggleClass('active');
	});
	
	$('.p-main-topline-home dt a').on('click', function(e) {
		e.preventDefault();
		$('.p-main-topline-home dl:not(:eq('+$(this).parents('dl').index()+'))').removeClass('active');
		$(this).parents('dl').toggleClass('active');
	});
	
	$('.region-popup a').on('click', function(e) {
		e.preventDefault();
		var clicked = $(this),
			target = $('.header-region dd');
		
		$('.region-popup').animate({
			top: target.offset().top,
			left: target.offset().left,
			width: target.outerWidth(),
			height: target.outerHeight(),
			padding: 0,
			margin: 0,
			opacity: 0
		}, 500, function () {
			if (clicked.is('.region-change')) $('a', target).trigger('click');
			$('.region-popup').remove();
		});
	});
	
	$('.cp-input input, .cp-input textarea').on('focus', function () {
		$(this).parents('.cp-input').addClass('js-focus');
	}).on('blur', function () {
		$(this).parents('.cp-input').removeClass('js-focus');
	});
	
	$('.cp-list-item .graph a').on('click', function (e) {
		e.preventDefault();
		$(this).parents('.cp-list-item .graph').toggleClass('active');
	});
	
	$('.graphs-toggler').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
	});
	
	$('.cp-orders-item .cp-f-custom-radios input').on('change', function () {
		var index = $(this).parents('label').index();
		$('.cp-orders-item-variants > div').hide(0).filter(':eq('+index+')').show(0);
	});
	$('.cp-orders-item .cp-f-custom-radios input:checked').trigger('change');
	
	
	$('.f-daterange').each(function () {
		var root = $(this);
		
		$('.from', root).datepicker({
			onClose: function(selectedDate) {
				$('.to', root).datepicker('option', 'minDate', selectedDate).datepicker('show');
			}
		});
		$('.to', root).datepicker({
			onClose: function(selectedDate) {
				$('.from', root).datepicker('option', 'maxDate', selectedDate);
			}
		});
	});
	
});