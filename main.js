$(document).ready(function(){
//menu
$('.menu__item').mouseenter(function(){
  $(this).children('.dropdown__item').addClass('active');
});

$('.menu__item').mouseleave(function(){
  $(this).children('.dropdown__item').removeClass('active');
});
//sottomenu
$('.first').mouseenter(function(){
  $('.sottomenu').addClass('active');
});

$('.first').mouseleave(function(){
  $('.sottomenu').removeClass('active');
});
});
