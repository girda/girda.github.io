$(document).ready( function() {


    $('.slider').each( function(){
      var sliderNav = $(this).children('.slider__slides-nav')
      console.log(sliderNav)
      var sliderFor = $(this).children('.slider__slides-for')
      console.log(sliderFor)

      $.ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/photos',
        dataType: 'jsonp',
        success: function(data) {

            $.each(data, function(i,key) {
              if ( i < 50 ) {
                  $(sliderNav).append("<div><img src=" + key.thumbnailUrl + "></div>");
                  $(sliderFor).append("<div><a href=" + key.url + " class='slide'><img src=" + key.url + "></a></div>");
              }
            });


            $(sliderFor).slick({
              slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            arrows: false,
            fade: true,
            asNavFor: sliderNav
            });

            $(sliderNav).slick({
              slidesToShow: 6,
            slidesToScroll: 6,
            arrows: false,
            infinite: false,
            asNavFor: sliderFor,
            focusOnSelect: true
            });

            $(sliderFor).slickLightbox({
            itemSelector: 'a',
            navigateByKeyboard: true
        });
        } 
      });
    })
    	

});

$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

 
