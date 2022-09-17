$(function () {
	function scrollNav() {
		$('.nav a').click(function(){  
   		$(".active").removeClass("active");      
   		$(this).closest('li').addClass("active");

   		var theClass = $(this).attr("class");
   		$('.'+theClass).parent('li').addClass('active');
   
	 		//Animate
   		$('html, body').stop().animate({
      	scrollTop: $( $(this).attr('href') ).offset().top - 80
			}, 500);
   		return false;
 		});
		$('.scrollTop a').scrollTop();
	}
	scrollNav();

	$('.carousel').flickity({
		cellAlign: 'left',
		contain: true,
		percentPosition: true,
		imagesLoaded: true,
		autoPlay: true,
		prevNextButtons: false
	});

	$('#button').on('click', function(event) {
		event.preventDefault();
		var userEmail = $('#email').val();
		if (userEmail != '') {
			var valid = validateEmail(userEmail);
			if (valid) {
				alert("Thanks for subscribing!");
			} else {
				alert("Please include an '@' in email address. " + userEmail + " is missing an '@'.");
		  }
		} else {
			alert("Please submit a valid email address.");
	  }	
	})

	function validateEmail(email) {
  	var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	return pattern.test(email);
	}

	function addCart() {
		var counter = 0;
		$('.add-cart-button').click(function(){ 
			$('#itemTotal').css("display", "block");
			counter++;
			$('#itemTotal').text(counter);
		})

	}
	addCart();

	
})
