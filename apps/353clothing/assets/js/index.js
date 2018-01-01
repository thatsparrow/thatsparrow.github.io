$(document).ready(function() {

  $(".box").on("click", function() {
    $(this).siblings().toggleClass("hidden");
    $(this).toggleClass("full");
    $(".captionBox").toggleClass("hiddenText");
    $(this).children().animate({
      opacity: "1"
    }, 500, function() {});
  });

  if ($(window).width() < 768) {
    $(".box").on("click", function() {
      $("#gridGallery").toggleClass("mobileFunction");
    });
  }

  if ($(window).width() >= 768) {

    $(".box").hover(function() {
      $(this).siblings().toggleClass("opacity");
    });

  }

  $(".horizontal").click(function() {
    $(this).toggleClass("full");
    $(".captionBox").toggleClass("hiddenText");
    $(this).children().animate({
      opacity: "1"
    }, 500, function() {});
  });

  $(".horizontal").hover(function() {
    $(this).siblings().toggleClass("opacity");
  });

});