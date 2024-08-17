
$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
     loop:true,
    items:5,
    margin: 20,
    // rewindNav:true,
    // infinte:true,
     autoplay:true,
      autoplaySpeed:500,
    nav: true,
    responsiveClass:true,
    
    responsive:{
    300:{
      items:1,
      nav:true
    },
    768:{
      items:4
    },
    991:{
      items:5
    }
    }
    
    
    
    });
    
    
    });
    
    // tiny-slider
      
    var slider = tns({
    
    
      container: ".my-slider",
      items: 4
      ,
      gutter: 20,
      slideBy: 1,
      controlsPosition: "bottom",
      navPosition: "bottom",
      mouseDrag: true,
      autoplay: true,
      autoplayButtonOutput: false,
      controlsContainer: "#custom-control",
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        768: {
          items: 2,
          nav: true
        },
        991:{
          items:4
        },
        1440: {
          items: 4
        }
      }
    
    });
    