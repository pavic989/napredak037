
 $(function(){
	$('ul.nav li.dropdown').hover(function(){
		$('.dropdown-menu', this).fadeIn();                   
	}, function() {
		$('.dropdown-menu', this).fadeOut('fast');
	});
});

// ============= Hover dropdown menu setting =============

$(document).ready(function(){
	if($('#second').height() > $('#first').height()){
	$('#second').height($('#first').height());
} else {
	$('#first').height($('#second').height());
}
});



// ============= Sections equal height setting =============


$(document).ready( function(){
	$('.navbar-toggle').on('click', function(){
		$(this).toggleClass('open');
	});
	})

// ============= Animating burger button =============

  $(function() {
    $(".rslides").responsiveSlides();
  });
// ============= Slider setting =============

$(document).ready(function(){
	$('li a').click(function(e){
		e.preventDefault();
		$("#first").load($(this).attr('href'));
	});
});

// ============= Ajax =============