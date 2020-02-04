//seoul_stoty.js

(function($){

  const win = $(window);
  const PaP = $('.PaP');

    // mobile_btn
    const mob = $('#gnbMob');
    const mobBtn = mob.find('button');
    const mobMenu = mob.children('.menu_area');

    mobBtn.on('click',function(e){
      e.preventDefault();
      mobMenu.fadeToggle();
      $(this).toggleClass('active'); 
    });
  
    mob.on('scroll touchmove mousewheel',function(e){
      e.preventDefault();
      e.stopPropagation();
      return false;
    });


})(jQuery)