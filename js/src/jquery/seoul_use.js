//seoul_use.js

(function($){

  const floorInfo = $('.use_floor');
  const floorCom = floorInfo.children('div');
  const floorImg = floorCom.find('div');

  let windowW = $(window)
  let winW = windowW.outerWidth(true);

  floorImg.on('mouseenter',function(){
    $(this).animate({opacity:'0.7'});
  })

  floorImg.on('mouseleave',function(){
    $(this).animate({opacity:'1'});
  })

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


})(jQuery);