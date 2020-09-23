$('.burger-btn').on('click',function(){
  $('.burger-btn').toggleClass('close');
  $('.nav-wrapper').fadeToggle(500);
  $('body').toggleClass('noscroll');
});

if( $(window).width() < 768 ){
  $('.headeritem>a').on('click',function(){
    $('.nav-wrapper').fadeOut(500);
    $('.burger-btn').removeClass('close');
    $('body').removeClass('noscroll');
  });
};