'use strict';

$(function($) {
  /* Scroll efect */
  var target = $('.hero-slider');
  var targetHeight = target.height();

  ScrollFade(targetHeight);

  $(window).scroll(function(){
    ScrollFade(targetHeight);


  });

  $(window).resize(function() {
    if($('.slide-text.active .gradient').is(':visible') === false) {
      $('.slide-text.active .expandable').css({height: $('.slide-text.active .expandable').find('p').height()});
    }
  });

  function ScrollFade(targetHeight) {
    var scrollPercent = (targetHeight - $(document).scrollTop()) / targetHeight;

    if(scrollPercent >= 0.3) {
        $('.hero-slider').css('opacity', scrollPercent);
    }
  }

  /* Animated scroll to block */
  $('.icon-scroll, .scroll').on('click', function() {
    $("body, html").animate({ scrollTop: $('.content').offset().top - (($(window).width() > 768) ? 350 : 210) }, 500);
  });

  /* Expand content */
  $('.read-more').click(function(e) {
    e.preventDefault();

    var parent = $(this).parent();
    parent.css({display: 'none'});
    parent.parent().animate({ height: parent.parent().find('p').height()  }, 1000);
    $("body, html").animate({ scrollTop: $(document).height()+parent.parent().find('p').height() }, 1000);
  });

  /* Collapse content */
  $('.close').click(function(e) {
    e.preventDefault();
    var parent = $(this).parent().parent().parent();

    parent.animate({ height: '130px' }, 1000, function() {
      parent.find('.gradient').css({display: 'flex'});
    });
  });
});

$(function($) {
//  var pointsDesktop = [0.42546, 0.38546, 0.34546, 0.30546, 0.26546, 0.22546, 0.18546];
//  var pointsMobile = [0.57546, 0.48546, 0.39546, 0.30546, 0.21546, 0.12546, 0.03546];
  var pointsDesktop = [0.699, 0.599, 0.499, 0.399, 0.299];
  //var pointsMobile = [0.899, 0.699, 0.499, 0.299, 0.099];
  var pointsMobile = [0.779, 0.639, 0.499, 0.359, 0.219];
  var points = [];
  if($(window).width() <= 600) {
    points = pointsMobile;
  } else {
    points = pointsDesktop;
  }

  /*points = points.map(function(val, i) {
    if(i < 3 ) {
      return val + 0.02*i;
    } else if(i > 3) {
      return val - 0.02*i;
    }

    return val;
  });*/
  var curentStep = 2;
  var maxStep = 2;

  var tweens = [
    ///MotionInit('#cv', points[3]),
    MotionInit('#mobility_certificate', points[2]),
    MotionInit('#languages', points[3]),
    MotionInit('#diploma', points[4])
  ];

  $(window).resize(function() {
    if($(window).width() <= 600) {
      points = pointsMobile;
    } else {
      points = pointsDesktop;
    }

    tweens = [
      //MotionInit('#cv', points[3]),
      MotionInit('#mobility_certificate', points[curentStep]),
      MotionInit('#languages', points[curentStep+1]),
      MotionInit('#diploma', points[curentStep+2])
    ];

 });

 if(detectmob()) {
   $(window).scroll(function() {
     if ($('.content').isOnScreen()) {
       TweenMax.to(tweens[0], 1, {progress: points[curentStep]});
       TweenMax.to(tweens[1], 1, {progress: points[curentStep+1]});
       TweenMax.to(tweens[2], 1, {progress: points[curentStep+2]});
     }
   });
 }

  $('.next').on('click', function() {
    if(curentStep > 0) {
      curentStep-=1;
      changeStep(curentStep);
    }
  });

  $('.prew').on('click', function() {
    if(curentStep < maxStep) {
      curentStep+=1;
      changeStep(curentStep);
    }
  });

  new Hammer($(".swipe")[0], {
    domEvents: true
  });

  $(".swipe").on("swipeleft", function() {
    if(curentStep > 0) {
      curentStep-=1;
      changeStep(curentStep);
    }
  });

  $(".swipe").on("swiperight", function() {
    if(curentStep < maxStep) {
      curentStep+=1;
      changeStep(curentStep);
    }
  });

  $('.circle-wrap').on('click', function() {
		handleClick(maxStep-$(this).index());
	});

	function handleClick(index) {
		changeStep(index);
    curentStep = index;
	}

	function changeStep(step) {
    if(step >= 0 || step < maxStep) {
      //TweenMax.to(tweens[0], 1, {progress: points[step]});
      TweenMax.to(tweens[0], 1, {progress: points[step]});
      TweenMax.to(tweens[1], 1, {progress: points[step+1]});
      TweenMax.to(tweens[2], 1, {progress: points[step+2]});
      changeContent(maxStep-step);
    }
	}

  function changeContent(index) {
    $('.slide-text').removeAttr('style').removeClass('active');
    $('.slide-text').eq(index).animate({ opacity: 1 }, 1000).addClass('active');
    $('.slider-item').removeClass('active');
    $('.slider-item').eq(index).addClass('active');
    $('.circle-wrap').removeClass('active');
    $('.circle-wrap').eq(index).addClass('active');
    $('.expandable').eq(index).css({ height: '130px' });
    $('.expandable').eq(index).find('.gradient').css({display: 'flex'});
  }

  function MotionInit(selector, progress) {
    TweenMax.set(selector,{xPercent:-50, yPercent:-75});

    var motionPath = MorphSVGPlugin.pathDataToBezier('#path');
    var percentPath = motionPath.map(function(obj) {
      var rObj = {};
      rObj.x = obj.x*$('#pathSVG').width()/2477;
      rObj.y = obj.y*$('#pathSVG').height()/1242.3;
      return rObj;
    });

    var tween = TweenMax.to(selector, 5, {
      bezier:{
        values:percentPath,
        type:'cubic',
        autoRotate:["x", "y", "rotation", 180, false]
      },
      ease:Linear.easeNone
    });

    tween.progress(progress).pause();

    return tween;
  }

  $.fn.isOnScreen = function(){
      var win = $(window);

      var viewport = {
          top : win.scrollTop(),
          left : win.scrollLeft()
      };
      viewport.right = viewport.left + win.width();
      viewport.bottom = viewport.top + win.height();

      var bounds = this.offset();
      bounds.right = bounds.left + this.outerWidth();
      bounds.bottom = bounds.top + this.outerHeight();

      return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

  };

  function detectmob() {
   if( navigator.userAgent.match(/Android/i)
   || navigator.userAgent.match(/webOS/i)
   || navigator.userAgent.match(/iPhone/i)
   || navigator.userAgent.match(/iPad/i)
   || navigator.userAgent.match(/iPod/i)
   || navigator.userAgent.match(/BlackBerry/i)
   || navigator.userAgent.match(/Windows Phone/i)
   ){
      return true;
    }

    return false;
  }
});

$(window).on("load",function(e) {


  var toppag=$(".hero-slider");
  var pag=$(".content");
  var scroll;

  scroll = $(this).scrollTop()+$(this).height();
  pag.each(function(i,n){
      if(scroll > document.getElementById("content").offsetTop + 20) {
          toppag.eq(i).css({'position':'absolute', 'top': $('.hero-slider .active img').height() * (-1) + 20, 'bottom': ''});
          toppag.eq(i).find('img').css({'bottom': '', 'top': 0})
          //alert($(this).offset().top+','+document.getElementById('content').offsetTop);
      } else {
        toppag.eq(i).css({'position':'fixed', 'top': '' });
        toppag.eq(i).find('img').css({'bottom': 0, 'top': ''});
      }
  });


  $(window).scroll(function () {
      scroll = $(this).scrollTop()+$(this).height();
      pag.each(function(i,n){
          if(scroll > document.getElementById("content").offsetTop + 20) {
              toppag.eq(i).css({'position':'absolute', 'top': $('.hero-slider .active img').height() * (-1) + 20, 'bottom': ''});
              toppag.eq(i).find('img').css({'bottom': '', 'top': 0})
              //alert($(this).offset().top+','+document.getElementById('content').offsetTop);
          } else {
            toppag.eq(i).css({'position':'fixed', 'top': '' });
            toppag.eq(i).find('img').css({'bottom': 0, 'top': ''});
          }
      });
  });

  $(window).resize(function () {
      scroll = $(this).scrollTop()+$(this).height();
      pag.each(function(i,n){
          if(scroll > document.getElementById("content").offsetTop + 20) {
              toppag.eq(i).css({'position':'absolute', 'top': $('.hero-slider .active img').height() * (-1) + 20, 'bottom': ''});
              toppag.eq(i).find('img').css({'bottom': '', 'top': 0})
              //alert($(this).offset().top+','+document.getElementById('content').offsetTop);
          } else {
            toppag.eq(i).css({'position':'fixed', 'top': '' });
            toppag.eq(i).find('img').css({'bottom': 0, 'top': ''});
          }
      });
  });

  function headerPosition() {
    var pos = $(".circles-wrap").offset().top - 120;
    if ($(window).width() > 768) {
          if ($(window).scrollTop() > pos) {
              $(".main-header").css({
                  position: "absolute",
                  top: pos
              });
          } else {
              $(".main-header").css({
                  position: "fixed",
                  top: 0
              });
          }
      } else {
          $(".main-header").css({
              position: "relative",
              top: 0
          });
      }
  }

  $(window).scroll(headerPosition);
  $(window).resize(headerPosition);

});
