var link = document.querySelector(".btn-write-us");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var form = popup.querySelector("form")
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var storageLogin = localStorage.getItem("login");
var storageEmail = localStorage.getItem("email");
var message = popup.querySelector("[name=message]");
var overlay = document.querySelector(".modal-overlay")

link.addEventListener("click", function (evt){
	evt.preventDefault();
	popup.classList.add("modal-content-show");
	
	if (storageLogin) {
		login.value = storageLogin;
		email.focus();
	}else {
		login.focus();
	}
});

close.addEventListener("click", function (evt){
	evt.preventDefault();
	popup.classList.remove("modal-content-show");
	popup.classList.remove("modal-error");
	overlay.classList.remove("modal-overlay-show");
});

form.addEventListener("submit", function(evt){
	if (! login.value || password.value){
	evt.preventDefault();
	popup.classList.add("modal-error");
	} else {
		localStorage.setItem("login", login.value);
	}
});

window.addEventListener("keydown", function(evt){
	if (evt.keyCode === 27){
		if (popup.classList.contains("modal-content-show")){
			popup.classList.remove("modal-content-show");
			overlay.classList.remove("modal-overlay-show");
		}
	}
});

