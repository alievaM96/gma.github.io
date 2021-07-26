$(document).ready(function () {
  $(".nav-burger").css("display", "none");
});

$(".open-menu").click(function () {
  $(".nav-burger").fadeIn();
});

$(".close-menu").click(function () {
  $(".nav-burger").fadeOut();
});

$(".nav-a").click(function () {
  $(".nav-burger").fadeOut();
});
