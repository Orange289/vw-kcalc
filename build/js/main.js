$(document).ready(function(){

	svg4everybody({});

// open menu

	$('.btn_popup').on('click', function(){
		$(this).toggleClass("btn_popup_close");
		$(this).parents(".popup").find(".popup__actions").slideToggle("fast");
	})

//tabs


	$('.tabs__radio_prog').click(function(){
	  var thisId = this.id.slice(0,2);
	  $('div.t1').hide();
	  $('div.t2').hide();
	  $('div.' + thisId).show();
	  if($('.t1').is(':hidden')) {
		  $('.programs__left').addClass('programs__left_standard');
		  $('.range').addClass('range_standard');
	  }
	  else {
		  $('.programs__left').removeClass('programs__left_standard');
		  $('.range').removeClass('range_standard');
	  }
	  });

	  $('.tabs__radio_docs').click(function(){
  	  var thisId = this.id.slice(0,2);
  	  $('div.t3').hide();
  	  $('div.t4').hide();
  	  $('div.' + thisId).show();
  	  });


// scroll-menu

	var win = $(window),
	    nav = $('.popup'),

	    pos = nav.offset().top,
	    sticky = function(){
	      win.scrollTop() > pos ?
	        nav.addClass('sticky')
	      : nav.removeClass('sticky')
	    }

	win.scroll(sticky);

// range-slider

//number format on JS

	function number_format( str ){
	   return str.replace(/(\s)+/g, '').replace(/(\d{1,3})(?=(?:\d{3})+$)/g, '$1 ');
	}

	$('.range__input').keypress(function(event){
			var key, keyChar;
			if(!event) var event = window.event;

			if (event.keyCode) key = event.keyCode;
			else if(event.which) key = event.which;

			if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
			keyChar=String.fromCharCode(key);

			if(!/\d/.test(keyChar))	return false;

		});

$('.ui-widget.ui-widget-content').css('border','none');
$('.ui-widget-header').css('background','transparent');

	$("#range-deposit").ionRangeSlider({
	    min: 0,
	    max: 100,
	    from: 40,
		step: 10,
	    from_min: 40,
	    from_max: 80,
	    from_shadow: true,
		grid: true,
    	grid_num: 5,
		from: 50
	});

	$("#range-deposit").on('change', function() {
		var $this = $(this),
		value = $this.prop("value");
		$('.range__input_deposit').val((value)*10552);
		$('.range__input_deposit').attr('value',(value)*10552);
		$('.range__input_deposit').val( number_format ( $('.range__input_deposit').val() ) );
	});

	// slider - edit
	$('.edit_deposit').on('click', function(){
		$(this).parents('.range_deposit').find('.range__input').addClass('range__input_active');
		$(this).parents('.range_deposit').find('.range__input').focus();
	});

	$('.range__input_deposit').on('click', function(){
			$(this).addClass('range__input_active');
			$(this).focus();
	});

	$(document).mouseup(function (e){
	var div = $(".edit_deposit");
	if (!div.is(e.target)) {
			 $('.range__input_deposit').removeClass('range__input_active');
		 }
	});

	$('.range__input_deposit').on('change', function(){
		var slider = $('#range-deposit').data('ionRangeSlider');

		slider.update({
			from: String((+this.value) / 10552)
		})

	});

	$("#range-credit").ionRangeSlider({
		min: 0,
		max: 36,
		from: 12,
		step: 6,
		from_min: 12,
		from_max: 18,
		from_shadow: true,
		grid: true,
		grid_num: 6
	});

	$("#range-credit").on('change', function() {
		var $this = $(this),
		value = $this.prop("value");
		$('.range__input_credit').val((value));
	});

	// slider - edit
	$('.edit_credit').on('click', function(){
		$(this).parents('.range_credit').find('.range__input').addClass('range__input_active');
		$(this).parents('.range_credit').find('.range__input').focus();
	});

	$('.range__input_credit').on('click', function(){
			$(this).addClass('range__input_active');

			$(this).focus();
	});

	$(document).mouseup(function (e){
	var div = $(".edit_credit");
	if (!div.is(e.target)) {
			 $('.range__input_credit').removeClass('range__input_active');

		 }
	});

	$('.range__input_credit').on('change', function(){
		var slider = $('#range-credit').data('ionRangeSlider');

		slider.update({
			from: this.value
		})

	});

	$("#range-rest").ionRangeSlider({
		min: 0,
	    max: 100,
	    from: 40,
		step: 10,
	    from_min: 40,
	    from_max: 80,
	    from_shadow: true,
		grid: true,
    	grid_num: 5,
		from: 50
	});

	$("#range-rest").on('change', function() {
		var $this = $(this),
		value = $this.prop("value");
		$('.range__input_rest').val((value)*10552);
		$('.range__input_rest').val( number_format ( $('.range__input_rest').val() ) );
	});

	// slider - edit
	$('.edit_rest').on('click', function(){
		$(this).parents('.range_rest').find('.range__input').addClass('range__input_active');
		$(this).parents('.range_rest').find('.range__input').focus();
	});

	$('.range__input_rest').on('click', function(){
			$(this).addClass('range__input_active');
			$(this).focus();
	});

	$(document).mouseup(function (e){
	var div = $(".edit_rest");
	if (!div.is(e.target)) {
			 $('.range__input_rest').removeClass('range__input_active');
		 }
	});

	$('.range__input_rest').on('change', function(){
		var slider = $('#range-rest').data('ionRangeSlider');

		slider.update({
			from: String((+this.value) / 10552)
		})

	});

// edit price

	$(".btn_edit").on("click", function(){
		$(this).parents('.form__cell').find('.form__text').addClass('prices__value_active');
		$(this).parents('.form__cell').find('.form__text').focus();
	});

	$('.prices__value_cost').on('click', function(){
			$(this).addClass('prices__value_active');
			$(this).focus();
	});

	$(document).mouseup(function (e){ // событие клика по веб-документу
	var div = $(".btn_edit"); // тут указываем ID элемента
	if (!div.is(e.target)) {
			 $('.prices__value_cost').removeClass('prices__value_active');
		 }
	});

	$('.prices__value_cost').keyup(function(event){
	  $(this).val( number_format ( $(this).val() ) );
	});

//check fields

	var pattern_name = /^[a-zA-Zа-яА-ЯёЁ]{1,20}$/i;
	var name = $('#name');
	var surname = $('#surname');

	var pattern_tel = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i;
	var phone = $('#tel');

	var pattern_email = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
	var email = $('#email');

	email.blur(function(){
		if($(this).val() != '') {
			if(pattern_email.test($(this).val())) {
				$(this).removeClass('form__text_error');
				$(this).parents('.form__field-wrap_request').find('.form__alert').remove();

			} else {
				$(this).addClass('form__text_error');
				$(this).parents('.form__field-wrap_request').append('<div class="form__alert">Поле заполнено неправильно!</div>');
				$(this).parents('.form__field-wrap_request').find('.form__alert').css('display','block');
			}
		}
	});

	name.blur(function(){
		if($(this).val() != '') {
			if(pattern_name.test($(this).val())) {
				$(this).removeClass('form__text_error');
				$(this).parents('.form__field-wrap_request').find('.form__alert').remove();

			} else {
				$(this).addClass('form__text_error');
				$(this).parents('.form__field-wrap_request').append('<div class="form__alert">Поле заполнено неправильно!</div>');
				$(this).parents('.form__field-wrap_request').find('.form__alert').css('display','block');
			}
		}
	});

	surname.blur(function(){
		if($(this).val() != '') {
			if(pattern_name.test($(this).val())) {
				$(this).removeClass('form__text_error');
				$(this).parents('.form__field-wrap_request').find('.form__alert').remove();

			} else {
				$(this).addClass('form__text_error');
				$(this).parents('.form__field-wrap_request').append('<div class="form__alert">Поле заполнено неправильно!</div>');
				$(this).parents('.form__field-wrap_request').find('.form__alert').css('display','block');
			}
		}
	});

	phone.blur(function(){
		if($(this).val() != '') {
			if(pattern_tel.test($(this).val())) {
				$(this).removeClass('form__text_error');
				$(this).parents('.form__field-wrap_request').find('.form__alert').remove();

			} else {
				$(this).addClass('form__text_error');
				$(this).parents('.form__field-wrap_request').append('<div class="form__alert">Поле заполнено неправильно!</div>');
				$(this).parents('.form__field-wrap_request').find('.form__alert').css('display','block');
			}
		}
	});

//open disclaimer

	$('.circle').on('click', function(){
		$('.disclaimer').addClass('disclaimer__show');
		$('.disclaimer').removeClass('disclaimer__remove');
	})

	$('.circle_1').on('click', function(){
		$('#disclaimer_1').addClass('disclaimer__show');
		$('#disclaimer_2').removeClass('disclaimer__show');
		$('#disclaimer_3').removeClass('disclaimer__show');
	})

	$('.circle_2').on('click', function(){
		$('#disclaimer_2').addClass('disclaimer__show');
		$('#disclaimer_1').removeClass('disclaimer__show');
		$('#disclaimer_3').removeClass('disclaimer__show');
	})

	$('.circle_3').on('click', function(){
		$('#disclaimer_3').addClass('disclaimer__show');
		$('#disclaimer_2').removeClass('disclaimer__show');
		$('#disclaimer_1').removeClass('disclaimer__show');
	})

	$('.disclaimer__btn_1').on('click', function(){
		$('.disclaimer').addClass('disclaimer__remove');
		setTimeout(function(){$('#disclaimer_1').removeClass('disclaimer__show')},150);
	})

	$('.disclaimer__btn_2').on('click', function(){
		$('.disclaimer').addClass('disclaimer__remove');
		setTimeout(function(){$('#disclaimer_2').removeClass('disclaimer__show')},150);
	})

	$('.disclaimer__btn_3').on('click', function(){
		$('.disclaimer').addClass('disclaimer__remove');
		setTimeout(function(){$('#disclaimer_3').removeClass('disclaimer__show')},150);
	})

	window.onscroll = function() {
		$('.disclaimer').addClass('disclaimer__remove');
		setTimeout(function(){$('.disclaimer').removeClass('disclaimer__show')},150)}

})
