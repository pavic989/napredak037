
 $(function(){
	$('ul.nav li.dropdown').hover(function(){
		$('.dropdown-menu', this).fadeIn();                   
	}, function() {
		$('.dropdown-menu', this).fadeOut('fast');
	});
});

// ============= Hover dropdown menu setting =============

// $(document).ready(function(){
// 	if($('#second').height() > $('#first').height()){
// 	$('#second').height($('#second').height());
// } else if($('#first').height() > $('#second').height()) {
// 	$('#first').height($('#first').height());
// }
// });



// ============= Sections equal height setting =============


// $(document).ready( function(){
// 	$('.navbar-toggle').on('click', function(){
// 		$(this).toggleClass('open');
// 	});

// 	})

	$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});
// ============= Animating burger button =============

  $(function() {
    $(".rslides").responsiveSlides();
  });
// ============= Slider setting =============

$(document).ready(function(){
	$('li a').click(function(e){
		e.preventDefault();
		$("#first").load($(this).attr('href')).hide().fadeIn('slow');
	});
});

// ============= Ajax =============