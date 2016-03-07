// Sticky header
$(window).scroll(function() {
if ($(this).scrollTop() >= 50){  
    $('.head').addClass("sticky");
    $('header').addClass("p-top");
  }
  else{
    $('.head').removeClass("sticky");
    $('header').removeClass("p-top");
  }
});
// Single nav function
$("nav ul").singlePageNav({
    "offset": 30,
    "updateHash": true
});
// Pop-up form funciton
$('.form-box__close').click(function(){
    $(this).closest('.col-lg-12').find('.form-box_white').removeClass('active fadeInUp animated');
    $(this).closest('.col-lg-12').find('.review').removeClass('hidden')
});
$('.container .review').click(function(){
    $(this).closest('.col-lg-12').find('.review').addClass('hidden');
    $(this).closest('.col-lg-12').find('.form-box_white').addClass('active fadeInUp animated');
    return false;
});
// Toggle menu funciton 
$('.toggle-menu').click(function(){
    $('.toggle-menu__sandwitch').toggleClass('active');
    $('header').toggleClass('active');
  });