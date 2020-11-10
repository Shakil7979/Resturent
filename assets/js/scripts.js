$(document).ready(function(){
	$('.testimonials').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:false,
		autoplay:true,
	})
	$('.nav-icon').click(function(){
		$('.menu ul').slideToggle(1000);

		return false;
	})

	$('.backBtn').click(function(){
		$('html,body').animate({
			scrollTop:0
		},1000)


	})
})


	$(window).scroll(function(){

		var scrlbtn=$(this).scrollTop();

		if(scrlbtn>400){
			$('.backBtn').fadeIn()

		}
		else{
			$('.backBtn').fadeOut()
		}
		return false;
	})

