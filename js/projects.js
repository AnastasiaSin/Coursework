new Swiper('.projects-swiper__container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  //centeredSlides: true,
  //autoHeight: true,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,



  //navigation buttons
  navigation: {
    nextEl: '.swiper-button-next_projects',
    prevEl: '.swiper-button-prev_projects',
    disabledClass: 'swiper-button-disabled',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
    },


     768: {
       slidesPerView: 2,
   slidesPerGroup: 1,
   spaceBetween: 34,
     },

    992: {
      slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 34,
    },

    1024: {
      slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 50,
    },

    1200: {
      slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 50,
    },

    1400: {
      slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
    }

  },

  a11y: {
    enabled: true,
    firstSlideMessage: 'Первый слайд',
    lastSlideMessage: 'Последний слайд',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий  слайд',
  },





});



//popup

tippy('#btn-1', {
  theme: '#9D5CD0',
  content: '<span style="font-size: 12px; line-height: 16px; font-weight: 600; font-style: normal;">Пример современных тенденций - современная методология разработки</span>',
  allowHTML: true,
  maxWidth: 264,
  duration: 500,
});


tippy('#btn-2', {
  theme: '#9D5CD0',
  content: '<span style="font-size: 12px; line-height: 16px; font-weight: 600; font-style: normal;">Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции</span>',
  allowHTML: true,
  maxWidth: 264,
  duration: 500,
});

tippy('#btn-3', {
  theme: '#9D5CD0',
  content: '<span style="font-size: 12px; line-height: 16px; font-weight: 600; font-style: normal;">В стремлении повысить качество</span>',
  allowHTML: true,
  maxWidth: 264,
  duration: 500,
});


tippy('#btn-1_media', {
  theme: '#9D5CD0',
  content: '<span style="font-size: 12px; line-height: 16px; font-weight: 600; font-style: normal;">Пример современных тенденций - современная методология разработки</span>',
  allowHTML: true,
  maxWidth: 264,
  duration: 500,
});


tippy('#btn-2_media', {
  theme: '#9D5CD0',
  content: '<span style="font-size: 12px; line-height: 16px; font-weight: 600; font-style: normal;">Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции</span>',
  allowHTML: true,
  duration: 500,
});

tippy('#btn-3_media', {
  theme: '#9D5CD0',
  content: '<span style="font-size: 12px; line-height: 16px; font-weight: 600; font-style: normal;">В стремлении повысить качество</span>',
  allowHTML: true,
  duration: 500,
});
