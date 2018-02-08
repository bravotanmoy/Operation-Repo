$(document).ready(function(){
  $(".regular").slick({
        autoplay:true,
        autoplaySpeed:4000,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        appendDots: false,
        speed:2000,
        swipe:true,
      });
});