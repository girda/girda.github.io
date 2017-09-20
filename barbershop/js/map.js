var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");
var mapOverlay = document.querySelector(".modal-overlay")

mapOpen.addEventListener("click", function (evt){
	evt.preventDefault();
	mapPopup.classList.add("modal-content-show");
	mapOverlay.classList.add("modal-overlay-show");
});

mapClose.addEventListener("click", function (evt){
	evt.preventDefault();
	mapPopup.classList.remove("modal-content-show");
	mapOverlay.classList.remove("modal-overlay-show");
});


window.addEventListener("keydown", function(evt){
	if (evt.keyCode === 27){
		if (mapPopup.classList.contains("modal-content-show")){
			mapPopup.classList.remove("modal-content-show");
			mapOverlay.classList.remove("modal-overlay-show");
		}
	}
});