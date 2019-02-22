$(document).ready(
  function(){

    $("nav").mouseover(
      function(){
        $(".nav-items").addClass("nav-show");
      }
    );

    $("nav").mouseout(
      function(){
        $(".nav-items").removeClass("nav-show");
      }
    );

    $('a.tooltip').mouseover(function() {
      var texto = $(this).attr('data-tooltip');
      $(this).children(".text_tooltip").html(texto);
      $(this).children(".text_tooltip").css('opacity', '1');
      $(this).children(".text_tooltip").css('box-shadow', '2px 2px 7px gray');

    });

    $('a.tooltip').mouseout(function() {
      $(this).children(".text_tooltip").css('opacity', '0');
    });

    $('.text_tooltip').mouseover(function(e) {
      e.stopPropagation();
    });

    var page = $("html, body");
    $('a.tooltip').click(function(){
        page.animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 750);
        return false;
      });

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
  });
