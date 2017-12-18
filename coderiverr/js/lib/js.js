"use strict";

$(".nav__toggler").click(function (e) {
	e.preventDefault();
	if ($(".main-nav").hasClass("active")) {
		$(".main-nav").removeClass("active");
	} else {
		$(".main-nav").addClass("active");
	}
});