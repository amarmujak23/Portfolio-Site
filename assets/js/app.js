let h = $('#typewrite').data('content');
$('#typewrite').t(h);
$('#typewrite').t('speed',56)


//Terminal Loading

$(window).on("load", function () {
  "use strict";
  $("#preloader").delay(7000).fadeOut("slow");
});

$('#customLoader').t({
  speed:20,
  pause_on_click:true,
  typing:function(elm,chr){
   if(chr.match(/skyblue/))
    elm.find('.t-caret').hide();
   else if(chr.match(/__caret/))
    elm.find('.t-caret').show();
  }
  });
  

  //custom modal function

$(document).ready(function () {
  $(".modal .close").click(function () {
    modalHide();
  });

  function modalHide() {
    $(".modal").removeClass("active");
  }

  $('img[data-type="modal"],a[data-type="modal"], button[data-type="modal"]').click(function () {
    
    let target = $(this).attr("data-target");
    $("#" + target).addClass("active");
  });

  $(document).on("keydown", function (event) {
    if (event.key == "Escape") {
      modalHide();
    }
  });

  $(document).mouseup(function (e) {
    let modalbody = $(".modal-body");
    if (!modalbody.is(e.target) && modalbody.has(e.target).length === 0) {
      modalHide();
    }
  });
});



$(".filters ul li").click(function () {
  $(".filters ul li").removeClass("active");
  $(this).addClass("active");

  var data = $(this).attr("data-filter");
  $grid.isotope({
    filter: data,
  });
});

var $grid = $(".grid").isotope({
  itemSelector: ".all",
  percentPosition: true,
  masonry: {
    columnWidth: ".all",
  },
});

//custom mobile menu

$("#mobile-menu-open").click(function () {
  $(".mobile-menu-items").toggleClass("active");
});

$("#mobile-close").click(function () {
  $(".mobile-menu-items").removeClass("active");
});

$(".mobile-menu-item").click(function () {
  setTimeout(function () {
    $(".mobile-menu-items").removeClass("active");
  }, 200);
});

$(document).mouseup(function (e) {
  let container = $(".mobile-menu-items");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.removeClass("active");
  }
});


//custom scroll to top

mybutton = document.getElementById("scroll-top-btn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//custom scroll spy

$(document).ready(function () {
  $(document).on("scroll", onScroll);
  $('a[href^="#"]').on("click", function (e) {
    $("a").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");
  });
});

function onScroll(event) {
  let scrollPos = $(document).scrollTop();
  $("#top-menu a").each(function () {
    let currLink = $(this);
    let refElement = $(currLink.attr("href"));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $("#top-menu a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}

// Lazy Load

!function(window){
  var $q = function(q, res){
          if (document.querySelectorAll) {
              res = document.querySelectorAll(q);
          } else {
              var d=document
                  , a=d.styleSheets[0] || d.createStyleSheet();
              a.addRule(q,'f:b');
              for(var l=d.all,b=0,c=[],f=l.length;b<f;b++)
                  l[b].currentStyle.f && c.push(l[b]);

              a.removeRule(0);
              res = c;
          }
          return res;
      }
      , addEventListener = function(evt, fn){
          window.addEventListener
              ? this.addEventListener(evt, fn, false)
              : (window.attachEvent)
              ? this.attachEvent('on' + evt, fn)
              : this['on' + evt] = fn;
      }
      , _has = function(obj, key) {
          return Object.prototype.hasOwnProperty.call(obj, key);
      }
  ;

  function loadImage (el, fn) {
      var img = new Image()
          , src = el.getAttribute('data-src');
      img.onload = function() {
          if (!! el.parent)
              el.parent.replaceChild(img, el)
          else
              el.src = src;

          fn? fn() : null;
      }
      img.src = src;
  }

  function elementInViewport(el) {
      var rect = el.getBoundingClientRect()

      return (
          rect.top    >= 0
          && rect.left   >= 0
          && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
      )
  }

  var images = new Array()
      , query = $q('img.lazy')
      , processScroll = function(){
          for (var i = 0; i < images.length; i++) {
              if (elementInViewport(images[i])) {
                  loadImage(images[i], function () {
                      images.splice(i, i);
                  });
              }
          };
      }
  ;
  // Array.prototype.slice.call is not callable under our lovely IE8
  for (var i = 0; i < query.length; i++) {
      images.push(query[i]);
  };

  processScroll();
  addEventListener('scroll',processScroll);

}(this);

// Lazy Load End


