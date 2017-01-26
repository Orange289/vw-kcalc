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


})
