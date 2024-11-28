const swiper = new Swiper('.swiper-container', {
  // Optional parameters
    loop: true,
    sliderPerView:1,
    spaceBetween: 20,
    breakpoints: {
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        }
    },
    pagination: {
        el: '.pagination',
        bulletClass: 'pagination__button',
        bulletActiveClass: 'pagination__button--active',
    },
    navigation: {
      nextEl: '.carousel-button.next',
      prevEl: '.carousel-button.prev',
    },
});
