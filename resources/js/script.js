// MixitUp

var mixer = mixitup('.grid-portfolio-container');

//scrollify 
$(function() {
    $.scrollify({
      section : ".scrollify",
      setHeights: false,
      scrollSpeed: 1000,
      updateHash: false,
    });
  });

  //HAMBURGER MENU

  function openmenu(){
    document.getElementById("navbar").style.height="100%";
  }
  function closebtn(){
    document.getElementById("navbar").style.height="0";
  }

  //SMOOTH SCROLL

  $(function(){
    $('.menu-item a,.scroll-down a').on('click',function(){
      $('html,body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      },500);
      return false
    });
  });