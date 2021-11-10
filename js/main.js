$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 6,
        loop: true,
        margin: 20,
        autoplay: 3000,
      reverse: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 5000,
        autoplayHoverPause:true,
        dots: false,
        
        autoWidth: true,
        // itemsDesktop: [1400,5],
        // itemsDesktopSmall: [1100,4],
        // itemsTablet: [700,3],
        // itemsMobile: [500,1],
        responsive: {
          0 : {
            items: 2,
          },

          480 : {
            items: 3,
          },

          521 : {
            items: 3,
          },
          1065 : {
            items: 4,
          },
          1255 : {
            items: 6
          }
        }
    });

});
//Alternate Direction
$(document).ready(function () {
    var owl = $('.owl-carousel2');
    owl.owlCarousel({
        items: 8,
        rtl: true,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayHoverPause:true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 30,
        

    });

});

$('.owl-carousel').on('mouseover',function(e){
    $(this).closest('.owl-carousel').trigger('stop.owl.autoplay');
  })
  $('.owl-carousel').on('mouseleave',function(e){
    $(this).closest('.owl-carousel').trigger('play.owl.autoplay',[500]);
  })
