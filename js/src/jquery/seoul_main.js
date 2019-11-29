//seoul_main.js

(function($){

  const conBox = $('#contentBox');
  const viewBox = conBox.find('#viewBox');
  const slideIndi = viewBox.children('.slide_indicator');
  const indiLi = slideIndi.find('li');
  const indiBtn = indiLi.children('button');
  const slideAll = viewBox.children('.view_img');
  const slideImgList = slideAll.children('.imgList_view');
  const slideList = slideImgList.children('div');

  const place = conBox.find('#place');
  const placeList = place.find('article');

  const todayPro = $('#today_program');
  const todayProLink = todayPro.children('article').find('a');

  const gallery = $('#gallery');
  const galleryAll = gallery.children('.gallery_img');
  const galleryImgList = galleryAll.children('.imgList_gallery');
  let galleryImg = galleryImgList.children('li');
  const galleryBtn = gallery.children('.gallery_btn').find('button');


  //viewSlide
  let i = 0;
  let Go
  let slideLen = slideList.length;
  let timed = 2000;

  const MoveSlide = function(){
    Go = setInterval(function(){
      i++
      if(i>=slideLen){i=0;}
      slideAll.stop().animate({marginLeft:-100 * i + '%'});
      indiLi.eq(i).addClass('action');
      indiLi.eq(i).siblings().removeClass('action');
    },timed)
   };
  const MoveStop = function(){clearInterval(Go);}
  
  MoveSlide();

  viewBox.on('mouseenter',function(){MoveStop();});
  viewBox.on('mouseleave',function(){MoveSlide();});


  indiLi.on('click', function(e){
    e.preventDefault();

    i = $(this).index();
    slideAll.animate({marginLeft:-100 * i + '%'});

    indiLi.eq(i).addClass('action');
    indiLi.eq(i).siblings().removeClass('action');
  
  });

  placeList.on('mouseenter',function(){$(this).animate({bottom:'15px'});});
  placeList.on('mouseleave',function(){$(this).animate({bottom:0})})

  
  //todayProgram
  todayProLink.on('mouseenter',function(e){
    e.preventDefault();
    $(this).find('span').fadeIn();
    $(this).stop().animate({'backgroundColor':'rgba(0,0,0,0.5)'});
    })
  
  todayProLink.on('mouseleave',function(e){
    e.preventDefault();
    // $(this).find('span').css({display:'none'});
    $(this).find('span').fadeOut();
    $(this).stop().animate({'backgroundColor':'transparent'});
    })

  //gallery
  let imgListWidth = galleryImg.eq(0).outerWidth(true);
  
  galleryImg.eq(-1).prependTo(galleryImgList);
  galleryImg = galleryImgList.children('li');
  galleryImgList.css({position:'relative', left:-imgListWidth});

  //자동슬라이드
  let k = 0;
  let GalleryGo
  const GoGallery = function(){
    GalleryGo = setInterval(function(){
          k--;
          galleryImgList.animate({marginLeft:k + 'px'},0,function(){
          if(k <= -imgListWidth){
          k = 0;
          $(this).children().eq(0).appendTo(galleryImgList);
          galleryImgList.css({marginLeft:0});}
        });
    },15)
   };

  const StopGallery = function(){clearInterval(GalleryGo);}

  GoGallery();

  galleryBtn.on('click',function(){
    StopGallery();
    let BtnNext = $(this).hasClass('next');
    if(BtnNext){
      galleryImgList.animate({marginLeft:-imgListWidth + 'px'},function(){
        $(this).children().eq(0).appendTo(galleryImgList);
        galleryImgList.css({marginLeft:0});
      });
    }else{
      galleryImgList.animate({marginLeft:imgListWidth + 'px'},function(){
        $(this).children().eq(-1).prependTo(galleryImgList);
        galleryImgList.css({marginLeft:0});
      });
    }
  });

  gallery.on('mouseenter',function(){StopGallery();});
  gallery.on('mouseleave',function(){GoGallery();})
   

})(jQuery)