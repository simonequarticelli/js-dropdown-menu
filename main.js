$(document).ready(function(){
  //menu
  $('.menu__item').mouseenter(function(){
    $(this).children('.dropdown').addClass('active');
  });

  $('.menu__item').mouseleave(function(){
    $(this).children('.dropdown').removeClass('active');
  });
  //sottomenu
  $('.dropdown__item').mouseenter(function(){
    $('.sottomenu').addClass('active');
  });

  $('.dropdown__item').mouseleave(function(){
    $('.sottomenu').removeClass('active');
  });

});
