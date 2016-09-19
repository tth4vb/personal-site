$('a.links').click(function (e){
   e.preventDefault();
   var div_id = $('a.links').index($(this))
   $('.divs').fadeOut(750).eq(div_id).fadeIn(750);
	$('.mainInfo').animate({ scrollTop: $('.divs').position().top });
});

//for portfolio page
$('#rightArrow').click(function(){
	
	$(this).hide();
	$('#leftArrow').show();

	$('#page1').fadeOut(750);
	$('#page2').fadeIn(750);

	$('link3').addClass('active');

	$('.mainInfo').animate({ scrollTop: $("#topOne").position().top });
});

$('#leftArrow').click(function(){
	$(this).hide();
	$('#rightArrow').show();

	$('#page2').fadeOut(750);
	$('#page1').fadeIn(750);

	$('link3').addClass('active');

	$('.mainInfo').animate({ scrollTop: $("#topOne").position().top });
});


