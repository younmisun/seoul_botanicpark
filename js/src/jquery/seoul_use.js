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

})(jQuery);