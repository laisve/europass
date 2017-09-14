$(document).ready(function() {

	$('#arrow').click(function() {
		$('html, body, #wrapper').animate({scrollTop: '+=800px'}, 600);
	});

	/*$(document).on('click', '#learn_more', function() {
		$("#main-text").removeClass("collapsed");
		$(".bottom-button").empty();
		$(".buttons-center").html("<button class='yellow-button' id='close'>Uždaryti</button><button class='blue-button'>Pildyti dokumentą</button>");
	});

	$(document).on('click', '#close', function() {
		$("#main-text").addClass("collapsed");
		$(".buttons-center").empty();
		$(".bottom-button").html("<button class='yellow-button' id='learn_more'>Sužinok daugiau</button>");
	});*/

	$(document).on('click', '.skritulys', function() {
		if(!$(this).hasClass("active")) {
			$('.skritulys').removeClass("active");
			$(this).addClass("active");
		}

		if($(this).hasClass("second")) {
			$('.slider').addClass('slider-middle');
			$('.slider').removeClass('slider-left');
		}

		else if($(this).hasClass("first")) {
			$('.slider').removeClass('slider-middle') && $('.slider').removeClass('slider-left');
		}

		else {
			$('.slider').addClass('slider-left');
		}
	});

	$('.prev').click(function() {
        
        if($('.active').hasClass('second')) {
            $('.slider').removeClass('slider-middle');
            $('.second').removeClass('active');
            $('.first').addClass('active');
        }
        else if($('.active').hasClass('third')) {
            $('.slider').removeClass('slider-left');
            $('.slider').addClass('slider-middle');
            $('.third').removeClass('active');
            $('.second').addClass('active');
        }
    });
    
    $('.next').click(function() {
        if($('.active').hasClass('first')) {
            $('.first').removeClass('active');
            $('.second').addClass('active');
            $('.slider').addClass('slider-middle');
        }
        else if($('.active').hasClass('second')) {
            $('.second').removeClass('active');
            $('.third').addClass('active');
            $('.slider').removeClass('slider-middle');
            $('.slider').addClass('slider-left');
        }
    });
});