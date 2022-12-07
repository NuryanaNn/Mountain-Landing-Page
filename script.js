var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    autoplay:{
        delay :2500,
        disabledonInteraction :false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

var swiper = new Swiper(".reviewSwiper", {
    spaceBetween: 30,
    autoplay:{
        delay :2500,
        disabledonInteraction :false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });