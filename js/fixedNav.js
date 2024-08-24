
const nav = $("#navigationBar");
  const navTop = nav.offset().top;
const navItem = $('.menu-toggler')
$(document).ready(function () {
	
  $(window).on("scroll", stickyNavigation);
  function stickyNavigation() {
      var body = $("body");
      if($(window).scrollTop() >= navTop) {
          body.css("padding-top", nav.outerHeight() + "px");
          navItem.addClass("fixedNav");
      } else {
          body.css("padding-top", 0);
          navItem.removeClass("fixedNav");
      }
  }

});