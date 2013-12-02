// www.verstka.pro
mouse = [];
$(document).mousemove(function (e) {
	mouse = [e.pageX, e.pageY];
	$('#calendar_title').css({
		top: mouse[1]+10,
		left: mouse[0]+10
	});
});

$.datepicker.setDefaults({
  dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  monthNamesShort: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
  firstDay: 1,
  prevText: '',
  nextText: '',
  dateFormat: 'd M yy'
});

$(document).ready(function(){
	
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
	
	if (!$('.cp-wrap').length) {
		$('select').on('change keyup',function() {
			var text = $(':selected', this).text();
			$('+ del', this).html(text);
		}).fadeTo(0,0);
		$('select').trigger('change');
	}
	
	$('.cp-f-photo .add').on('click', function () {
		$(this).parents('.cp-f-photo').find('input[type="file"]').trigger('click');
	});
	
		
  $('.cp-rating-big input').on('change', function() {
		var width = $(this).parents('li').attr('class').replace('rate-', '');
		$(this).parents('.cp-rating-big').find('.rated span').css('width', width * 20 + '%');
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
	
	$('.cp-orders-item .cp-f-custom-radios input, .cp-orders-add .cp-f-custom-radios input').on('change', function () {
		var index = $(this).parents('label').index();
		$(this).parents('.cp-f-custom-radios').parent().find('.cp-orders-item-variants > div').hide(0).filter(':eq('+index+')').show(0);
	});
	$('.cp-orders-item .cp-f-custom-radios input:checked').trigger('change');
	
	
	$('.f-daterange').each(function () {
		var root = $(this);
		
		$('.from', root).datepicker({
			onSelect: function(selectedDate) {
				$('.to', root).datepicker('option', 'minDate', selectedDate);
			}
		});
		$('.to', root).datepicker({
			onSelect: function(selectedDate) {
				$('.from', root).datepicker('option', 'maxDate', selectedDate);
			}
		});
	});

	$('.cp-calendar-days .busy').on('mouseover', function () {
		var root = $('.cp-calendar-days'),
			project = $(this).attr('class').replace('busy', '').trim();

		$('.'+project, root).addClass('js-hover');

		if (project in titles) {
			$('body').append('<div id="calendar_title">'+titles[project]+'</div>');
		}

	});
	$('.cp-calendar-days li').on('mouseleave', function () {
		$('.cp-calendar-days li').removeClass('js-hover');
		$('#calendar_title').remove();
	});

	$('.cp-graph-add > .cp-button, .cp-graph-add .cancel').on('click', function (e) {
		e.preventDefault();
		$(this).parents('.cp-graph-add').toggleClass('active');
	});

	$('.cp-reviews-add > .cp-button, .cp-reviews-add .cancel').on('click', function (e) {
		e.preventDefault();
		$(this).parents('.cp-reviews-add').toggleClass('active');
	});

	$('.cp-orders-add > .cp-button, .cp-orders-add .cancel').on('click', function (e) {
		e.preventDefault();
		$(this).parents('.cp-orders-add').toggleClass('active');
	});

	$('.cp-obj-list-item .status > p a, .cp-obj-list-item .cancel').on('click', function (e) {
		e.preventDefault();
		$(this).parents('.cp-obj-list-item').toggleClass('active');
	});

	$('.cp-coupons-item .agents > a').on('click', function (e) {
		e.preventDefault();
		$(this).parents('.cp-coupons-table').find('.cp-coupons-popup:visible').hide(0);
		$(this).parents('.cp-coupons-item').find('.cp-coupons-popup').show(0);
	});

	$('.cp-coupons-item .agents .close').on('click', function (e) {
		e.preventDefault();
		$(this).parents('.cp-coupons-table').find('.cp-coupons-popup:visible').hide(0);
	});

	$(document).on('click', function (e) {
		if ($('.cp-coupons-table').length) {
			if ($(e.target).is(':not(.cp-coupons-popup)')
				&& $(e.target).is(':not(.cp-coupons-popup .close)')
				&& $(e.target).is(':not(.cp-coupons-item .agents > a)')
				&& !$(e.target).parents('.cp-coupons-popup').length) {
				$('.cp-coupons-popup').hide(0);
			}
		}
	});

	$('.cp-graph-periods .i-cp-edit').on('click', function (e) {
		e.preventDefault();
		$(this).parents('dl').toggleClass('active');
	});

	$('.cp-graph-periods .cancel').on('click', function (e) {
		e.preventDefault();
		$(this).parents('.cp-graph-add').prev('dl').toggleClass('active');
	});

	$('.cp-graph-calendar').bxSlider({
		minSlides: 4,
		maxSlides: 4,
		moveSlides: 1,
		slideWidth: 220,
		infiniteLoop: false,
		pager: false,
		hideControlOnEnd: true,
		prevText: '',
		nextText: ''
	});

	$('.cp-list-filter-search input[type="text"]').on('keyup', function () {
		if ($(this).val().length > 0) $(this).siblings('.cross').addClass('active');
		else $(this).siblings('.cross').removeClass('active');
	});
	$('.cp-list-filter-search .cross').on('click', function () {
		$(this).siblings('input[type="text"]').val('').trigger('keyup');
	});
	
});