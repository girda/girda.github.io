

window.onload = function() {
  document.querySelector('.bg1').onclick = function () {
    document.querySelector('.preview').style.backgroundColor = '#4990e2';
    document.querySelector('.lorem-ipsum').style.color = '#fff';
      return false;
  }

  document.querySelector('.bg2').onclick = function () {
    document.querySelector('.preview').style.backgroundColor = '#1fcc6d';
    document.querySelector('.lorem-ipsum').style.color = '#fff';
      return false;
  }

  document.querySelector('.bg3').onclick = function () {
    document.querySelector('.preview').style.backgroundColor = '#f1c40f';
    document.querySelector('.lorem-ipsum').style.color = '#fff';
      return false;
  }

  document.querySelector('.bg4').onclick = function () {
    document.querySelector('.preview').style.backgroundColor = '#34495e';
    document.querySelector('.lorem-ipsum').style.color = '#fff';
      return false;
  }

  document.querySelector('.bg5').onclick = function () {
    document.querySelector('.preview').style.backgroundColor = '#ecf0f1';
    document.querySelector('.lorem-ipsum').style.color = '#fff';
      return false;
  }

  document.querySelector('.bg5').onclick = function () {
    document.querySelector('.preview').style.backgroundColor = '#ecf0f1';
    document.querySelector('.lorem-ipsum').style.color = '#333';
      return false;
  }


}
			

			$(".bold").click(function(e) {
				e.preventDefault(); 
				$(".lorem-ipsum").css({"font-weight" : "bold"});
				$('.fontweight').text("Bold");
			});

			$(".normal").click(function(e) {
				e.preventDefault();
				$(".lorem-ipsum").css({"font-weight" : "normal"});
				$('.fontweight').text("Normal");
			});


			$(".sans").click(function(e) {
				e.preventDefault();
				$(".lorem-ipsum").css({"font-family" : "Source Sans Pro"});
				$('.fontfamily').text("Source Sans");
				$(".italic").removeClass("noclick");
				if( $(".karmina").hasClass('selected')) {
					$(".italic").css({"opacity" : "1"});
				} else{
					$(".italic").css({"opacity" : "1"});
				}
			});


			$(".voltage").click(function(e) {
				e.preventDefault();
				$(".lorem-ipsum").css({"font-family" : "Voltage"});
				$('.fontfamily').text("Voltage");
				$(".italic").addClass("noclick");
				$(".italic").removeClass("active");
				$('.fontstyle').text("");
				$(".lorem-ipsum").css({"font-style" : "normal"});
				if( $(".voltage").hasClass('selected')) {
					$(".italic").css({"opacity" : "0.25"});
				} else {
					$(".italic").css({"opacity" : "0.25"});
				}
			});

			$(".karmina").click(function(e) {
				e.preventDefault();
				$(".lorem-ipsum").css({"font-family" : "Karmina"});
				$('.fontfamily').text("Karmina");
				$(".italic").removeClass("noclick");
				if( $(".karmina").hasClass('selected')) {
					$(".italic").css({"opacity" : "1"});
				} else{
					$(".italic").css({"opacity" : "1"});
				}
			});


			$(".layout-background span").click(function(e) {
 	 			e.preventDefault();
 				$(".layout-background span").removeClass('check checkblack');
 				if( $(this).hasClass('bg5') ) {
 					$(this).addClass('checkblack');
 				} else {
 					$(this).addClass('check');
 				}
  			
			});

			$(".layout-font-w-s .fonts1").click(function(e) {
 	 			e.preventDefault();
 				$(".layout-font-w-s .fonts1").removeClass('active');
  			$(this).addClass('active');
  			});

			$(".layout-rectangle .rectangle .ab").click(function(e) {
 	 			e.preventDefault();
 				$(".layout-rectangle .rectangle .ab").removeClass('selected');
  			$(this).addClass('selected');
  			});

			if($('.sans').hasClass('selected') || $('.karmina').hasClass('selected')) {
				$(".italic").click(function(e) {
						e.preventDefault();

						if($(".italic").hasClass("active")) {
						$(".lorem-ipsum").css({"font-style" : "normal"});
						$('.fontstyle').text("");

						$(".italic").removeClass("active");
					} else {
						$(".lorem-ipsum").css({"font-style" : "italic"});
						$('.fontstyle').text("Italic");

						$(".italic").addClass("active");
					}
					});
			} else {
				$(".voltage").click(function(e){
					e.preventDefault();
					$(".italic").addClass("noclick");
				})
			};
