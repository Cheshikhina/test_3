'use strict';
(function () {
  var swiper = new Swiper('.swiper-review', {
    // autoHeight: true,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        spaceBetween: 30,
      },
      768: {
        spaceBetween: 94,
      },
    }
  });
})();
