$(document).scroll(
  function(){
    var topWindow = $(window).scrollTop();
    if(topWindow > 60){
      $("header").addClass('header_fixed');
    }else{
      $("header").removeClass('header_fixed');
    };
  }
);
