var page = document.querySelector(".page");
var pageHeader = document.querySelector(".page-header");
var menuToggle = document.querySelector(".page-header__menu-toggle");

page.classList.remove("no-js")
menuToggle.addEventListener("click", function() {
  if (pageHeader.classList.contains("page-header--menu-closed")) {
    pageHeader.classList.remove("page-header--menu-closed");
    pageHeader.classList.add("page-header--menu");
  } else {
    pageHeader.classList.remove("page-header--menu");
    pageHeader.classList.add("page-header--menu-closed");
  }
}
);
