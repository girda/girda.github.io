$(document).ready( function() {

  	$.ajax({
  		type: 'GET',
      crossDomain: true,
  		url: 'https://jsonplaceholder.typicode.com/photos',
  		dataType: 'json',
  		success: function(data) {
      		$.each(data, function(i,key) {
      			if ( i < 50 ) {
          			$(".slider__slides-nav").append("<div><img src=" + key.thumbnailUrl + "></div>");
          			$(".slider__slides-for").append("<div><a href=" + key.url + " class='slide'><img src=" + key.url + "></a></div>");
      			}
      		});
      		$(".slider__slides-for").slick({
      			slidesToShow: 1,
    				slidesToScroll: 1,
    				centerMode: true,
    				arrows: false,
    				fade: true,
    				asNavFor: '.slider__slides-nav'
      		});
      		$(".slider__slides-nav").slick({
      			slidesToShow: 6,
    				slidesToScroll: 6,
    				arrows: false,
    				infinite: false,
    				asNavFor: '.slider__slides-for',
    				focusOnSelect: true
      		});
      		$('.slider__slides-for').slickLightbox({
    				itemSelector: 'a',
    				navigateByKeyboard: true
			});
  		} 
  	});

  	$.ajax({
  		type: 'GET',
  		url: 'https://jsonplaceholder.typicode.com/photos',
  		dataType: 'json',
  		success: function(data) {
      		$.each(data, function(i,f) {
      			if ( i > 10 ) {
      				if ( i < 20 ) {
      					$(".slider__slides-nav1").append("<div><img src=" + f.thumbnailUrl +"></div>");
          				$(".slider__slides-for1").append("<div><a href=" + f.url + " class='slide'><img src=" + f.url + "></a></div>");
      				}
      			}
      		});
      		$(".slider__slides-for1").slick({
      			slidesToShow: 1,
    				slidesToScroll: 1,
    				centerMode: true,
    				arrows: false,
    				fade: true,
    				asNavFor: '.slider__slides-nav1'
      		});
      		$(".slider__slides-nav1").slick({
      			slidesToShow: 10,
    				slidesToScroll: 5,
    				arrows: false,
    				asNavFor: '.slider__slides-for1',
    				focusOnSelect: true
      		});
      		$('.slider__slides-for1').slickLightbox({
    				itemSelector: 'a',
    				navigateByKeyboard: true
			});
  		} 
  	});

});

$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

 
