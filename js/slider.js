
    var owl = $('.screenshot_slider').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: true,
    margin: 0,   
    autoplay:true, 
    autoplayTimeout: 2000,
    smartSpeed: 400,
    center: true,
    navText: ['&#8592;', '&#8594;'],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1
        },
        1200: {
            items: 3
        }
    }
});

/****************************/

jQuery(document.documentElement).keydown(function (event) {    

    // var owl = jQuery("#carousel");

    // handle cursor keys
    if (event.keyCode == 37) {
       // go left
      owl.trigger('prev.owl.carousel', [400]);
      //owl.trigger('owl.prev');
    } else if (event.keyCode == 39) {
       // go right
        owl.trigger('next.owl.carousel', [400]);
       //owl.trigger('owl.next');
    }

});
