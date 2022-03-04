let title = "javascriptが使えました";
alert(title);

$(document).ready(function(){
  $('.jquery').on('click', function(){
    $(this).css('color', 'red');
  });
});

$(function(){
  $("#theTarget").skippr({
    transition: 'slide',
    speed: 1000,
    easing: 'easeOutQuart',
    navType: 'block',
    childrenElementType: 'div',
    arrows: true,
    autoPlay: true,
    autoPlayDuration: 3000,
    keyboardOnAlways: true,
    hidePrevious: false
  });
});