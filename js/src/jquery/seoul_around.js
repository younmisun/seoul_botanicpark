// seoul_around.js

(function($){

  // const forest = $('#foreset');
  const forestMap = $('.forest_map');
  const mapImg = forestMap.children('.map_img');
  const mapBtn = mapImg.children('.map_button');
  const mapBtnCom = mapBtn.find('button');
  const mapList = forestMap.children('.map_list');
  const mapListCom = mapList.children('div');

  mapListCom.css({transition:'all 300ms ease'});
  let windowW = $(window)
  let winW = windowW.outerWidth(true);

  mapBtnCom.on('mouseenter',function(e){
    e.preventDefault();
    let i = $(this).parent().index();
    mapListCom.eq(i).siblings().css({transform:'scale(1)', zIndex:0});
    mapListCom.eq(i).css({transform:'scale(1.2)', zIndex:100});

    if(winW <= 1279){
      mapListCom.eq(i).css({transform:'scale(1)'});
    }
  })

  mapBtnCom.on('mouseleave',function(e){
    e.preventDefault();
    let i = $(this).parent().index();
    mapListCom.eq(i).css({transform:'scale(1)'});
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