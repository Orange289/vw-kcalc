//custom select

function customSelectInit () {
    $(".js_chosen_select").chosen({
        disable_search_threshold: 100,
        no_results_text: "Ничего не найдено",
        placeholder_text_single: " "
    });

    $('.js_chosen_select').on('chosen:showing_dropdown', function(e, params) {
        var el = params.chosen.container[0];
        $(el).find('li').wrapInner('<span></span>');
        if (!$(el).find('.js_custom_scroll').length) {
            $(el).find('.chosen-results').wrap('<div class="js_custom_scroll"></div>');
            customScrollInit();
        }
    });
	$('.icon_select').on('chosen:showing_dropdown', function(e, params) {
        var el = params.chosen.container[0];
        $(el).find('li').wrapInner('<span></span>');
        if (!$(el).find('.js_custom_scroll').length) {
            $(el).find('.chosen-results').wrap('<div class="js_custom_scroll"></div>');
            customScrollInit();
        }
    });
    var list = $('.js_chosen_select').next();
    var input = list.find('input');
    list.find('input').on('keyup',function(){
        list.find('li').wrapInner('<span></span>');
        input.focus();
     })


}
customSelectInit();



$(document).ready(function(){

// open menu

	$('.btn_popup').on('click', function(){
		$(this).toggleClass("btn_popup_close");
		$(this).parents(".popup__request").find(".popup__actions").slideToggle("fast");
	})

//tabs


	$('.tabs__radio_main').click(function(){
	  var thisId = this.id.slice(0,2);
	  $('div.t1').hide();
	  $('div.t2').hide();
	  $('div.' + thisId).show();
	  });

	  $('.tabs__radio_int').click(function(){
  	  var thisId = this.id.slice(0,2);
  	  $('div.t3').hide();
  	  $('div.t4').hide();
  	  $('div.' + thisId).show();
  	  });


// scroll-menu

// jQuery(function(f){
//     var element = f('.popup');
//     f(window).scroll(function(){
//         element['fade'+ (f(this).scrollTop() > 607 ? 'In': 'Out')](500);
//     });
// });


var win = $(window),
    nav = $('.popup'),

    pos = nav.offset().top,
    sticky = function(){
      win.scrollTop() > pos ?
        nav.addClass('sticky')
      : nav.removeClass('sticky')
    }

win.scroll(sticky)



// range-deposit

$('#range-deposit').slider({
	animate: true,
	range: "min",
	value: 0,
	min: 0,
	max: 1076734,
	step: 1,


	stop: function(event,ui) {
		$('#deposit').val($('#range-deposit').slider('value'));
		$('#deposit').attr('value', ui.value);
	},

  slide: function(event, ui) {
		$('#deposit').val($('#range-deposit').slider('value'));
		$('#deposit').attr('value', ui.value);
  }

});

$('#deposit').change(function(){
	if (!$('#deposit').val()) {
		$('#deposit').val(0);
	}

	if ($('#deposit').val() >= 1076734) {
		$('#deposit').val(1076734);
	}


	$('#range-deposit').slider('value',$('#deposit').val());

})


//range-rest

$('#range-rest').slider({
	animate: true,
	range: "min",
	value: 0,
	min: 0,
	max: 1076734,
	step: 1,


	stop: function(event,ui) {
		$('#rest').val($('#range-rest').slider('value'));
		$('#rest').attr('value', ui.value);
	},

  slide: function(event, ui) {
		$('#rest').val($('#range-rest').slider('value'));
		$('#rest').attr('value', ui.value);
  }

});

$('#rest').change(function(){
	if (!$('#rest').val()) {
		$('#rest').val(0);
	}

	if ($('#rest').val() >= 1076734) {
		$('#rest').val(1076734);
	}


	$('#range-rest').slider('value',$('#rest').val());

})


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


})
