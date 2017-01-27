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

$('.ui-widget.ui-widget-content').css('border','none');
$('.ui-widget-header').css('background','transparent');

//deposit

$("#range-deposit")
    .slider({
		min: 0,
        max: 100,
		step: 1
    })
    .slider("pips", {
        rest: "label",
		step: 25

    })
	.slider("float")
	.slider({
		slide: function(event, ui) {
	  		$('#deposit').val($('#range-deposit').slider('value')*10767);
	  		$('#deposit').attr('value', ui.value);
	    },
		stop: function(event, ui) {
			$('#deposit').val($('#range-deposit').slider('value')*10767);
			$('#deposit').attr('value', ui.value);
		}
	})

//rest

$("#range-rest")
    .slider({
		min: 0,
        max: 100,
		step: 1
    })
    .slider("pips", {
        rest: "label",
		step: 25

    })
	.slider("float")
	.slider({
		slide: function(event, ui) {
	  		$('#rest').val($('#range-rest').slider('value')*10767);
	  		$('#rest').attr('value', ui.value);
	    },
		stop: function(event, ui) {
			$('#rest').val($('#range-rest').slider('value')*10767);
			$('#rest').attr('value', ui.value);
		}
	})


// edit price

	$(".btn_edit").on("click", function(){
		$(this).parents('.form__cell').find('.form__text').removeAttr('disabled');
	})

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



})
