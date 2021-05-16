
const nav = $("#navigationBar");
  const navTop = nav.offset().top;

$(document).ready(function () {
	
  $(window).on("scroll", stickyNavigation);
  function stickyNavigation() {
      var body = $("body");
      if($(window).scrollTop() >= navTop) {
          body.css("padding-top", nav.outerHeight() + "px");
          body.addClass("fixedNav");
      } else {
          body.css("padding-top", 0);
          body.removeClass("fixedNav");
      }
  }

});