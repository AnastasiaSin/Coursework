window.addEventListener('DOMContentLoaded', function () {

  new Swiper('.gallery-swiper__container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    //centeredSlides: true,
    //autoHeight: true,

     slidesPerView: 3,
     slidesPerGroup: 3,

     grid: {
      row: 2,
     },

     spaceBetween: 50,

    //navigation buttons
    navigation: {
      nextEl: '.swiper-button-next_gallery',
      prevEl: '.swiper-button-prev_gallery',
    },

    //pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },


     breakpoints: {
      320: {
       slidesPerView: 1,
       slidesPerGroup: 1,
       grid: {
       rows: 1,
       },
       spaceBetween: 30,
      },

      //  620: {
      //    slidesPerView: 2,
      //    slidesPerGroup: 2,
      //    grid: {
      //     rows: 2,
      //     },
      //     spaceBetween: 34,
      //  },

       621: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
         rows: 2,
         },
         spaceBetween: 34,
      },
      // 768: {
      //   slidesPerView: 2,
      //   slidesPerGroup: 2,
      //   grid: {
      //   rows: 2,
      //   },

      //    spaceBetween: 34,
      // },

     1200: {
       slidesPerView: 3,
       slidesPerGroup: 3,
       grid: {
       rows: 2,
       },
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

    on: {
      /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
         beforeResize: function () {
           this.slides.forEach((el) => {
             el.style.marginTop = "";
           });
         }
       }

  });


//select-gallery

  const element = document.querySelector('#selectGallery');

    const choices = new Choices(element, {
     searchEnabled: false,
     shouldSort: false,
     itemSelectText: '',
     //renderSelectedChoices: always,
     duplicateItemsAllowed: false,

    });


    //

   document.querySelectorAll('.gallery-slide__link').forEach(function (tabsBtn) {
     tabsBtn.addEventListener('click', function (event) {
       const path = event.currentTarget.dataset.path
       document.querySelectorAll('.gallery-popup').forEach(function (tabsContent) {
         tabsContent.classList.remove('gallery-popup_active')
       });

       document.querySelector(`[data-target="${path}"]`).classList.add('gallery-popup_active');

   });
 });


 document.querySelectorAll('.gallery-popup__close').forEach(item => {
  item.addEventListener('click', function () {
    document.querySelectorAll('.gallery-popup').forEach(element => {
      element.classList.remove('gallery-popup_active');
    });
  });

});





});
