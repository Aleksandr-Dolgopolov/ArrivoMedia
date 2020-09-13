$(function () {
  $('.progress-bar--first').circleProgress({
    max: 100,
    value: 92,
    textFormat: 'percent'
  });
  $('.progress-bar--second').circleProgress({
    max: 100,
    value: 72,
    textFormat: 'percent'
  });
  $('.progress-bar--third').circleProgress({
    max: 100,
    value: 95,
    textFormat: 'percent'
  });
  $('.progress-bar--fourth').circleProgress({
    max: 100,
    value: 68,
    textFormat: 'percent'
  });
});

var $navMain = $(".main-nav");
var $navToggle = $(".main-nav__toggle");

$navToggle.on("click", function () {
  if ($navMain.hasClass("main-nav--closed")) {
    $navMain.removeClass('main-nav--closed');
    $navMain.addClass('main-nav--opened');
  } else {
    $navMain.addClass('main-nav--closed');
    $navMain.removeClass('main-nav--opened');
  }
});